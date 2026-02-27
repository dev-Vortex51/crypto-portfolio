import { ArrowUpRight, ArrowDownRight, MoreHorizontal } from "lucide-react";
import type { AssetRowData } from "../types/types";
import { PriceDisplay } from "./PriceDisplay";
import { Badge } from "./ui/Badge";

export const AssetCard = ({ asset }: { asset: AssetRowData }) => {
  return (
    <div
      className="bg-dark-700 rounded-xl p-4 border border-dark-600 hover:border-dark-500 transition-all duration-200 space-y-3"
      role="article"
      aria-label={`${asset.name} asset card`}
    >
      {/* Header with name and action */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <img
            src={asset.icon}
            alt={asset.symbol}
            className="w-8 h-8 rounded-full flex-shrink-0"
          />
          <div>
            <h3 className="font-bold text-light-100 text-sm">
              {asset.name}
            </h3>
            <p className="text-xs text-light-400 uppercase">{asset.symbol}</p>
          </div>
        </div>
        <button 
          className="p-2 hover:bg-dark-600 rounded-lg text-light-400 hover:text-light-100 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
          aria-label={`Actions for ${asset.name}`}
        >
          <MoreHorizontal size={16} aria-hidden="true" />
        </button>
      </div>

      {/* Divider */}
      <div className="h-px bg-dark-600" />

      {/* Price section */}
      <div className="space-y-2">
        <div className="flex items-end justify-between">
          <span className="text-xs text-light-400">Current Price</span>
          <span
            className={`flex items-center gap-1 text-xs font-medium ${
              asset.priceChange24hPercent >= 0
                ? "text-brand-green"
                : "text-red-500"
            }`}
          >
            {asset.priceChange24hPercent >= 0 ? (
              <ArrowUpRight size={12} />
            ) : (
              <ArrowDownRight size={12} />
            )}
            {Math.abs(asset.priceChange24hPercent).toFixed(2)}%
          </span>
        </div>
        <div className="font-bold text-light-100">
          <PriceDisplay value={asset.currentPrice} />
        </div>
      </div>

      {/* Holdings section */}
      <div className="space-y-2">
        <div className="flex items-end justify-between">
          <span className="text-xs text-light-400">Holdings</span>
          <Badge 
            variant="default" 
            size="sm"
            className="text-xs"
          >
            {asset.quantity.toFixed(4)} {asset.symbol.toUpperCase()}
          </Badge>
        </div>
        <div className="font-bold text-light-100">
          <PriceDisplay value={asset.totalValue} />
        </div>
      </div>

      {/* Profit/Loss section */}
      <div className="space-y-2">
        <span className="block text-xs text-light-400">Profit/Loss</span>
        <div
          className={`font-bold ${
            asset.pnlAbsolute >= 0 ? "text-brand-green" : "text-red-500"
          }`}
        >
          {asset.pnlAbsolute >= 0 ? "+" : "-"}$
          {Math.abs(asset.pnlAbsolute).toLocaleString()}
        </div>
        <div
          className={`text-sm font-medium ${
            asset.pnlPercent >= 0 ? "text-brand-green" : "text-red-500"
          }`}
        >
          {asset.pnlPercent.toFixed(2)}%
        </div>
      </div>

      {/* Avg buy price (optional detail) */}
      {asset.avgBuyPrice && (
        <div className="pt-2 border-t border-dark-600">
          <div className="flex items-center justify-between text-xs">
            <span className="text-light-400">Avg. Buy Price</span>
            <span className="text-light-100 font-medium">
              ${asset.avgBuyPrice.toLocaleString()}
            </span>
          </div>
        </div>
      )}

      {/* Stale data indicator */}
      {asset.isStale && (
        <Badge variant="warning" size="sm" className="w-full justify-center mt-2">
          Data Delayed
        </Badge>
      )}
    </div>
  );
};
