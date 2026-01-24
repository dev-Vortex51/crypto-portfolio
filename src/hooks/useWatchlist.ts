import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchMarkets } from "../api/coingecko";
import { availableTags, watchlistTargets } from "../data/watchlist";

export const useWatchlist = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  const targetIds = useMemo(() => watchlistTargets.map((t) => t.id), []);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["watchlist-markets", targetIds],
    queryFn: () => fetchMarkets(targetIds),
    enabled: targetIds.length > 0,
    staleTime: 15_000,
    refetchInterval: 30_000,
    placeholderData: (prev) => prev,
  });

  const metaMap = useMemo(() => {
    const map = new Map<string, { tags: string[]; note: string }>();
    watchlistTargets.forEach((t) =>
      map.set(t.id, { tags: t.tags, note: t.note }),
    );
    return map;
  }, []);

  const filteredAssets = useMemo(() => {
    const list = data ?? [];

    return list
      .map((asset) => {
        const meta = metaMap.get(asset.id);
        return {
          id: asset.id,
          name: asset.name,
          symbol: asset.symbol.toUpperCase(),
          image: asset.image ?? "",
          price: asset.current_price,
          change24h: asset.price_change_percentage_24h ?? 0,
          marketCap: asset.market_cap,
          volume24h: asset.total_volume,
          tags: meta?.tags ?? [],
          note: meta?.note ?? "",
        };
      })
      .filter((asset) => {
        const matchesSearch =
          asset.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          asset.symbol.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesTag =
          activeTag === "All" || asset.tags.includes(activeTag);

        return matchesSearch && matchesTag;
      });
  }, [data, searchQuery, activeTag, metaMap]);

  return {
    assets: filteredAssets,
    isLoading,
    isError,
    refetch,
    searchQuery,
    setSearchQuery,
    activeTag,
    setActiveTag,
    availableTags,
  };
};
