import { AlertTriangle } from "lucide-react";
import type { AssetRowData } from "../types/types";
import { TableSkeleton } from "./TableSkeleton";
import { AssetTableRow } from "./AssetTableRow";
import { EmptyState } from "./EmptyState";

export const AssetTable = ({
  assets,
  isLoading,
}: {
  assets: AssetRowData[];
  isLoading: boolean;
}) => {
  if (isLoading) return <TableSkeleton />;

  if (assets.length === 0) {
    return (
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Your Assets</h3>
        <div className="bg-dark-800 rounded-2xl border border-dark-700 overflow-hidden">
          <EmptyState
            title="No Assets Yet"
            description="Start building your portfolio by adding your first cryptocurrency asset."
            action={{
              label: "Add Asset",
              onClick: () => console.log("Add asset clicked"),
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        Your Assets
        {assets.some((a) => a.isStale) && (
          <span className="text-xs bg-warning-light text-warning px-2 py-1 rounded-full flex items-center gap-1 font-medium">
            <AlertTriangle size={12} /> Data Delayed
          </span>
        )}
      </h3>

      <div className="bg-dark-800 rounded-2xl overflow-x-auto border border-dark-700 shadow-base transition-shadow duration-200 hover:shadow-md">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-xs text-light-400 uppercase border-b border-dark-700 bg-dark-700/30">
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
