import { ArrowUpRight, PlusCircle, LineChart } from "lucide-react";
import { AssetTable } from "../components/AssetTable";
import { PortfolioChart } from "../components/PortfolioChart";
import { NetworkStatus } from "../components/NetworkStatus";
import { PriceDisplay } from "../components/PriceDisplay";
import { useDashboardData } from "../hooks/useDashboardData";

export const PortfolioPage = () => {
  const {
    assets,
    totals,
    status,
    isPriceStale,
    isPriceError,
    lastUpdated,
    refetch,
  } = useDashboardData();

  const isLoading = status === "loading";

  return (
    <div className="min-h-0 flex flex-col bg-dark-900 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6 sm:space-y-8">
      {/* HEADER SECTION */}
      <header className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-0">
        <div className="w-full lg:w-auto">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="text-light-400 text-sm font-medium tracking-wide">
              Current Balance
            </span>
            <NetworkStatus
              isStale={isPriceStale ?? false}
              isError={isPriceError ?? false}
              lastUpdated={lastUpdated}
              onRetry={refetch}
            />
          </div>

          {isLoading || !totals ? (
            <div className="space-y-2">
              {/* Responsive Skeleton widths */}
              <div className="h-10 sm:h-12 w-48 sm:w-64 bg-dark-800 animate-pulse rounded-lg" />
              <div className="h-5 sm:h-6 w-24 sm:w-32 bg-dark-800 animate-pulse rounded-lg" />
            </div>
          ) : (
            <div className="animate-in fade-in duration-500">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-light-100 tracking-tight">
                  <PriceDisplay value={totals.balance} />
                </h1>

                <span
                  className={`px-2.5 py-1 rounded-lg text-sm font-bold flex items-center gap-1 border ${
                    totals.changePercent >= 0
                      ? "bg-brand-green/10 text-brand-green border-brand-green/20"
                      : "bg-red-500/10 text-red-500 border-red-500/20"
                  }`}
                >
                  <ArrowUpRight
                    size={14}
                    className={totals.changePercent < 0 ? "rotate-90" : ""}
                  />
                  {Math.abs(totals.changePercent).toFixed(2)}%
                </span>
              </div>

              <div
                className={`mt-2 font-medium flex items-center gap-2 ${
                  totals.changeAbs >= 0 ? "text-brand-green" : "text-red-500"
                }`}
              >
                {totals.changeAbs >= 0 ? "+" : "-"}$
                {Math.abs(totals.changeAbs).toFixed(2)}
                <span className="text-light-400 text-sm font-normal">
                  last 24h
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-3 w-full lg:w-auto">
          <button
            type="button"
            aria-disabled
            title="Analytics coming soon"
            className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-4 py-3 sm:py-2.5 bg-dark-800 text-light-400 rounded-full font-medium border border-dark-700 cursor-not-allowed opacity-70"
          >
            <LineChart size={18} className="text-light-400" />
            <span>Analytics</span>
          </button>
          <button
            type="button"
            aria-disabled
            title="Add Asset coming soon"
            className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-4 py-3 sm:py-2.5 bg-brand-green text-white rounded-full font-medium opacity-70 cursor-not-allowed"
          >
            <PlusCircle size={18} />
            <span>Add Asset</span>
          </button>
        </div>
      </header>

      <section className="h-64 sm:h-80 lg:h-96 w-full">
        <PortfolioChart />
      </section>

      <section className="overflow-x-auto mt-10 sm:mt-auto -mx-4 sm:mx-0 px-4 sm:px-0">
        <div className="min-w-180 sm:min-w-0">
          <AssetTable assets={assets ?? []} isLoading={isLoading} />
        </div>
      </section>
    </div>
  );
};
