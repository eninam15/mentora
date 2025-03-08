// src/theme/ThemeContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from './index';

// Crear contexto para el tema
const ThemeContext = createContext({
  mode: 'light',
  toggleTheme: () => {},
});

// Hook para usar el contexto del tema
export const useTheme = () => useContext(ThemeContext);

// Provider del tema
export const ThemeProviderWrapper = ({ children }) => {
  // Intentar obtener el tema guardado en localStorage
  // Usar 'light' como predeterminado
  const [mode, setMode] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    
    const savedMode = localStorage.getItem('themeMode');
    return savedMode || 'light';
  });

  // Efecto para manejar cambios en preferencias de sistema
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Comprobar preferencia del sistema
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Si no hay tema guardado, usar preferencia del sistema
    if (!localStorage.getItem('themeMode')) {
      setMode(mediaQuery.matches ? 'dark' : 'light');
    }
    
    // Listener para cambios en preferencia del sistema
    const handleChange = (e) => {
      if (!localStorage.getItem('themeMode')) {
        setMode(e.matches ? 'dark' : 'light');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Guardar cambios de tema en localStorage
  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('themeMode', mode);
    
    // Aplicar clase al body para estilos globales
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(`${mode}-mode`);
  }, [mode]);

  // Función para cambiar entre temas
  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  // Usar el tema adecuado según el modo
  const theme = mode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};