/**
 * Comprehensive Design Tokens for Crypto Portfolio
 * Defines color palette, typography scales, spacing, shadows, and animations
 */

// ============================================================================
// COLOR PALETTE
// ============================================================================

export const colors = {
  // Neutral Colors - Foundation for all surfaces and text
  neutral: {
    50: "#f9fafb",   // Lightest - page background
    100: "#f3f4f6",  // Light - surface 1
    200: "#e5e7eb",  // Light-mid - hover backgrounds
    300: "#d1d5db",  // Mid - borders
    400: "#9ca3af",  // Mid-dark - secondary text
    500: "#6b7280",  // Dark - tertiary text
    600: "#4b5563",  // Darker - secondary text
    700: "#374151",  // Very dark - dividers
    800: "#1f2937",  // Extra dark - dark mode surface
    900: "#111827",  // Darkest - dark mode background
  },

  // Primary Brand Color - Crypto green
  brand: {
    green: "#2ecc71",
    greenHover: "#27ae60",
    greenActive: "#229954",
    greenLight: "#d5f4e6", // Very light background
    greenLighter: "#eafaf1", // Almost invisible background
  },

  // Semantic Colors
  semantic: {
    success: "#2ecc71",    // Profit, gains
    error: "#e74c3c",      // Loss, danger
    warning: "#f39c12",    // Alert, attention needed
    info: "#3498db",       // Information
    
    // Light mode variants
    successLight: "#d5f4e6",
    errorLight: "#fadbd8",
    warningLight: "#fdebd0",
    infoLight: "#d6eaf8",
  },

  // Status Colors
  status: {
    positive: "#2ecc71",
    negative: "#e74c3c",
    neutral: "#9ca3af",
  },

  // Text Colors
  text: {
    primary: "#111827",     // Main text on light backgrounds
    secondary: "#4b5563",   // Secondary text
    tertiary: "#9ca3af",    // Disabled, placeholder text
    light: "#f9fafb",       // Text on dark backgrounds
    lightSecondary: "#d1d5db",
  },

  // Background Colors
  background: {
    primary: "#f9fafb",     // Page background
    secondary: "#f3f4f6",   // Card background
    tertiary: "#e5e7eb",    // Hover state
    dark: "#1f2937",        // Dark mode primary
    darkSecondary: "#111827", // Dark mode page
  },

  // Transparent/Alpha Colors for overlays
  overlay: {
    black: "rgba(0, 0, 0, 0.5)",
    blackHover: "rgba(0, 0, 0, 0.75)",
  },
};

// ============================================================================
// TYPOGRAPHY
// ============================================================================

export const typography = {
  fontFamily: {
    sans: '"Rubik", system-ui, -apple-system, "Segoe UI", sans-serif',
    mono: '"Courier New", monospace',
  },

  // Font sizes with line heights
  fontSize: {
    xs: { size: "10px", height: "12px" },    // Tiny labels
    sm: { size: "12px", height: "16px" },    // Small text
    base: { size: "14px", height: "20px" },  // Body text
    lg: { size: "16px", height: "24px" },    // Body large
    xl: { size: "18px", height: "28px" },    // Larger body
    "2xl": { size: "20px", height: "28px" }, // Subheading
    "3xl": { size: "24px", height: "32px" }, // Card title
    "4xl": { size: "32px", height: "40px" }, // Section heading
    "5xl": { size: "36px", height: "44px" }, // Page title
    "6xl": { size: "48px", height: "56px" }, // Display/hero
  },

  // Font weights
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  // Letter spacing
  letterSpacing: {
    tight: "-0.5px",
    normal: "0px",
    wide: "0.5px",
  },
};

// ============================================================================
// SPACING SYSTEM
// ============================================================================

export const spacing = {
  // Base unit: 4px
  0: "0px",
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  8: "32px",
  10: "40px",
  12: "48px",
  14: "56px",
  16: "64px",
  18: "72px",
  20: "80px",
};

// ============================================================================
// SHADOWS (DEPTH SYSTEM)
// ============================================================================

export const shadows = {
  none: "none",
  
  // Subtle shadow for cards and containers
  sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
  
  // Medium shadow for elevated elements
  md: "0 4px 6px rgba(0, 0, 0, 0.1)",
  
  // Regular shadow for default cards
  base: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
  
  // Larger shadow for dropdowns, popovers
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  
  // Modal/overlay shadow
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  
  // Extra large shadow for stacked modals
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  
  // Inner shadow for inputs/insets
  inner: "inset 0 2px 4px rgba(0, 0, 0, 0.06)",
};

// ============================================================================
// BORDER RADIUS
// ============================================================================

export const borderRadius = {
  none: "0px",
  sm: "4px",
  base: "6px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  full: "9999px",
};

// ============================================================================
// TRANSITIONS & ANIMATIONS
// ============================================================================

export const transitions = {
  fast: "150ms ease-in-out",
  base: "200ms ease-in-out",
  slow: "300ms ease-in-out",
  slower: "500ms ease-in-out",
};

export const animations = {
  // Fade animations
  fadeIn: "fadeIn 200ms ease-in-out",
  fadeOut: "fadeOut 200ms ease-in-out",
  
  // Slide animations
  slideInUp: "slideInUp 300ms ease-out",
  slideInDown: "slideInDown 300ms ease-out",
  slideInLeft: "slideInLeft 300ms ease-out",
  slideInRight: "slideInRight 300ms ease-out",
  
  // Scale animations
  scaleIn: "scaleIn 200ms ease-out",
  
  // Bounce animations (subtle)
  bounce: "bounce 1s infinite",
  
  // Pulse animations
  pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
};

// ============================================================================
// COMMON COMPONENT STYLES
// ============================================================================

export const componentStyles = {
  button: {
    // Primary button
    primary: {
      bg: colors.brand.green,
      bgHover: colors.brand.greenHover,
      bgActive: colors.brand.greenActive,
      text: "#ffffff",
      shadow: shadows.sm,
    },
    
    // Secondary button
    secondary: {
      bg: colors.neutral[100],
      bgHover: colors.neutral[200],
      border: colors.neutral[300],
      text: colors.text.primary,
      shadow: shadows.sm,
    },
    
    // Ghost button
    ghost: {
      bg: "transparent",
      bgHover: colors.neutral[100],
      text: colors.text.primary,
    },
    
    // Disabled button
    disabled: {
      bg: colors.neutral[200],
      text: colors.text.tertiary,
      opacity: 0.5,
      cursor: "not-allowed",
    },
  },

  input: {
    bg: colors.background.primary,
    border: colors.neutral[300],
    borderFocus: colors.brand.green,
    text: colors.text.primary,
    placeholder: colors.text.tertiary,
    shadow: shadows.sm,
  },

  card: {
    bg: colors.background.secondary,
    border: colors.neutral[300],
    shadow: shadows.base,
    shadowHover: shadows.lg,
  },

  surface: {
    bg: colors.background.secondary,
    border: colors.neutral[300],
  },
};

// ============================================================================
// ACCESSIBILITY
// ============================================================================

export const accessibility = {
  // Focus states
  focusRing: `outline-offset 2px, outline 2px solid ${colors.brand.green}`,
  focusRingWidth: "2px",
  focusRingOffset: "2px",
  
  // Minimum touch target size (mobile)
  minTouchSize: "44px",
  
  // Reduced motion
  prefersReducedMotion: "@media (prefers-reduced-motion: reduce)",
};

// ============================================================================
// Z-INDEX SCALE
// ============================================================================

export const zIndex = {
  hide: "-1",
  base: "0",
  dropdown: "10",
  sticky: "20",
  fixed: "30",
  modal: "40",
  popover: "50",
  tooltip: "60",
  notification: "70",
};

// ============================================================================
// BREAKPOINTS
// ============================================================================

export const breakpoints = {
  xs: "320px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};
