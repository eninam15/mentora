// src/app/login/page.js
'use client';
import { useState } from 'react';
import { 
  Box, 
  TextField, 
  Typography, 
  Container, 
  Paper,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox,
  Grid,
  Alert,
  CircularProgress
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'rememberMe' ? checked : value,
    });
    
    // Limpiar error cuando el usuario corrige
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validate = () => {
    const newErrors = {};
    
    // Validar email
    if (!formData.email) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    // Validar contraseña
    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      // Simular una llamada a API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulación de éxito - en realidad aquí iría la llamada a la API
      console.log('Datos de login:', formData);
      
      // En un caso real, aquí guardaríamos el token en localStorage o en el state de Redux
      // Y luego redireccionaríamos al dashboard
      router.push('/dashboard');
      
    } catch (error) {
      setErrorMessage('Credenciales incorrectas. Por favor verifica tus datos.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        py: 5,
        bgcolor: 'background.default'
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
          <Box sx={{ mb: 4, textAlign: 'center' }}>
            <Link href="/">
              <Box component="img" src="/images/logo/logo.svg" alt="Mentora" width={150} />
            </Link>
          </Box>
          
          <Typography variant="h4" component="h1" align="center" sx={{ mb: 4, fontWeight: 600 }}>
            Iniciar Sesión
          </Typography>
          
          {errorMessage && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {errorMessage}
            </Alert>
          )}
          
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              name="email"
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              disabled={isSubmitting}
              autoComplete="email"
            />
            
            <TextField
              name="password"
              label="Contraseña"
              type={showPassword ? 'text' : 'password'}
              fullWidth
              margin="normal"
              variant="outlined"
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              disabled={isSubmitting}
              autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            
            <Grid container sx={{ mt: 2, mb: 3 }}>
              <Grid item xs>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="rememberMe"
                      color="primary"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                  }
                  label="Recordarme"
                />
              </Grid>
              
              <Grid item>
                <Link href="/forgot-password" style={{ color: 'inherit', textDecoration: 'none' }}>
                  <Typography variant="body2" color="primary" sx={{ '&:hover': { textDecoration: 'underline' } }}>
                    ¿Olvidaste tu contraseña?
                  </Typography>
                </Link>
              </Grid>
            </Grid>
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              disabled={isSubmitting}
              sx={{ mt: 1, py: 1.5 }}
              startIcon={isSubmitting && <CircularProgress size={20} color="inherit" />}
            >
              {isSubmitting ? 'Iniciando sesión...' : 'Iniciar Sesión'}
            </Button>
            
            <Box sx={{ mt: 3, textAlign: 'center' }}>
              <Typography variant="body2">
                ¿No tienes cuenta?{' '}
                <Link href="/register" style={{ textDecoration: 'none' }}>
                  <Typography component="span" variant="body2" color="primary" sx={{ fontWeight: 600, '&:hover': { textDecoration: 'underline' } }}>
                    Regístrate
                  </Typography>
                </Link>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}