import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

export const NavItem = ({
  to,
  icon,
  label,
  onClick,
}: {
  to: string;
  icon: ReactNode;
  label: string;
  onClick?: () => void;
}) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 ${
        isActive
          ? "text-brand-green bg-brand-green/10 font-semibold"
          : "text-light-400 hover:text-light-100 hover:bg-dark-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
      }`
    }
    aria-current={({ isActive }) => (isActive ? "page" : undefined)}
    role="menuitem"
  >
    <span className="flex-shrink-0" aria-hidden="false">
      {icon}
    </span>
    <span className="text-sm font-medium">{label}</span>
  </NavLink>
);
