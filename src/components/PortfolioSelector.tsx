export const PortfolioSelector = () => {
  return (
    <div className="px-4 py-2">
      <div className="text-xs font-semibold text-light-400 uppercase tracking-wider mb-2 px-2">
        Portfolios
      </div>
      <div className="flex items-center gap-3 p-3 bg-dark-700 rounded-xl cursor-pointer">
        <div className="w-8 h-8 rounded-full bg-green-200 overflow-hidden">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Main"
            alt="avatar"
          />
        </div>
        <div>
          <div className="text-sm font-medium">Main Portfolio</div>
          <div className="text-xs text-light-400">≈ $1,475</div>
        </div>
      </div>
    </div>
  );
};
