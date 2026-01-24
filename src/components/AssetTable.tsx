import { AlertTriangle } from "lucide-react";
import type { AssetRowData } from "../types/types";
import { TableSkeleton } from "./TableSkeleton";
import { AssetTableRow } from "./AssetTableRow";

export const AssetTable = ({
  assets,
  isLoading,
}: {
  assets: AssetRowData[];
  isLoading: boolean;
}) => {
  if (isLoading) return <TableSkeleton />;

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        Your Assets
        {assets.some((a) => a.isStale) && (
          <span className="text-xs bg-amber-500/20 text-amber-500 px-2 py-1 rounded flex items-center gap-1">
            <AlertTriangle size={12} /> Data Delayed
          </span>
        )}
      </h3>

      <div className="bg-dark-800 rounded-2xl overflow-x-auto border border-dark-700">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-xs text-light-400 uppercase border-b border-dark-700">
              <th className="px-3 sm:px-6 py-4 font-medium">Name</th>
              <th className="px-3 sm:px-6 py-4 font-medium">Price</th>
              <th className="px-3 sm:px-6 py-4 font-medium hidden sm:table-cell">
                24H
              </th>
              <th className="px-3 sm:px-6 py-4 font-medium">Holdings</th>
              <th className="px-3 sm:px-6 py-4 font-medium hidden lg:table-cell">
                Avg. Buy Price
              </th>
              <th className="px-3 sm:px-6 py-4 font-medium">Profit/Loss</th>
              <th className="px-3 sm:px-6 py-4 font-medium hidden md:table-cell">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-dark-700">
            {assets.map((asset) => (
              <AssetTableRow key={asset.id} asset={asset} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
