import { forwardRef, type HTMLAttributes } from "react";
import { clsx } from "clsx";

type BadgeVariant =
  | "default"
  | "success"
  | "error"
  | "warning"
  | "info"
  | "primary";
type BadgeSize = "sm" | "md";

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-dark-700 text-light-400 border border-dark-600",
  success:
    "bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 font-medium",
  error: "bg-red-500/10 text-red-500 border border-red-500/30 font-medium",
  warning:
    "bg-amber-500/10 text-amber-600 border border-amber-500/30 font-medium",
  info: "bg-blue-500/10 text-blue-500 border border-blue-500/30 font-medium",
  primary:
    "bg-brand-green/10 text-brand-green border border-brand-green/30 font-medium",
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: "px-2 py-1 text-xs rounded-md gap-1",
  md: "px-3 py-1.5 text-sm rounded-lg gap-1.5",
};

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      variant = "default",
      size = "md",
      icon,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={clsx(
          // Base styles
          "inline-flex items-center font-medium transition-all duration-200",

          // Variant
          variantStyles[variant],

          // Size
          sizeStyles[size],

          // Custom className
          className,
        )}
        {...props}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </div>
    );
  },
);

Badge.displayName = "Badge";
