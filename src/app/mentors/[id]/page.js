// src/app/mentors/[id]/page.js
'use client';
import { useState } from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Avatar, 
  Button,
  Rating,
  Chip,
  Tabs,
  Tab,
  Divider,
  Card,
  CardContent,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';
import PublicIcon from '@mui/icons-material/Public';
import VideocamIcon from '@mui/icons-material/Videocam';
import PersonIcon from '@mui/icons-material/Person';
import PublicLayout from '@/components/layouts/PublicLayout';

// Datos de ejemplo para un mentor específico
const MENTOR_EJEMPLO = {
  id: 1,
  name: 'María Rodríguez',
  specialty: 'Especialista en Vida Práctica Montessori',
  bio: 'Educadora con más de 10 años de experiencia en metodología Montessori. Certificada por la Asociación Montessori Internacional (AMI) para el rango de 3-6 años. Apasionada por fomentar la independencia y el amor por el aprendizaje en los niños.',
  rating: 4.9,
  reviewCount: 487,
  sessions: 512,
  image: '/images/mentors/placeholder.jpg',
  education: [
    'Certificación AMI para Guía Montessori (3-6 años)',
    'Licenciatura en Pedagogía, Universidad Complutense de Madrid',
    'Maestría en Educación Infantil, Universidad Autónoma de Barcelona'
  ],
  specialties: ['Vida Práctica', 'Sensorial', 'Lenguaje'],
  languages: ['Español', 'Inglés', 'Francés'],
  ageRanges: ['3-6 años', '6-9 años'],
  sessionTypes: ['Virtual', 'Presencial'],
  availability: 'Lunes a viernes de 15:00 a 20:00',
  hourlyRate: 45,
  location: 'Madrid, España',
  reviews: [
    {
      id: 1,
      author: 'Carlos G.',
      date: '15 de febrero de 2023',
      rating: 5,
      content: 'María ha sido una excelente mentora para mi hija. Su paciencia y conocimiento de la metodología Montessori son excepcionales. Ha ayudado a mi hija a desarrollar independencia y amor por el aprendizaje.'
    },
    {
      id: 2,
      author: 'Ana P.',
      date: '3 de enero de 2023',
      rating: 5,
      content: 'Increíble experiencia con María. Su enfoque personalizado ha hecho una gran diferencia en el desarrollo de mi hijo. Altamente recomendada.'
    },
    {
      id: 3,
      author: 'Javier M.',
      date: '28 de noviembre de 2022',
      rating: 4,
      content: 'Muy buena mentora, domina perfectamente la metodología Montessori y sabe adaptarla a las necesidades de cada niño. El único inconveniente es que a veces es difícil encontrar horarios disponibles.'
    }
  ]
};

export default function MentorDetailPage({ params }) {
  const mentor = MENTOR_EJEMPLO; // En una implementación real, buscaríamos el mentor por params.id
  const [tabValue, setTabValue] = useState(0);
  const [favorite, setFavorite] = useState(false);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <PublicLayout>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {/* Información principal del mentor */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              {/* Foto y detalles básicos */}
              <Grid item xs={12} sm={4}>
                <Avatar
                  src={mentor.image}
                  alt={mentor.name}
                  sx={{ 
                    width: '100%', 
                    height: 'auto', 
                    aspectRatio: '1/1',
                    mb: 2 
                  }}
                  variant="rounded"
                />
                
                <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                  <IconButton 
                    color="primary" 
                    aria-label="Añadir a favoritos"
                    onClick={toggleFavorite}
                  >
                    {favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                  </IconButton>
                  
                  <IconButton color="primary" aria-label="Compartir perfil">
                    <ShareIcon />
                  </IconButton>
                  
                  <Button 
                    variant="contained" 
                    color="primary" 
                    startIcon={<EventAvailableIcon />}
                    fullWidth
                  >
                    Ver disponibilidad
                  </Button>
                </Box>
                
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Especialidades
                  </Typography>
                  {mentor.specialties.map((specialty, index) => (
                    <Chip 
                      key={index} 
                      label={specialty} 
                      sx={{ mr: 0.5, mb: 0.5 }} 
                    />
                  ))}
                </Box>
                
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Edades
                  </Typography>
                  {mentor.ageRanges.map((age, index) => (
                    <Chip 
                      key={index} 
                      label={age} 
                      sx={{ mr: 0.5, mb: 0.5 }} 
                      color="secondary"
                      variant="outlined"
                    />
                  ))}
                </Box>
                
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Idiomas
                  </Typography>
                  {mentor.languages.map((language, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                      <PublicIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                      <Typography variant="body2">{language}</Typography>
                    </Box>
                  ))}
                </Box>
                
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Tipo de sesiones
                  </Typography>
                  {mentor.sessionTypes.map((type, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                      {type === 'Virtual' ? 
                        <VideocamIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} /> : 
                        <PersonIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                      }
                      <Typography variant="body2">{type}</Typography>
                    </Box>
                  ))}
                </Box>
              </Grid>
              
              {/* Información principal */}
              <Grid item xs={12} sm={8}>
                <Typography variant="h3" component="h1" gutterBottom>
                  {mentor.name}
                </Typography>
                
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  {mentor.specialty}
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Rating 
                    value={mentor.rating} 
                    precision={0.5} 
                    readOnly 
                  />
                  <Typography variant="body2" sx={{ ml: 1 }}>
                    ({mentor.rating})
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                    {mentor.reviewCount} valoraciones
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <SchoolIcon sx={{ mr: 1, color: 'text.secondary' }} />
                  <Typography variant="body2" color="text.secondary">
                    {mentor.sessions} sesiones impartidas
                  </Typography>
                </Box>
                
                <Typography variant="body1" paragraph>
                  {mentor.bio}
                </Typography>
                
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" gutterBottom>
                    Formación
                  </Typography>
                  <List dense disablePadding>
                    {mentor.education.map((item, index) => (
                      <ListItem key={index} disablePadding sx={{ mb: 1 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
                
                <Tabs 
                  value={tabValue} 
                  onChange={handleTabChange}
                  textColor="primary"
                  indicatorColor="primary"
                  aria-label="mentor information tabs"
                  sx={{ mb: 3 }}
                >
                  <Tab label="Valoraciones" />
                  <Tab label="Experiencia" />
                  <Tab label="Metodología" />
                </Tabs>
                
                {tabValue === 0 && (
                  <Box>
                    {mentor.reviews.map((review) => (
                      <Box key={review.id} sx={{ mb: 3 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="subtitle1" fontWeight={600}>
                            {review.author}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {review.date}
                          </Typography>
                        </Box>
                        <Rating value={review.rating} size="small" readOnly sx={{ mb: 1 }} />
                        <Typography variant="body2">
                          {review.content}
                        </Typography>
                        <Divider sx={{ mt: 2 }} />
                      </Box>
                    ))}
                  </Box>
                )}
                
                {tabValue === 1 && (
                  <Box>
                    <Typography variant="body1" paragraph>
                      Información sobre la experiencia del mentor...
                    </Typography>
                  </Box>
                )}
                
                {tabValue === 2 && (
                  <Box>
                    <Typography variant="body1" paragraph>
                      Detalles sobre la metodología de enseñanza...
                    </Typography>
                  </Box>
                )}
              </Grid>
            </Grid>
          </Grid>
          
          {/* Panel lateral para reserva */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: 2, position: 'sticky', top: 100 }}>
              <Typography variant="h5" gutterBottom>
                Reserva una sesión
              </Typography>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h6">
                  ${mentor.hourlyRate}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ alignSelf: 'center' }}>
                  por hora
                </Typography>
              </Box>
              
              <Divider sx={{ my: 2 }} />
              
              <Typography variant="subtitle2" gutterBottom>
                Disponibilidad
              </Typography>
              <Typography variant="body2" paragraph>
                {mentor.availability}
              </Typography>
              
              <Button 
                variant="contained" 
                color="primary" 
                fullWidth 
                size="large"
                startIcon={<EventAvailableIcon />}
                sx={{ mb: 2 }}
              >
                Ver calendario
              </Button>
              
              <Button 
                variant="outlined" 
                color="primary" 
                fullWidth
                startIcon={<MenuBookIcon />}
              >
                Reservar sesión de prueba
              </Button>
              
              <Box sx={{ mt: 4 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Garantía de satisfacción
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Si no estás satisfecho con tu primera sesión, te devolvemos el dinero. Sin preguntas.
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </PublicLayout>
  );
}