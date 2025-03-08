// src/theme/index.js
import { createTheme } from '@mui/material/styles';

// Función para crear sombras neumórficas
const createNeumorphicShadows = (isDark) => {
  if (isDark) {
    return [
      'none',
      '0px 2px 4px rgba(0, 0, 0, 0.4), 0px -2px 4px rgba(255, 255, 255, 0.05)',
      '0px 4px 8px rgba(0, 0, 0, 0.45), 0px -4px 8px rgba(255, 255, 255, 0.06)',
      '0px 6px 12px rgba(0, 0, 0, 0.5), 0px -6px 12px rgba(255, 255, 255, 0.07)',
      '0px 8px 16px rgba(0, 0, 0, 0.55), 0px -8px 16px rgba(255, 255, 255, 0.08)',
      '0px 10px 20px rgba(0, 0, 0, 0.6), 0px -10px 20px rgba(255, 255, 255, 0.09)',
      '0px 12px 24px rgba(0, 0, 0, 0.65), 0px -12px 24px rgba(255, 255, 255, 0.1)',
      '0px 14px 28px rgba(0, 0, 0, 0.7), 0px -14px 28px rgba(255, 255, 255, 0.11)',
      '0px 16px 32px rgba(0, 0, 0, 0.75), 0px -16px 32px rgba(255, 255, 255, 0.12)',
      '0px 18px 36px rgba(0, 0, 0, 0.8), 0px -18px 36px rgba(255, 255, 255, 0.13)',
      '0px 20px 40px rgba(0, 0, 0, 0.85), 0px -20px 40px rgba(255, 255, 255, 0.14)',
      '0px 22px 44px rgba(0, 0, 0, 0.9), 0px -22px 44px rgba(255, 255, 255, 0.15)',
      '0px 24px 48px rgba(0, 0, 0, 0.95), 0px -24px 48px rgba(255, 255, 255, 0.16)',
    ];
  } else {
    return [
      'none',
      '0px 2px 4px rgba(163, 177, 198, 0.4), 0px -2px 4px rgba(255, 255, 255, 0.9)',
      '0px 4px 8px rgba(163, 177, 198, 0.45), 0px -4px 8px rgba(255, 255, 255, 0.95)',
      '0px 6px 12px rgba(163, 177, 198, 0.5), 0px -6px 12px rgba(255, 255, 255, 1)',
      '0px 8px 16px rgba(163, 177, 198, 0.55), 0px -8px 16px rgba(255, 255, 255, 1)',
      '0px 10px 20px rgba(163, 177, 198, 0.6), 0px -10px 20px rgba(255, 255, 255, 1)',
      '0px 12px 24px rgba(163, 177, 198, 0.65), 0px -12px 24px rgba(255, 255, 255, 1)',
      '0px 14px 28px rgba(163, 177, 198, 0.7), 0px -14px 28px rgba(255, 255, 255, 1)',
      '0px 16px 32px rgba(163, 177, 198, 0.75), 0px -16px 32px rgba(255, 255, 255, 1)',
      '0px 18px 36px rgba(163, 177, 198, 0.8), 0px -18px 36px rgba(255, 255, 255, 1)',
      '0px 20px 40px rgba(163, 177, 198, 0.85), 0px -20px 40px rgba(255, 255, 255, 1)',
      '0px 22px 44px rgba(163, 177, 198, 0.9), 0px -22px 44px rgba(255, 255, 255, 1)',
      '0px 24px 48px rgba(163, 177, 198, 0.95), 0px -24px 48px rgba(255, 255, 255, 1)',
    ];
  }
};

// Creación de paletas de colores para modo claro y oscuro
const lightPalette = {
  primary: {
    main: '#2A6D66', // Verde Bosque
    light: '#81B0AA',
    dark: '#1E5650',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#FBBC58', // Ámbar Cálido
    light: '#FCE8BC',
    dark: '#D99933',
    contrastText: '#1D3557',
  },
  error: {
    main: '#D62828',
  },
  warning: {
    main: '#F9C74F',
  },
  info: {
    main: '#457B9D',
  },
  success: {
    main: '#4C956C',
  },
  background: {
    default: '#F4F6F9', // Fondo claro para Soft UI
    paper: '#FFFFFF',
    card: '#F0F4F8', // Fondo para tarjetas neumórficas
    elevated: '#FFFFFF',
  },
  text: {
    primary: '#1D3557',
    secondary: '#566573',
    disabled: '#A0AEC0',
  },
  divider: 'rgba(0, 0, 0, 0.08)',
  // Colores específicos para Soft UI
  neumorphic: {
    boxShadow: '10px 10px 20px #D9E2EC, -10px -10px 20px #FFFFFF',
    inset: 'inset 5px 5px 10px #D9E2EC, inset -5px -5px 10px #FFFFFF',
    bg: '#F0F4F8',
    highlight: 'rgba(255, 255, 255, 0.8)',
    shadow: 'rgba(163, 177, 198, 0.5)',
  }
};

const darkPalette = {
  primary: {
    main: '#3E9D93', // Verde más claro para modo oscuro
    light: '#64B5AC',
    dark: '#2A6D66',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#FFD07F', // Ámbar más claro para modo oscuro
    light: '#FFDE9E',
    dark: '#FBBC58',
    contrastText: '#1D3557',
  },
  error: {
    main: '#F55252',
  },
  warning: {
    main: '#FFD369',
  },
  info: {
    main: '#64B5F6',
  },
  success: {
    main: '#6FCF97',
  },
  background: {
    default: '#1A202C', // Fondo oscuro para Soft UI
    paper: '#2D3748',
    card: '#2D3748', // Fondo para tarjetas neumórficas en oscuro
    elevated: '#3A4556',
  },
  text: {
    primary: '#E2E8F0',
    secondary: '#A0AEC0',
    disabled: '#718096',
  },
  divider: 'rgba(255, 255, 255, 0.08)',
  // Colores específicos para Soft UI en modo oscuro
  neumorphic: {
    boxShadow: '10px 10px 20px #131920, -10px -10px 20px #212838',
    inset: 'inset 5px 5px 10px #131920, inset -5px -5px 10px #212838',
    bg: '#1A202C',
    highlight: 'rgba(255, 255, 255, 0.05)',
    shadow: 'rgba(0, 0, 0, 0.5)',
  }
};

// Componentes comunes para ambos temas
const commonComponents = {
  MuiCssBaseline: {
    styleOverrides: {
      '*, *::before, *::after': {
        transition: 'background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
      },
      body: {
        scrollBehavior: 'smooth',
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 12,
        padding: '10px 24px',
        fontWeight: 600,
        textTransform: 'none',
        boxShadow: theme.palette.neumorphic.boxShadow,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,0.05) 100%)',
          borderRadius: 'inherit',
        },
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: theme.palette.neumorphic.boxShadow,
        },
        '&:active': {
          transform: 'translateY(0)',
          boxShadow: theme.palette.neumorphic.inset,
        },
      }),
      containedPrimary: ({ theme }) => ({
        background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
      }),
      containedSecondary: ({ theme }) => ({
        background: `linear-gradient(135deg, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.main} 100%)`,
      }),
      outlined: ({ theme }) => ({
        borderWidth: 2,
        '&:hover': {
          borderWidth: 2,
        },
      }),
    },
  },
  MuiCard: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 16,
        padding: theme.spacing(2),
        backgroundColor: theme.palette.background.card,
        boxShadow: theme.palette.neumorphic.boxShadow,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
        },
      }),
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 16,
        transition: 'all 0.3s ease',
      }),
      elevation1: ({ theme }) => ({
        boxShadow: theme.palette.neumorphic.boxShadow,
      }),
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: ({ theme }) => ({
        '& .MuiOutlinedInput-root': {
          borderRadius: 12,
          backgroundColor: theme.palette.mode === 'light' 
            ? 'rgba(255, 255, 255, 0.9)' 
            : 'rgba(45, 55, 72, 0.9)',
          boxShadow: theme.palette.neumorphic.inset,
          transition: 'all 0.3s ease',
          '&.Mui-focused': {
            boxShadow: theme.palette.neumorphic.boxShadow,
          },
          '& fieldset': {
            borderWidth: '1px',
            borderColor: theme.palette.mode === 'light' 
              ? 'rgba(0, 0, 0, 0.1)' 
              : 'rgba(255, 255, 255, 0.1)',
          },
        },
      }),
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: ({ theme }) => ({
        boxShadow: 'none',
        background: theme.palette.mode === 'light' 
          ? 'rgba(255, 255, 255, 0.8)' 
          : 'rgba(26, 32, 44, 0.8)',
        backdropFilter: 'blur(8px)',
        borderBottom: `1px solid ${theme.palette.divider}`,
      }),
    },
  },
  MuiSwitch: {
    styleOverrides: {
      root: ({ theme }) => ({
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
          padding: 2,
          '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
              opacity: 1,
              backgroundColor: theme.palette.primary.main,
            },
          },
        },
        '& .MuiSwitch-thumb': {
          boxShadow: '0 2px 4px 0 rgba(0,0,0,0.2)',
          width: 22,
          height: 22,
          borderRadius: 11,
        },
        '& .MuiSwitch-track': {
          borderRadius: 13,
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
          boxSizing: 'border-box',
        },
      }),
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderBottom: `1px solid ${theme.palette.divider}`,
      }),
      head: ({ theme }) => ({
        fontWeight: 600,
        color: theme.palette.primary.main,
      }),
    },
  },
};

// Crear temas para modo claro y oscuro
const getTheme = (mode) => {
  const isLight = mode === 'light';
  
  return createTheme({
    palette: {
      mode,
      ...(isLight ? lightPalette : darkPalette),
    },
    shadows: createNeumorphicShadows(!isLight),
    typography: {
      fontFamily: '"Nunito", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 700,
        fontSize: '2.5rem',
        letterSpacing: '-0.01em',
      },
      h2: {
        fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 700,
        fontSize: '2rem',
        letterSpacing: '-0.01em',
      },
      h3: {
        fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 600,
        fontSize: '1.75rem',
      },
      h4: {
        fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 600,
        fontSize: '1.5rem',
      },
      h5: {
        fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 500,
        fontSize: '1.25rem',
      },
      h6: {
        fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 500,
        fontSize: '1rem',
      },
      button: {
        textTransform: 'none',
        fontWeight: 600,
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.6,
      },
      body2: {
        fontSize: '0.875rem',
        lineHeight: 1.6,
      },
    },
    shape: {
      borderRadius: 12,
    },
    spacing: 8,
    components: commonComponents,
  });
};

// Exportamos los temas
const lightTheme = getTheme('light');
const darkTheme = getTheme('dark');

export { lightTheme, darkTheme };
export default lightTheme;