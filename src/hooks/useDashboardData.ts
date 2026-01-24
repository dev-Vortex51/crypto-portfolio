/* eslint-disable react-hooks/purity */
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import Decimal from "decimal.js";
import { fetchWallet } from "../api/mock-wallet";
import { fetchPrices } from "../api/coingecko";

const STALE_THRESHOLD_MS = 15000;

export const useDashboardData = () => {
  const walletQuery = useQuery({
    queryKey: ["wallet"],
    queryFn: fetchWallet,
    staleTime: Infinity,
  });

  const assetIds = walletQuery.data?.map((a) => a.id) ?? [];

  const priceQuery = useQuery({
    queryKey: ["market", assetIds],
    queryFn: () => fetchPrices(assetIds),
    enabled: assetIds.length > 0,
    refetchInterval: 10000,
    placeholderData: (prev) => prev,
  });

  const domainState = useMemo(() => {
    if (walletQuery.isLoading)
      return { status: "loading" as const, assets: [], totals: null };

    if (walletQuery.isError)
      return { status: "error" as const, error: walletQuery.error };

    const walletAssets = walletQuery.data ?? [];
    let totalBalance = new Decimal(0);
    let previousBalance = new Decimal(0);

    const timeSinceUpdate = Date.now() - (priceQuery.dataUpdatedAt || 0);
    const isGlobalStale = timeSinceUpdate > STALE_THRESHOLD_MS;

    const assets = walletAssets.map((asset) => {
      const priceData = priceQuery.data?.[asset.id];

      const currentPrice = priceData?.usd ?? asset.avgBuyPrice;

      const totalValue = new Decimal(asset.quantity).times(currentPrice);
      const costBasis = new Decimal(asset.quantity).times(asset.avgBuyPrice);
      const pnlAbs = totalValue.minus(costBasis);

      totalBalance = totalBalance.plus(totalValue);

      const change24h = priceData?.usd_24h_change ?? 0;
      const openPrice = new Decimal(currentPrice).dividedBy(
        1 + change24h / 100,
      );
      previousBalance = previousBalance.plus(
        new Decimal(asset.quantity).times(openPrice),
      );

      return {
        ...asset,
        currentPrice,
        priceChange24hPercent: change24h,
        totalValue: totalValue.toNumber(),
        pnlAbsolute: pnlAbs.toNumber(),
        pnlPercent: pnlAbs.dividedBy(costBasis).times(100).toNumber(),
        isStale: !priceData || isGlobalStale,
      };
    });

    const total24hChange = totalBalance.minus(previousBalance);

    return {
      status: "success" as const,
      assets,
      totals: {
        balance: totalBalance.toNumber(),
        changeAbs: total24hChange.toNumber(),
        changePercent: previousBalance.isZero()
          ? 0
          : total24hChange.dividedBy(previousBalance).times(100).toNumber(),
      },
      isPriceStale: isGlobalStale,
      isPriceError: priceQuery.isError,
      lastUpdated: priceQuery.dataUpdatedAt,
    };
  }, [
    walletQuery.data,
    priceQuery.data,
    priceQuery.dataUpdatedAt,
    priceQuery.isError,
    walletQuery.isError,
    walletQuery.isLoading,
    walletQuery.error,
  ]);

  return {
    ...domainState,
    refetch: () => {
      walletQuery.refetch();
      priceQuery.refetch();
    },
  };
};
