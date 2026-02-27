import type { ReactNode } from "react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  label?: string;
  fullScreen?: boolean;
  overlay?: boolean;
}

export const LoadingSpinner = ({
  size = "md",
  label = "Loading",
  fullScreen = false,
  overlay = false,
}: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  };

  const spinner = (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className={`${sizeClasses[size]} relative`}>
        <div className="absolute inset-0 rounded-full border-2 border-dark-700" />
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-brand-green border-r-brand-green icon-spin" />
      </div>
      {label && <p className="text-sm text-light-400 font-medium">{label}</p>}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-dark-900/50 z-50">
        {spinner}
      </div>
    );
  }

  if (overlay) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-dark-800/50 rounded-lg z-40 backdrop-blur-sm">
        {spinner}
      </div>
    );
  }

  return <div className="flex items-center justify-center py-8">{spinner}</div>;
};
