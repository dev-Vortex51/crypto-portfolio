import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { clsx } from "clsx";
import { PriceDisplay } from "./PriceDisplay";
import type { WatchlistAsset } from "../data/watchlist";

const compact = new Intl.NumberFormat("en", {
  notation: "compact",
  maximumFractionDigits: 1,
});

interface WatchlistItemProps {
  asset: WatchlistAsset;
}

export const WatchlistItem = ({ asset }: WatchlistItemProps) => {
  const imageSrc = asset.image?.trim()
    ? asset.image
    : "https://dummyimage.com/64x64/0f172a/f9fafb&text=?";

  return (
    <tr className="group hover:bg-dark-700/30 transition-colors">
      <td className="sticky left-0 z-10 bg-dark-800 group-hover:bg-dark-800 transition-colors px-4 sm:px-6 py-4 border-r border-dark-700/50 sm:border-none backdrop-blur">
        <div className="flex items-center gap-3">
          <img
            src={imageSrc}
            alt={asset.symbol}
            className="w-8 h-8 rounded-full shadow-sm"
          />
          <div>
            <div className="font-bold text-light-100 text-sm sm:text-base whitespace-nowrap">
              {asset.name}
            </div>
            <div className="text-[10px] sm:text-xs text-light-400 font-mono uppercase tracking-wider">
              {asset.symbol}
            </div>
          </div>
        </div>
      </td>

      {/* 2. Price (Always Visible) */}
      <td className="px-4 sm:px-6 py-4 font-mono font-medium text-light-100 text-sm sm:text-base whitespace-nowrap">
        <PriceDisplay value={asset.price} />
      </td>

      {/* 3. Change (Always Visible) */}
      <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
        <div
          className={clsx(
            "flex items-center gap-1 font-mono font-medium text-sm",
            asset.change24h >= 0 ? "text-brand-green" : "text-red-500",
          )}
        >
          {asset.change24h >= 0 ? (
            <ArrowUpRight size={16} />
          ) : (
            <ArrowDownRight size={16} />
          )}
          {Math.abs(asset.change24h).toFixed(2)}%
        </div>
      </td>

      {/* 4. Desktop Columns (Hidden on Mobile) */}
      <td className="px-4 sm:px-6 py-4 font-medium text-light-100 text-sm hidden md:table-cell whitespace-nowrap">
        ${compact.format(asset.marketCap)}
      </td>

      <td className="px-4 sm:px-6 py-4 font-medium text-light-100 text-sm hidden lg:table-cell whitespace-nowrap">
        ${compact.format(asset.volume24h)}
      </td>

      <td className="px-4 sm:px-6 py-4 text-xs sm:text-sm text-light-400 hidden xl:table-cell max-w-xs truncate">
        {asset.note}
      </td>
    </tr>
  );
};
