import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import { clsx } from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  error?: string;
  label?: string;
  hint?: string;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      icon,
      iconPosition = "left",
      error,
      label,
      hint,
      helperText,
      className,
      disabled,
      ...props
    },
    ref,
  ) => {
    const hasError = !!error;

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-light-100 mb-2">
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <div className="relative">
          {icon && iconPosition === "left" && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-light-400 pointer-events-none flex-shrink-0">
              {icon}
            </div>
          )}

          <input
            ref={ref}
            disabled={disabled}
            className={clsx(
              // Base styles
              "w-full px-4 py-2.5 rounded-lg font-medium transition-all duration-200",
              "bg-dark-800 text-light-100 placeholder-light-400",
              "border border-dark-700",

              // Icon padding
              icon && iconPosition === "left" && "pl-10",
              icon && iconPosition === "right" && "pr-10",

              // Focus state
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 focus-visible:ring-offset-dark-900",

              // Hover state
              "hover:enabled:border-dark-600",

              // Error state
              hasError &&
                "border-red-500 focus-visible:ring-red-500 bg-red-500/5",

              // Disabled state
              "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-dark-700",

              // Custom className
              className,
            )}
            {...props}
          />

          {icon && iconPosition === "right" && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-light-400 pointer-events-none flex-shrink-0">
              {icon}
            </div>
          )}
        </div>

        {hint && !hasError && (
          <p className="mt-2 text-xs text-light-400">{hint}</p>
        )}

        {error && (
          <p className="mt-2 text-xs text-red-500 font-medium">{error}</p>
        )}

        {helperText && !hasError && !hint && (
          <p className="mt-2 text-xs text-light-400">{helperText}</p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
