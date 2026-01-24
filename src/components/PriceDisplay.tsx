import { useEffect, useRef } from "react";
import { clsx } from "clsx";

export const PriceDisplay = ({
  value,
  prefix = "$",
  className,
}: {
  value: number;
  prefix?: string;
  className?: string;
}) => {
  const prev = useRef(value);
  const flashTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const spanRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (value === prev.current || !spanRef.current) return;

    const direction = value > prev.current ? "up" : "down";
    prev.current = value;

    if (flashTimer.current) {
      clearTimeout(flashTimer.current);
    }

    const element = spanRef.current;
    element.classList.remove("text-brand-green", "text-red-500");
    element.classList.add(
      direction === "up" ? "text-brand-green" : "text-red-500",
    );

    flashTimer.current = setTimeout(() => {
      element.classList.remove("text-brand-green", "text-red-500");
      flashTimer.current = null;
    }, 1000);

    return () => {
      if (flashTimer.current) {
        clearTimeout(flashTimer.current);
        flashTimer.current = null;
      }
    };
  }, [value]);

  return (
    <span
      ref={spanRef}
      className={clsx("transition-colors duration-500", className)}
    >
      {prefix}
      {value.toLocaleString("en-US", { minimumFractionDigits: 2 })}
    </span>
  );
};
