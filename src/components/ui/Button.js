// src/components/ui/Button.js
import { Button as MuiButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

// Estilos personalizados
const StyledButton = styled(MuiButton)(({ theme, variant, color }) => ({
  textTransform: 'none',
  borderRadius: 8,
  padding: '10px 24px',
  fontWeight: 600,
  boxShadow: variant === 'contained' ? '0px 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
  transition: 'all 0.3s ease',
  
  '&:hover': {
    boxShadow: variant === 'contained' ? '0px 4px 8px rgba(0, 0, 0, 0.15)' : 'none',
    transform: 'translateY(-2px)',
  },
  
  '&:active': {
    transform: 'translateY(0)',
  },
}));

const Button = ({ href, children, ...props }) => {
  // Si hay un href, usamos Link
  if (href) {
    return (
      <StyledButton
        component={Link}
        href={href}
        {...props}
      >
        {children}
      </StyledButton>
    );
  }
  
  // Si no hay href, es un botón normal
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;