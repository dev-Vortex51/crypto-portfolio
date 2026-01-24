import { useWatchlist } from "../hooks/useWatchlist";
import { WatchlistHeader } from "./WatchlistHeader";
import { WatchlistItem } from "./WatchlistItem";

export const Watchlist = () => {
  const {
    assets,
    isLoading,
    isError,
    refetch,
    searchQuery,
    setSearchQuery,
    activeTag,
    setActiveTag,
    availableTags,
  } = useWatchlist();

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-screen-2xl mx-auto space-y-4 sm:space-y-6">
      <WatchlistHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeTag={activeTag}
        onTagChange={setActiveTag}
        availableTags={availableTags}
      />

      <div className="bg-dark-800 border border-dark-700 rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/5">
        <div className="overflow-x-auto">
          {isLoading ? (
            <div className="px-6 py-20 text-center text-light-400 animate-pulse">
              Loading market data...
            </div>
          ) : isError ? (
            <div className="px-6 py-20 text-center text-light-400 space-y-4">
              <p>Unable to sync watchlist.</p>
              <button
                onClick={() => refetch()}
                className="px-4 py-2 text-sm font-medium rounded-lg bg-dark-700 text-light-100 hover:bg-dark-600 border border-dark-600 transition-colors"
              >
                Retry Connection
              </button>
            </div>
          ) : assets.length > 0 ? (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-xs text-light-400 uppercase border-b border-dark-700 bg-dark-800/70 backdrop-blur">
                  <th className="sticky left-0 z-10 bg-dark-800 px-4 sm:px-6 py-4 font-medium shadow-[2px_0_5px_-2px_rgba(0,0,0,0.3)]">
                    Asset
                  </th>
                  <th className="px-4 sm:px-6 py-4 font-medium whitespace-nowrap">
                    Price
                  </th>
                  <th className="px-4 sm:px-6 py-4 font-medium whitespace-nowrap">
                    24h Change
                  </th>
                  <th className="px-4 sm:px-6 py-4 font-medium whitespace-nowrap hidden md:table-cell">
                    Market Cap
                  </th>
                  <th className="px-4 sm:px-6 py-4 font-medium whitespace-nowrap hidden lg:table-cell">
                    Volume
                  </th>
                  <th className="px-4 sm:px-6 py-4 font-medium whitespace-nowrap hidden xl:table-cell">
                    Insight
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-dark-700">
                {assets.map((asset) => (
                  <WatchlistItem key={asset.id} asset={asset} />
                ))}
              </tbody>
            </table>
          ) : (
            <div className="px-6 py-20 text-center text-light-400">
              No assets match your search
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
