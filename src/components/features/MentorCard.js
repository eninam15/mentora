// src/components/features/MentorCard.js
import {
    Box,
    Typography,
    Rating,
    Chip,
    Button,
  } from '@mui/material';
  import Card from '@/components/ui/Card';
  import Link from 'next/link';
  
  const MentorCard = ({ mentor }) => {
    const { 
      id, 
      name, 
      specialty, 
      rating, 
      sessions, 
      image, 
      areas = [], 
      availability 
    } = mentor;
  
    return (
      <Card
        image={image || '/images/mentors/placeholder.jpg'}
        imageHeight={180}
      >
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          {name}
        </Typography>
        
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {specialty}
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
          <Rating
            value={rating}
            precision={0.5}
            size="small"
            readOnly
          />
          <Typography variant="body2" color="text.secondary">
            ({rating})
          </Typography>
          
          <Box sx={{ ml: 'auto', fontSize: '0.875rem', color: 'text.secondary' }}>
            {sessions} sesiones
          </Box>
        </Box>
        
        <Box sx={{ mb: 2 }}>
          {areas.map((area, index) => (
            <Chip
              key={index}
              label={area}
              size="small"
              sx={{ mr: 0.5, mb: 0.5, fontSize: '0.75rem' }}
            />
          ))}
        </Box>
        
        {availability && (
          <Typography variant="body2" color="success.main" sx={{ mb: 2 }}>
            Próxima disponibilidad: {availability}
          </Typography>
        )}
        
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            component={Link}
            href={`/mentors/${id}`}
          >
            Ver perfil
          </Button>
          
          <Button
            variant="contained"
            color="primary"
            fullWidth
            component={Link}
            href={`/mentors/${id}/book`}
          >
            Reservar
          </Button>
        </Box>
      </Card>
    );
  };
  
  export default MentorCard;