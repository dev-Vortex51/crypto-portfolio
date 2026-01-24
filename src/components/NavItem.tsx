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
      `flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${
        isActive
          ? "text-brand-green bg-brand-green/10"
          : "text-light-400 hover:text-light-100 hover:bg-dark-700"
      }`
    }
  >
    {icon}
    <span className="text-sm font-medium">{label}</span>
  </NavLink>
);
