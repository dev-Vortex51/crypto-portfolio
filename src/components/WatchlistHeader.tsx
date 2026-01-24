import { Search } from "lucide-react";
import { clsx } from "clsx";

interface WatchlistHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeTag: string;
  onTagChange: (tag: string) => void;
  availableTags: string[];
}

export const WatchlistHeader = ({
  searchQuery,
  onSearchChange,
  activeTag,
  onTagChange,
  availableTags,
}: WatchlistHeaderProps) => {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Title Section */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-light-100 tracking-tight">
            Market Watch
          </h1>
          <p className="text-sm text-light-400 mt-1">
            Real-time tracking of top digital assets
          </p>
        </div>
      </div>

      {/* Controls Section */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search Input */}
        <div className="relative flex-1 lg:max-w-md group">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-light-400 group-focus-within:text-brand-green transition-colors"
          />
          <input
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by name or symbol..."
            className="w-full pl-10 pr-4 py-2.5 bg-dark-800 border border-dark-700 rounded-xl text-light-100 placeholder:text-light-400 focus:outline-none focus:border-brand-green/50 focus:ring-1 focus:ring-brand-green/50 transition-all text-sm"
          />
        </div>

        {/* Tags - Scrollable on mobile, flex on desktop */}
        <div className="flex-1 overflow-x-auto pb-2 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 no-scrollbar">
          <div className="flex items-center gap-2 min-w-max">
            {availableTags.map((tag) => (
              <button
                key={tag}
                onClick={() => onTagChange(tag)}
                className={clsx(
                  "px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all border",
                  activeTag === tag
                    ? "bg-brand-green text-white border-brand-green shadow-lg shadow-brand-green/20"
                    : "bg-dark-800 text-light-400 border-dark-700 hover:border-dark-600 hover:text-light-100 hover:bg-dark-700",
                )}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
