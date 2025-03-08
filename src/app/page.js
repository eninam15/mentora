// src/app/page.js
'use client';
import { 
  Box, 
  Typography, 
  Button, 
  Container, 
  Grid, 
  Card, 
  CardContent,
  CardMedia,
  CardActions
} from '@mui/material';
import Link from 'next/link';
import PublicLayout from '@/components/layouts/PublicLayout';

export default function Home() {
  return (
    <PublicLayout>
      {/* Hero Section */}
      <Box 
        sx={{ 
          bgcolor: 'primary.main', 
          color: 'white',
          py: 8,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h1" 
                className="font-heading"
                sx={{ 
                  mb: 2,
                  fontSize: { xs: '2.5rem', md: '3.5rem' }
                }}
              >
                Educación Montessori al alcance de todos
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ mb: 4, opacity: 0.9, maxWidth: 500 }}
              >
                Conectamos mentores especializados con estudiantes y familias para un aprendizaje personalizado y respetuoso.
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Button 
                  variant="contained" 
                  color="secondary"
                  size="large"
                  component={Link}
                  href="/mentors"
                >
                  Encuentra tu mentor
                </Button>
                <Button 
                  variant="outlined" 
                  sx={{ 
                    color: 'white', 
                    borderColor: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255,255,255,0.1)'
                    }
                  }}
                  size="large"
                  component={Link}
                  href="/plans"
                >
                  Conoce nuestros planes
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
              {/* Aquí irá una imagen */}
              <Box 
                sx={{ 
                  bgcolor: 'rgba(255,255,255,0.2)', 
                  height: 400, 
                  borderRadius: 4,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white'
                }}
              >
                <Typography variant="h5">Imagen de niños aprendiendo</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* What is Mentora Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              {/* Aquí irá un video */}
              <Box 
                sx={{ 
                  bgcolor: 'grey.200', 
                  height: 300, 
                  borderRadius: 4,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Typography variant="h6">Video explicativo</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h2" 
                className="font-heading"
                sx={{ mb: 3, color: 'primary.main' }}
              >
                ¿Qué es Mentora?
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                Mentora es una plataforma educativa que conecta mentores especializados en metodología Montessori con estudiantes y sus familias. Facilitamos el acceso a una educación que respeta los ritmos naturales de aprendizaje y fomenta la independencia, creatividad y pensamiento crítico.
              </Typography>
              <Grid container spacing={3}>
                {['Mentoría personalizada', 'Filosofía Montessori', 'Seguimiento continuo'].map((item, index) => (
                  <Grid item xs={12} sm={4} key={index}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Box 
                        sx={{ 
                          width: 64, 
                          height: 64, 
                          borderRadius: '50%', 
                          bgcolor: 'background.default',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 2
                        }}
                      >
                        <Typography variant="body2">Ícono</Typography>
                      </Box>
                      <Typography variant="h6" sx={{ mb: 1 }}>
                        {item}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Breve descripción
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Our Services Section */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="h2" 
              className="font-heading"
              sx={{ mb: 2, color: 'primary.main' }}
            >
              Nuestros Servicios
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 700, mx: 'auto' }}>
              Ofrecemos un ecosistema completo para el desarrollo educativo siguiendo los principios Montessori
            </Typography>
          </Box>
          
          <Grid container spacing={3}>
            {[
              'Mentoría virtual',
              'Mentoría presencial',
              'Planes mensuales',
              'Recursos educativos',
              'Tienda especializada'
            ].map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ height: '100%', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-5px)' } }}>
                  <CardContent sx={{ textAlign: 'center', py: 4 }}>
                    <Box 
                      sx={{ 
                        width: 56, 
                        height: 56, 
                        borderRadius: '50%', 
                        bgcolor: 'primary.main',
                        color: 'white',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2
                      }}
                    >
                      <Typography variant="body2">Ícono</Typography>
                    </Box>
                    <Typography variant="h5" sx={{ mb: 2 }}>
                      {service}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                      Descripción breve del servicio y sus beneficios para los usuarios.
                    </Typography>
                    <Button variant="text" color="primary">
                      Saber más
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="md">
          <Box 
            sx={{ 
              bgcolor: 'primary.main',
              color: 'white',
              borderRadius: 4,
              p: { xs: 4, md: 6 },
              textAlign: 'center'
            }}
          >
            <Typography variant="h3" className="font-heading" sx={{ mb: 3 }}>
              ¿Listo para comenzar?
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
              Únete a nuestra comunidad educativa y transforma la experiencia de aprendizaje
            </Typography>
            <Button 
              variant="contained" 
              color="secondary" 
              size="large"
              component={Link}
              href="/register"
            >
              Registrarme ahora
            </Button>
          </Box>
        </Container>
      </Box>
    </PublicLayout>
  );
}