import { ArrowUpRight, ArrowDownRight, MoreHorizontal } from "lucide-react";
import type { AssetRowData } from "../types/types";
import { PriceDisplay } from "./PriceDisplay";
import { clsx } from "clsx";

export const AssetTableRow = ({ asset }: { asset: AssetRowData }) => {
  return (
    <tr
      className={clsx(
        "group hover:bg-dark-700/50 transition-all duration-200",
        asset.isStale && "opacity-60 pointer-events-none",
      )}
      role="row"
    >
      {/* Identity */}
      <td className="px-3 sm:px-6 py-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <img
            src={asset.icon}
            alt={asset.symbol}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full"
          />
          <div>
            <div className="font-bold text-light-100 text-sm sm:text-base">
              {asset.name}
            </div>
            <div className="text-xs text-light-400 uppercase">
              {asset.symbol}
            </div>
          </div>
        </div>
      </td>

      {/* Live Price with Jitter Control */}
      <td className="px-3 sm:px-6 py-4 font-medium text-light-100 text-sm sm:text-base">
        <PriceDisplay value={asset.currentPrice} />
      </td>

      {/* 24h Change */}
      <td className="px-3 sm:px-6 py-4 hidden sm:table-cell">
        <div
          className={clsx(
            "flex items-center gap-1 text-sm font-medium",
            asset.priceChange24hPercent >= 0
              ? "text-brand-green"
              : "text-red-500",
          )}
        >
          {asset.priceChange24hPercent >= 0 ? (
            <ArrowUpRight size={14} />
          ) : (
            <ArrowDownRight size={14} />
          )}
          {Math.abs(asset.priceChange24hPercent).toFixed(2)}%
        </div>
      </td>

      {/* Holdings */}
      <td className="px-3 sm:px-6 py-4">
        <div className="font-medium text-light-100 text-sm sm:text-base">
          <PriceDisplay value={asset.totalValue} />
        </div>
        <div className="text-xs text-light-400">
          {asset.quantity} {asset.symbol.toUpperCase()}
        </div>
      </td>

      {/* Cost Basis */}
      <td className="px-3 sm:px-6 py-4 text-light-400 font-medium text-sm sm:text-base hidden lg:table-cell">
        ${asset.avgBuyPrice.toLocaleString()}
      </td>

      {/* Calculated P&L */}
      <td className="px-3 sm:px-6 py-4">
        <div
          className={clsx(
            "font-medium",
            asset.pnlAbsolute >= 0 ? "text-brand-green" : "text-red-500",
          )}
        >
          {asset.pnlAbsolute >= 0 ? "+" : "-"}$
          {Math.abs(asset.pnlAbsolute).toLocaleString()}
        </div>
        <div
          className={clsx(
            "text-xs",
            asset.pnlPercent >= 0 ? "text-brand-green" : "text-red-500",
          )}
        >
          {asset.pnlPercent.toFixed(2)}%
        </div>
      </td>

      <td className="px-3 sm:px-6 py-4 hidden md:table-cell">
        <button 
          className="p-2 hover:bg-dark-900 rounded-lg text-light-400 hover:text-light-100 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
          aria-label={`Actions for ${asset.name}`}
        >
          <MoreHorizontal size={16} aria-hidden="true" />
        </button>
      </td>
    </tr>
  );
};
