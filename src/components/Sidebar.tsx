import { Wallet, LineChart, Settings, PlusCircle } from "lucide-react";
import { NavItem } from "./NavItem";
import { BrandMark } from "./BrandMark";
import { ThemeToggle } from "./ThemeToggle";
// import { PortfolioSelector } from "./PortfolioSelector";

export const Sidebar = ({ onNavigate }: { onNavigate?: () => void }) => {
  return (
    <aside 
      className="w-64 h-screen border-r border-dark-700 bg-dark-800 flex flex-col overflow-hidden"
      aria-label="Navigation"
    >
      <BrandMark />

      {/* <PortfolioSelector /> */}

      <nav 
        className="flex-1 px-4 mt-6 space-y-1"
        aria-label="Main navigation"
        role="navigation"
      >
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

      <div className="p-4 border-t border-dark-700 space-y-3">
        <div className="flex items-center justify-center">
          <ThemeToggle />
        </div>
        <button
          type="button"
          disabled
          aria-label="Create portfolio - Coming soon"
          className="w-full flex items-center justify-center gap-2 bg-brand-green text-white py-3 rounded-full font-medium disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 hover:enabled:bg-brand-green-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
        >
          <PlusCircle size={18} />
          Create portfolio
        </button>
      </div>
    </aside>
  );
};
