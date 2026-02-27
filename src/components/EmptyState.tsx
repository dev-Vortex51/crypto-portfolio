import type { ReactNode } from "react";
import { AlertCircle, FileX, TrendingUp } from "lucide-react";

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  type?: "default" | "error" | "success";
}

export const EmptyState = ({
  icon,
  title,
  description,
  action,
  type = "default",
}: EmptyStateProps) => {
  const getIconColor = () => {
    switch (type) {
      case "error":
        return "text-red-500";
      case "success":
        return "text-brand-green";
      default:
        return "text-light-400";
    }
  };

  const defaultIcon = 
    type === "error" ? (
      <AlertCircle size={48} />
    ) : type === "success" ? (
      <TrendingUp size={48} />
    ) : (
      <FileX size={48} />
    );

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className={`${getIconColor()} mb-4 opacity-80`}>
        {icon || defaultIcon}
      </div>
      
      <h3 className="text-lg font-bold text-light-100 mb-2">{title}</h3>
      
      <p className="text-sm text-light-400 max-w-sm mb-6">{description}</p>

      {action && (
        <button
          onClick={action.onClick}
          className="px-6 py-2 bg-brand-green text-white rounded-full font-medium transition-all duration-200 hover:bg-brand-green-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
        >
          {action.label}
        </button>
      )}
    </div>
  );
};
