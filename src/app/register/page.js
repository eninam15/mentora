// src/app/register/page.js
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
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Checkbox,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Grid,
  Alert,
  CircularProgress
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';

export default function RegisterPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: '',
    specialization: '',
    experience: '',
    termsAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const steps = [
    { label: 'Información básica', description: 'Datos personales y tipo de usuario' },
    { label: 'Detalles de perfil', description: 'Información específica según tu rol' },
    { label: 'Confirmación', description: 'Revisa tus datos' },
  ];

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
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

  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 0) {
      // Validar primer paso
      if (!formData.firstName.trim()) {
        newErrors.firstName = 'El nombre es requerido';
      }
      
      if (!formData.lastName.trim()) {
        newErrors.lastName = 'El apellido es requerido';
      }
      
      if (!formData.email) {
        newErrors.email = 'El email es requerido';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email inválido';
      }
      
      if (!formData.userType) {
        newErrors.userType = 'Debes seleccionar un tipo de usuario';
      }
    } else if (step === 1) {
      // Validar segundo paso
      if (!formData.password) {
        newErrors.password = 'La contraseña es requerida';
      } else if (formData.password.length < 8) {
        newErrors.password = 'La contraseña debe tener al menos 8 caracteres';
      } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
        newErrors.password = 'La contraseña debe contener al menos una letra mayúscula, una minúscula y un número';
      }
      
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'La confirmación de contraseña es requerida';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Las contraseñas no coinciden';
      }
      
      if (formData.userType === 'mentor') {
        if (!formData.specialization.trim()) {
          newErrors.specialization = 'La especialidad es requerida';
        }
        
        if (!formData.experience.trim()) {
          newErrors.experience = 'La experiencia es requerida';
        }
      }
    } else if (step === 2) {
      // Validar tercer paso
      if (!formData.termsAccepted) {
        newErrors.termsAccepted = 'Debes aceptar los términos y condiciones';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(activeStep)) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep(activeStep)) return;
    
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      // Simular una llamada a API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulación de éxito - en realidad aquí iría la llamada a la API
      console.log('Datos de registro:', formData);
      
      // En un caso real, aquí guardaríamos el token en localStorage o en el state de Redux
      // Y luego redireccionaríamos al dashboard o una página de confirmación
      router.push('/login?registered=true');
      
    } catch (error) {
      setErrorMessage('Error al procesar el registro. Por favor intenta nuevamente.');
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
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
          <Box sx={{ mb: 4, textAlign: 'center' }}>
            <Link href="/">
              <Box component="img" src="/images/logo/logo.svg" alt="Mentora" width={150} />
            </Link>
          </Box>
          
          <Typography variant="h4" component="h1" align="center" sx={{ mb: 4, fontWeight: 600 }}>
            Crea tu cuenta en Mentora
          </Typography>
          
          {errorMessage && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {errorMessage}
            </Alert>
          )}
          
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel>
                  <Typography variant="subtitle1" fontWeight={500}>
                    {step.label}
                  </Typography>
                </StepLabel>
                <StepContent>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {step.description}
                  </Typography>
                  
                  <Box component="form" sx={{ mt: 2 }}>
                    {index === 0 && (
                      <>
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              name="firstName"
                              label="Nombre"
                              fullWidth
                              variant="outlined"
                              value={formData.firstName}
                              onChange={handleChange}
                              error={!!errors.firstName}
                              helperText={errors.firstName}
                              disabled={isSubmitting}
                              required
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              name="lastName"
                              label="Apellido"
                              fullWidth
                              variant="outlined"
                              value={formData.lastName}
                              onChange={handleChange}
                              error={!!errors.lastName}
                              helperText={errors.lastName}
                              disabled={isSubmitting}
                              required
                            />
                          </Grid>
                        </Grid>
                        
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
                          required
                        />
                        
                        <FormControl 
                          component="fieldset" 
                          margin="normal" 
                          error={!!errors.userType}
                          required
                        >
                          <FormLabel component="legend">¿Cómo te gustaría unirte a Mentora?</FormLabel>
                          <RadioGroup
                            name="userType"
                            value={formData.userType}
                            onChange={handleChange}
                          >
                            <FormControlLabel 
                              value="parent" 
                              control={<Radio />} 
                              label="Como padre/tutor buscando mentores para mi hijo/a" 
                              disabled={isSubmitting}
                            />
                            <FormControlLabel 
                              value="mentor" 
                              control={<Radio />} 
                              label="Como mentor especializado en metodología Montessori" 
                              disabled={isSubmitting}
                            />
                          </RadioGroup>
                          {errors.userType && (
                            <Typography variant="caption" color="error">
                              {errors.userType}
                            </Typography>
                          )}
                        </FormControl>
                      </>
                    )}
                    
                    {index === 1 && (
                      <>
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              name="password"
                              label="Contraseña"
                              type={showPassword ? 'text' : 'password'}
                              fullWidth
                              variant="outlined"
                              value={formData.password}
                              onChange={handleChange}
                              error={!!errors.password}
                              helperText={errors.password}
                              disabled={isSubmitting}
                              required
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
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              name="confirmPassword"
                              label="Confirmar contraseña"
                              type={showPassword ? 'text' : 'password'}
                              fullWidth
                              variant="outlined"
                              value={formData.confirmPassword}
                              onChange={handleChange}
                              error={!!errors.confirmPassword}
                              helperText={errors.confirmPassword}
                              disabled={isSubmitting}
                              required
                            />
                          </Grid>
                        </Grid>
                        
                        {formData.userType === 'mentor' && (
                          <>
                            <TextField
                              name="specialization"
                              label="Especialidad principal"
                              fullWidth
                              margin="normal"
                              variant="outlined"
                              value={formData.specialization}
                              onChange={handleChange}
                              error={!!errors.specialization}
                              helperText={errors.specialization}
                              disabled={isSubmitting}
                              required
                            />
                            
                            <TextField
                              name="experience"
                              label="Años de experiencia"
                              fullWidth
                              margin="normal"
                              variant="outlined"
                              value={formData.experience}
                              onChange={handleChange}
                              error={!!errors.experience}
                              helperText={errors.experience}
                              disabled={isSubmitting}
                              required
                            />
                          </>
                        )}
                      </>
                    )}
                    
                    {index === 2 && (
                      <>
                        <Typography variant="h6" gutterBottom>
                          Resumen de tu registro
                        </Typography>
                        
                        <Box sx={{ bgcolor: 'background.default', p: 2, borderRadius: 1, mb: 3 }}>
                          <Typography variant="body2" paragraph>
                            <strong>Nombre:</strong> {formData.firstName} {formData.lastName}
                          </Typography>
                          <Typography variant="body2" paragraph>
                            <strong>Email:</strong> {formData.email}
                          </Typography>
                          <Typography variant="body2" paragraph>
                            <strong>Tipo de usuario:</strong> {formData.userType === 'parent' ? 'Padre/Tutor' : 'Mentor'}
                          </Typography>
                          
                          {formData.userType === 'mentor' && (
                            <>
                              <Typography variant="body2" paragraph>
                                <strong>Especialidad:</strong> {formData.specialization}
                              </Typography>
                              <Typography variant="body2" paragraph>
                                <strong>Experiencia:</strong> {formData.experience} años
                              </Typography>
                            </>
                          )}
                        </Box>
                        
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="termsAccepted"
                              color="primary"
                              checked={formData.termsAccepted}
                              onChange={handleChange}
                              disabled={isSubmitting}
                            />
                          }
                          label={
                            <Typography variant="body2">
                              He leído y acepto los{' '}
                              <Link href="/terms" style={{ color: 'inherit' }}>
                                <Typography component="span" variant="body2" color="primary" sx={{ '&:hover': { textDecoration: 'underline' } }}>
                                  Términos y Condiciones
                                </Typography>
                              </Link>
                              {' '}y la{' '}
                              <Link href="/privacy" style={{ color: 'inherit' }}>
                                <Typography component="span" variant="body2" color="primary" sx={{ '&:hover': { textDecoration: 'underline' } }}>
                                  Política de Privacidad
                                </Typography>
                              </Link>
                            </Typography>
                          }
                        />
                        {errors.termsAccepted && (
                          <Typography variant="caption" color="error" display="block">
                            {errors.termsAccepted}
                          </Typography>
                        )}
                      </>
                    )}
                    
                    <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
                      <Button
                        disabled={activeStep === 0 || isSubmitting}
                        onClick={handleBack}
                        variant="text"
                      >
                        Atrás
                      </Button>
                      <Box>
                        {activeStep === steps.length - 1 ? (
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            startIcon={isSubmitting && <CircularProgress size={20} color="inherit" />}
                          >
                            {isSubmitting ? 'Completando registro...' : 'Completar registro'}
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                            disabled={isSubmitting}
                          >
                            Siguiente
                          </Button>
                        )}
                      </Box>
                    </Box>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="body2">
              ¿Ya tienes una cuenta?{' '}
              <Link href="/login" style={{ textDecoration: 'none' }}>
                <Typography component="span" variant="body2" color="primary" sx={{ fontWeight: 600, '&:hover': { textDecoration: 'underline' } }}>
                  Iniciar sesión
                </Typography>
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}