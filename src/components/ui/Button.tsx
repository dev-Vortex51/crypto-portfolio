import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { clsx } from "clsx";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-green text-white hover:enabled:bg-brand-green-hover active:enabled:bg-brand-green-active border border-brand-green/50",
  secondary:
    "bg-dark-800 text-light-100 hover:enabled:bg-dark-700 border border-dark-700 active:enabled:bg-dark-600",
  ghost:
    "bg-transparent text-light-100 hover:enabled:bg-dark-700 active:enabled:bg-dark-600",
  danger:
    "bg-red-500/10 text-red-500 hover:enabled:bg-red-500/20 border border-red-500/20 active:enabled:bg-red-500/30",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-2 text-sm rounded-lg",
  md: "px-4 py-2.5 text-base rounded-lg",
  lg: "px-6 py-3 text-lg rounded-xl",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      icon,
      iconPosition = "left",
      fullWidth = false,
      disabled,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || isLoading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={clsx(
          // Base styles
          "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green",
          "disabled:opacity-50 disabled:cursor-not-allowed",

          // Variant styles
          variantStyles[variant],

          // Size styles
          sizeStyles[size],

          // Full width
          fullWidth && "w-full",

          // Custom className
          className,
        )}
        {...props}
      >
        {isLoading ? (
          <>
            <span className="h-4 w-4 rounded-full border-2 border-current border-t-transparent icon-spin" />
            {children}
          </>
        ) : (
          <>
            {icon && iconPosition === "left" && <span>{icon}</span>}
            {children}
            {icon && iconPosition === "right" && <span>{icon}</span>}
          </>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";
