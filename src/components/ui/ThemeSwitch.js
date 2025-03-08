// src/components/ui/ThemeSwitch.js
import React from 'react';
import { IconButton, Tooltip, useTheme as useMuiTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme } from '@/theme/ThemeContext';

// Estilo neumórfico para el botón de tema
const NeumorphicIconButton = styled(IconButton)(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: '50%',
  backgroundColor: theme.palette.background.card,
  boxShadow: theme.palette.neumorphic.boxShadow,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
  },
  '&:active': {
    boxShadow: theme.palette.neumorphic.inset,
    transform: 'translateY(0)',
  },
}));

const ThemeSwitch = () => {
  const { mode, toggleTheme } = useTheme();
  const theme = useMuiTheme();
  
  const isDark = mode === 'dark';
  
  return (
    <Tooltip title={`Cambiar a modo ${isDark ? 'claro' : 'oscuro'}`}>
      <NeumorphicIconButton
        onClick={toggleTheme}
        color="inherit"
        aria-label={`Cambiar a modo ${isDark ? 'claro' : 'oscuro'}`}
      >
        {isDark ? 
          <LightModeIcon sx={{ color: theme.palette.secondary.main }} /> : 
          <DarkModeIcon sx={{ color: theme.palette.primary.main }} />
        }
      </NeumorphicIconButton>
    </Tooltip>
  );
};

export default ThemeSwitch;