// src/components/ui/Card.js
import { Card as MuiCard, CardContent, CardActions, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(MuiCard)(({ theme }) => ({
  borderRadius: 12,
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
  overflow: 'hidden',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  height: '100%',
  
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.1)',
  },
}));

const Card = ({ 
  title, 
  subtitle, 
  children, 
  footer, 
  image, 
  imageHeight = 200,
  align = 'left',
  ...props 
}) => {
  return (
    <StyledCard {...props}>
      {image && (
        <Box 
          sx={{ 
            height: imageHeight, 
            background: `url(${image}) center/cover no-repeat`,
            position: 'relative'
          }}
        />
      )}
      
      <CardContent sx={{ p: 3, textAlign: align }}>
        {title && (
          <Typography variant="h5" component="h2" gutterBottom>
            {title}
          </Typography>
        )}
        
        {subtitle && (
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            {subtitle}
          </Typography>
        )}
        
        {children}
      </CardContent>
      
      {footer && (
        <CardActions sx={{ p: 2, pt: 0 }}>
          {footer}
        </CardActions>
      )}
    </StyledCard>
  );
};

export default Card;