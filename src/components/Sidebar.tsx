import { Wallet, LineChart, Settings, PlusCircle } from "lucide-react";
import { NavItem } from "./NavItem";
import { BrandMark } from "./BrandMark";
// import { PortfolioSelector } from "./PortfolioSelector";

export const Sidebar = ({ onNavigate }: { onNavigate?: () => void }) => {
  return (
    <aside className="w-64 h-screen border-r border-dark-700 bg-dark-800 flex flex-col overflow-hidden">
      <BrandMark />

      {/* <PortfolioSelector /> */}

      <nav className="flex-1 px-4 mt-6 space-y-1">
        <NavItem
          to="/"
          icon={<Wallet size={20} />}
          label="Portfolio"
          onClick={onNavigate}
        />
        <NavItem
          to="/watchlist"
          icon={<LineChart size={20} />}
          label="Watchlist"
          onClick={onNavigate}
        />
        <NavItem
          to="/settings"
          icon={<Settings size={20} />}
          label="Settings"
          onClick={onNavigate}
        />
      </nav>

      <div className="p-4">
        <button
          type="button"
          aria-disabled
          title="Create portfolio coming soon"
          className="w-full flex items-center justify-center gap-2 bg-brand-green text-white py-3 rounded-full font-medium opacity-70 cursor-not-allowed"
        >
          <PlusCircle size={18} />
          Create portfolio
        </button>
      </div>
    </aside>
  );
};
