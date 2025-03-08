// src/components/shared/Footer.js
import { 
    Box, 
    Container, 
    Grid, 
    Typography, 
    Link as MuiLink,
    TextField,
    Button,
    Divider,
    IconButton
  } from '@mui/material';
  import FacebookIcon from '@mui/icons-material/Facebook';
  import TwitterIcon from '@mui/icons-material/Twitter';
  import InstagramIcon from '@mui/icons-material/Instagram';
  import YouTubeIcon from '@mui/icons-material/YouTube';
  import LinkedInIcon from '@mui/icons-material/LinkedIn';
  import Link from 'next/link';
  import Logo from '../ui/Logo';
  
  const Footer = () => {
    return (
      <Box component="footer" sx={{ bgcolor: 'white', pt: 8, pb: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {/* Logo and description */}
            <Grid item xs={12} md={4}>
              <Logo />
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2, mb: 3 }}>
                Mentora conecta mentores Montessori con familias para ofrecer una educación personalizada que respeta el ritmo natural de aprendizaje de cada niño.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton color="primary" aria-label="Facebook">
                  <FacebookIcon />
                </IconButton>
                <IconButton color="primary" aria-label="Twitter">
                  <TwitterIcon />
                </IconButton>
                <IconButton color="primary" aria-label="Instagram">
                  <InstagramIcon />
                </IconButton>
                <IconButton color="primary" aria-label="YouTube">
                  <YouTubeIcon />
                </IconButton>
                <IconButton color="primary" aria-label="LinkedIn">
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Grid>
            
            {/* Links */}
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h6" gutterBottom>
                Sobre nosotros
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {['Misión', 'Equipo', 'Contacto', 'Trabaja con nosotros'].map((item) => (
                  <Box component="li" key={item} sx={{ mb: 1 }}>
                    <MuiLink 
                      component={Link} 
                      href="#"
                      underline="hover"
                      color="text.secondary"
                    >
                      {item}
                    </MuiLink>
                  </Box>
                ))}
              </Box>
            </Grid>
            
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h6" gutterBottom>
                Servicios
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {['Mentoría virtual', 'Mentoría presencial', 'Planes', 'Tienda'].map((item) => (
                  <Box component="li" key={item} sx={{ mb: 1 }}>
                    <MuiLink 
                      component={Link} 
                      href="#"
                      underline="hover"
                      color="text.secondary"
                    >
                      {item}
                    </MuiLink>
                  </Box>
                ))}
              </Box>
            </Grid>
            
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h6" gutterBottom>
                Recursos
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {['Blog', 'Guías', 'FAQ'].map((item) => (
                  <Box component="li" key={item} sx={{ mb: 1 }}>
                    <MuiLink 
                      component={Link} 
                      href="#"
                      underline="hover"
                      color="text.secondary"
                    >
                      {item}
                    </MuiLink>
                  </Box>
                ))}
              </Box>
            </Grid>
            
            {/* Newsletter */}
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h6" gutterBottom>
                Newsletter
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Suscríbete para recibir consejos y novedades
              </Typography>
              <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <TextField 
                  size="small" 
                  placeholder="Tu email" 
                  fullWidth
                />
                <Button 
                  variant="contained" 
                  color="primary" 
                  fullWidth
                >
                  Suscribirse
                </Button>
              </Box>
            </Grid>
          </Grid>
          
          <Divider sx={{ my: 4 }} />
          
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: { xs: 2, md: 0 } }}>
              © {new Date().getFullYear()} Mentora. Todos los derechos reservados.
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 3 }}>
              <MuiLink 
                component={Link} 
                href="#"
                underline="hover"
                color="text.secondary"
                variant="body2"
              >
                Términos y condiciones
              </MuiLink>
              <MuiLink 
                component={Link} 
                href="#"
                underline="hover"
                color="text.secondary"
                variant="body2"
              >
                Política de privacidad
              </MuiLink>
              <MuiLink 
                component={Link} 
                href="#"
                underline="hover"
                color="text.secondary"
                variant="body2"
              >
                Cookies
              </MuiLink>
            </Box>
          </Box>
        </Container>
      </Box>
    );
  };
  
  export default Footer;