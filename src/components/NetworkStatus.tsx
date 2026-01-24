/* eslint-disable react-hooks/purity */
import { WifiOff, AlertTriangle } from "lucide-react";

interface Props {
  isStale: boolean;
  isError: boolean;
  lastUpdated?: number;
  onRetry: () => void;
}

export const NetworkStatus = ({
  isStale,
  isError,
  lastUpdated,
  onRetry,
}: Props) => {
  if (isError) {
    return (
      <button
        onClick={onRetry}
        className="flex items-center gap-2 px-3 py-1 bg-red-500/20 text-red-400 text-xs font-bold rounded-full hover:bg-red-500/30 transition"
      >
        <WifiOff size={12} />
        Price API Failed • Retry
      </button>
    );
  }

  if (isStale) {
    return (
      <div className="flex items-center gap-2 px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold rounded-full">
        <AlertTriangle size={12} />
        <span>
          Data Delayed ({((Date.now() - (lastUpdated || 0)) / 1000).toFixed(0)}s
          ago)
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 px-3 py-1 bg-brand-green/10 text-brand-green text-xs font-bold rounded-full">
      <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
      <span>Live Updates</span>
    </div>
  );
};
