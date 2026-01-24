export const TableSkeleton = () => (
  <div className="animate-pulse space-y-4">
    {[1, 2, 3, 4].map((i) => (
      <div
        key={i}
        className="flex items-center justify-between p-4 bg-dark-800 border-b border-dark-700"
      >
        <div className="flex items-center gap-3 w-1/4">
          <div className="w-8 h-8 rounded-full bg-dark-700" />
          <div className="h-4 w-24 bg-dark-700 rounded" />
        </div>
        <div className="h-4 w-16 bg-dark-700 rounded" />
        <div className="h-4 w-16 bg-dark-700 rounded" />
        <div className="h-4 w-20 bg-dark-700 rounded" />
      </div>
    ))}
  </div>
);
