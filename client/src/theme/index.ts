export interface ThemeConfig {
  colors: {
    // Brand Colors
    brand: {
      purple: string;
      purpleLight: string;
      purpleDark: string;
      indigo: string;
      blue: string;
      cyan: string;
    };
    
    // Gray Scale
    gray: {
      25: string;
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      850: string;
      900: string;
    };
    
    // Semantic Colors
    semantic: {
      success: string;
      warning: string;
      error: string;
      info: string;
    };
    
    // Surface Colors
    surface: {
      primary: string;
      secondary: string;
      tertiary: string;
      elevated: string;
      overlay: string;
    };
    
    // Text Colors
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
      inverse: string;
      link: string;
    };
    
    // Border Colors
    border: {
      light: string;
      medium: string;
      heavy: string;
      focus: string;
    };
  };
  
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
  };
  
  typography: {
    fontFamily: {
      sans: string[];
      mono: string[];
    };
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
    };
    fontWeight: {
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
    };
    lineHeight: {
      tight: number;
      normal: number;
      relaxed: number;
    };
  };
  
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };
  
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    glow: string;
  };
  
  animation: {
    duration: {
      fast: string;
      normal: string;
      slow: string;
    };
    easing: {
      ease: string;
      easeIn: string;
      easeOut: string;
      easeInOut: string;
    };
  };
  
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
}

export const lightTheme: ThemeConfig = {
  colors: {
    brand: {
      purple: '#8b5cf6',
      purpleLight: '#a78bfa',
      purpleDark: '#7c3aed',
      indigo: '#6366f1',
      blue: '#3b82f6',
      cyan: '#06b6d4',
    },
    
    gray: {
      25: '#fcfcfd',
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      850: '#0f172a',
      900: '#020617',
    },
    
    semantic: {
      success: '#22c55e',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6',
    },
    
    surface: {
      primary: '#ffffff',
      secondary: '#f8fafc',
      tertiary: '#f1f5f9',
      elevated: '#ffffff',
      overlay: 'rgba(0, 0, 0, 0.5)',
    },
    
    text: {
      primary: '#1e293b',
      secondary: '#475569',
      tertiary: '#64748b',
      inverse: '#ffffff',
      link: '#8b5cf6',
    },
    
    border: {
      light: '#e2e8f0',
      medium: '#cbd5e1',
      heavy: '#94a3b8',
      focus: '#8b5cf6',
    },
  },
  
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
  },
  
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['Roboto Mono', 'monospace'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
    },
  },
  
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px',
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    glow: '0 0 20px rgba(139, 92, 246, 0.3)',
  },
  
  animation: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
    },
    easing: {
      ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
  
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
};

export const darkTheme: ThemeConfig = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    brand: lightTheme.colors.brand,
    
    gray: {
      25: '#020617',
      50: '#0f172a',
      100: '#1e293b',
      200: '#334155',
      300: '#475569',
      400: '#64748b',
      500: '#94a3b8',
      600: '#cbd5e1',
      700: '#e2e8f0',
      800: '#f1f5f9',
      850: '#f8fafc',
      900: '#fcfcfd',
    },
    
    semantic: {
      success: '#4ade80',
      warning: '#fbbf24',
      error: '#f87171',
      info: '#60a5fa',
    },
    
    surface: {
      primary: '#0f172a',
      secondary: '#1e293b',
      tertiary: '#334155',
      elevated: '#1e293b',
      overlay: 'rgba(0, 0, 0, 0.7)',
    },
    
    text: {
      primary: '#f8fafc',
      secondary: '#cbd5e1',
      tertiary: '#94a3b8',
      inverse: '#0f172a',
      link: '#a78bfa',
    },
    
    border: {
      light: '#334155',
      medium: '#475569',
      heavy: '#64748b',
      focus: '#a78bfa',
    },
  },
};

export type Theme = 'light' | 'dark' | 'system';

export const getTheme = (theme: Theme): ThemeConfig => {
  if (theme === 'dark') return darkTheme;
  if (theme === 'system') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? darkTheme : lightTheme;
  }
  return lightTheme;
};

export const applyTheme = (theme: ThemeConfig) => {
  const root = document.documentElement;
  
  // Apply CSS custom properties
  Object.entries(theme.colors).forEach(([category, colors]) => {
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${category}-${key}`, value);
    });
  });
  
  // Apply spacing
  Object.entries(theme.spacing).forEach(([key, value]) => {
    root.style.setProperty(`--spacing-${key}`, value);
  });
  
  // Apply typography
  Object.entries(theme.typography.fontSize).forEach(([key, value]) => {
    root.style.setProperty(`--font-size-${key}`, value);
  });
  
  // Apply border radius
  Object.entries(theme.borderRadius).forEach(([key, value]) => {
    root.style.setProperty(`--radius-${key}`, value);
  });
  
  // Apply shadows
  Object.entries(theme.shadows).forEach(([key, value]) => {
    root.style.setProperty(`--shadow-${key}`, value);
  });
  
  // Apply animation
  Object.entries(theme.animation.duration).forEach(([key, value]) => {
    root.style.setProperty(`--duration-${key}`, value);
  });
  
  Object.entries(theme.animation.easing).forEach(([key, value]) => {
    root.style.setProperty(`--easing-${key}`, value);
  });
};

export default {
  lightTheme,
  darkTheme,
  getTheme,
  applyTheme,
};
