import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { clsx } from "clsx";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
  hoverable?: boolean;
  noBorder?: boolean;
  noPadding?: boolean;
  noShadow?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      interactive = false,
      hoverable = false,
      noBorder = false,
      noPadding = false,
      noShadow = false,
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
          "rounded-2xl bg-dark-800",

          // Padding
          !noPadding && "p-6",

          // Border
          !noBorder && "border border-dark-700",

          // Shadow
          !noShadow && "shadow-base",

          // Hover effects
          (interactive || hoverable) &&
            "transition-all duration-200 hover:shadow-md hover:border-dark-600",
          interactive && "cursor-pointer hover:bg-dark-700/50",

          // Custom className
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title?: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ title, description, action, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx("flex items-start justify-between gap-4 mb-4", className)}
        {...props}
      >
        <div className="flex-1">
          {title && (
            <h3 className="text-lg font-bold text-light-100">{title}</h3>
          )}
          {description && (
            <p className="text-sm text-light-400 mt-1">{description}</p>
          )}
          {children && !title && !description && children}
        </div>
        {action && <div className="flex-shrink-0">{action}</div>}
      </div>
    );
  },
);

CardHeader.displayName = "CardHeader";

interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {}

export const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx("space-y-4", className)} {...props}>
        {children}
      </div>
    );
  },
);

CardBody.displayName = "CardBody";

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          "flex items-center justify-between gap-4 pt-4 border-t border-dark-700",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

CardFooter.displayName = "CardFooter";
