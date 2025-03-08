// src/theme/index.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
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
      default: '#F9F3E8', // Marfil Natural
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1D3557',
      secondary: '#566573',
    },
  },
  typography: {
    fontFamily: '"Nunito", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
    },
    h6: {
      fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          boxShadow: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
          borderRadius: 12,
        },
      },
    },
  },
});

export default theme;