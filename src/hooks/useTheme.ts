import { useState, useCallback, useEffect } from "react";

export type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "crypto-portfolio-theme";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check localStorage first
    const stored = localStorage?.getItem(THEME_STORAGE_KEY);
    if (stored === "dark" || stored === "light") {
      return stored;
    }

    // Check system preference
    if (typeof window !== "undefined") {
      const prefersDark = window.matchMedia?.(
        "(prefers-color-scheme: dark)"
      )?.matches;
      return prefersDark ? "dark" : "light";
    }

    return "light";
  });

  // Update localStorage and document class when theme changes
  useEffect(() => {
    localStorage?.setItem(THEME_STORAGE_KEY, theme);

    // Update document class for CSS themes
    if (typeof document !== "undefined") {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  return {
    theme,
    toggleTheme,
    isDark: theme === "dark",
    isLight: theme === "light",
  };
};
