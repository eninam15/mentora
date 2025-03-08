// src/app/mentors/page.js
'use client';
import { useState } from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  Checkbox,
  ListItemText,
  Slider,
  Chip,
  Button,
  InputAdornment,
  IconButton,
  Pagination
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import CloseIcon from '@mui/icons-material/Close';
import PublicLayout from '@/components/layouts/PublicLayout';
import MentorCard from '@/components/features/MentorCard';

// Datos de ejemplo para los mentores
const MENTORES_EJEMPLO = [
  {
    id: 1,
    name: 'María Rodríguez',
    specialty: 'Vida Práctica (3-6 años)',
    rating: 4.9,
    sessions: 487,
    image: '/images/mentors/placeholder.jpg',
    areas: ['Vida Práctica', 'Sensorial'],
    availability: 'Hoy'
  },
  {
    id: 2,
    name: 'Carlos Mendoza',
    specialty: 'Matemáticas (6-9 años)',
    rating: 4.8,
    sessions: 324,
    image: '/images/mentors/placeholder.jpg',
    areas: ['Matemáticas', 'Lenguaje'],
    availability: 'Mañana'
  },
  {
    id: 3,
    name: 'Laura Guzmán',
    specialty: 'Lenguaje (3-6 años)',
    rating: 5.0,
    sessions: 512,
    image: '/images/mentors/placeholder.jpg',
    areas: ['Lenguaje', 'Sensorial'],
    availability: 'Esta semana'
  },
  {
    id: 4,
    name: 'Pedro Sánchez',
    specialty: 'Ciencias y Cultura (9-12 años)',
    rating: 4.7,
    sessions: 256,
    image: '/images/mentors/placeholder.jpg',
    areas: ['Ciencias', 'Cultura'],
    availability: 'Próxima semana'
  },
  {
    id: 5,
    name: 'Ana Martínez',
    specialty: 'Sensorial (0-3 años)',
    rating: 4.6,
    sessions: 198,
    image: '/images/mentors/placeholder.jpg',
    areas: ['Sensorial', 'Vida Práctica'],
    availability: 'Hoy'
  },
  {
    id: 6,
    name: 'Javier Torres',
    specialty: 'Música y Arte (6-12 años)',
    rating: 4.9,
    sessions: 342,
    image: '/images/mentors/placeholder.jpg',
    areas: ['Música', 'Arte'],
    availability: 'Mañana'
  },
];

const AREAS_MONTESSORI = [
  'Vida Práctica',
  'Sensorial',
  'Matemáticas',
  'Lenguaje',
  'Ciencias',
  'Cultura',
  'Música',
  'Arte'
];

const RANGOS_EDAD = [
  '0-3 años',
  '3-6 años',
  '6-9 años',
  '9-12 años',
  '12-15 años',
  '15+ años'
];

export default function MentorsPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    areas: [],
    ageRanges: [],
    rating: [0, 5],
    sessionType: 'all', // 'all', 'virtual', 'presential'
  });
  
  // Paginación
  const [page, setPage] = useState(1);
  const mentoresPerPage = 6;

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  const handleClearFilters = () => {
    setFilters({
      areas: [],
      ageRanges: [],
      rating: [0, 5],
      sessionType: 'all'
    });
    setSearchQuery('');
  };

  const handlePageChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filtrar mentores según los criterios
  const filteredMentors = MENTORES_EJEMPLO.filter(mentor => {
    // Filtro por búsqueda
    if (searchQuery && !mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !mentor.specialty.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Filtro por áreas
    if (filters.areas.length > 0 && !mentor.areas.some(area => filters.areas.includes(area))) {
      return false;
    }
    
    // Filtro por rating
    if (mentor.rating < filters.rating[0] || mentor.rating > filters.rating[1]) {
      return false;
    }
    
    // Otros filtros se implementarían aquí
    
    return true;
  });

  // Paginación
  const indexOfLastMentor = page * mentoresPerPage;
  const indexOfFirstMentor = indexOfLastMentor - mentoresPerPage;
  const currentMentors = filteredMentors.slice(indexOfFirstMentor, indexOfLastMentor);
  const pageCount = Math.ceil(filteredMentors.length / mentoresPerPage);

  const renderFilters = () => (
    <Box sx={{ p: { xs: 2, md: 0 } }}>
      {/* Búsqueda */}
      <TextField
        fullWidth
        placeholder="Buscar por nombre o especialidad"
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: searchQuery && (
            <InputAdornment position="end">
              <IconButton size="small" onClick={() => setSearchQuery('')}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </InputAdornment>
          )
        }}
        sx={{ mb: 3 }}
      />

      {/* Filtro por áreas Montessori */}
      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel id="areas-label">Áreas Montessori</InputLabel>
        <Select
          labelId="areas-label"
          multiple
          value={filters.areas}
          onChange={handleFilterChange}
          name="areas"
          input={<OutlinedInput label="Áreas Montessori" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} size="small" />
              ))}
            </Box>
          )}
        >
          {AREAS_MONTESSORI.map((area) => (
            <MenuItem key={area} value={area}>
              <Checkbox checked={filters.areas.indexOf(area) > -1} />
              <ListItemText primary={area} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Filtro por rango de edad */}
      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel id="age-range-label">Rango de edad</InputLabel>
        <Select
          labelId="age-range-label"
          multiple
          value={filters.ageRanges}
          onChange={handleFilterChange}
          name="ageRanges"
          input={<OutlinedInput label="Rango de edad" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} size="small" />
              ))}
            </Box>
          )}
        >
          {RANGOS_EDAD.map((range) => (
            <MenuItem key={range} value={range}>
              <Checkbox checked={filters.ageRanges.indexOf(range) > -1} />
              <ListItemText primary={range} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Filtro por calificación */}
      <Box sx={{ mb: 3 }}>
        <Typography id="rating-slider" gutterBottom>
          Calificación mínima
        </Typography>
        <Slider
          value={filters.rating[0]}
          onChange={(e, newValue) => 
            setFilters({ ...filters, rating: [newValue, filters.rating[1]] })
          }
          valueLabelDisplay="auto"
          step={0.5}
          marks
          min={0}
          max={5}
          aria-labelledby="rating-slider"
        />
      </Box>

      {/* Filtro por tipo de sesión */}
      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel id="session-type-label">Tipo de sesión</InputLabel>
        <Select
          labelId="session-type-label"
          value={filters.sessionType}
          onChange={handleFilterChange}
          name="sessionType"
          label="Tipo de sesión"
        >
          <MenuItem value="all">Todos</MenuItem>
          <MenuItem value="virtual">Virtual</MenuItem>
          <MenuItem value="presential">Presencial</MenuItem>
        </Select>
      </FormControl>

      {/* Botón para limpiar filtros */}
      <Button 
        variant="outlined" 
        color="primary" 
        fullWidth
        onClick={handleClearFilters}
        sx={{ mt: 1 }}
      >
        Limpiar filtros
      </Button>
    </Box>
  );

  return (
    <PublicLayout>
      {/* Hero section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" className="font-heading" gutterBottom>
            Nuestros Mentores
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: 600 }}>
            Descubre y conecta con mentores especializados en metodología Montessori que te acompañarán en el desarrollo educativo.
          </Typography>
        </Container>
      </Box>
      
      <Container maxWidth="lg" sx={{ my: 6 }}>
        <Grid container spacing={4}>
          {/* Filtros para desktop */}
          <Grid item xs={12} md={3} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Typography variant="h5" gutterBottom>
              Filtros
            </Typography>
            {renderFilters()}
          </Grid>
          
          {/* Botón para mostrar filtros en mobile */}
          <Grid item xs={12} sx={{ display: { xs: 'block', md: 'none' }, mb: 2 }}>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<TuneIcon />}
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              fullWidth
            >
              {mobileFiltersOpen ? 'Ocultar filtros' : 'Mostrar filtros'}
            </Button>
            
            {/* Filtros para mobile */}
            {mobileFiltersOpen && (
              <Box sx={{ mt: 2 }}>
                {renderFilters()}
              </Box>
            )}
          </Grid>
          
          {/* Lista de mentores */}
          <Grid item xs={12} md={9}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h5">
                {filteredMentors.length} {filteredMentors.length === 1 ? 'mentor' : 'mentores'} {searchQuery && `para "${searchQuery}"`}
              </Typography>
              
              <FormControl sx={{ minWidth: 150 }}>
                <Select
                  value="relevance"
                  size="small"
                  displayEmpty
                >
                  <MenuItem value="relevance">Relevancia</MenuItem>
                  <MenuItem value="rating">Calificación</MenuItem>
                  <MenuItem value="price_low">Precio: menor a mayor</MenuItem>
                  <MenuItem value="price_high">Precio: mayor a menor</MenuItem>
                </Select>
              </FormControl>
            </Box>
            
            {currentMentors.length > 0 ? (
              <>
                <Grid container spacing={3}>
                  {currentMentors.map((mentor) => (
                    <Grid item key={mentor.id} xs={12} sm={6} md={4}>
                      <MentorCard mentor={mentor} />
                    </Grid>
                  ))}
                </Grid>
                
                {/* Paginación */}
                {pageCount > 1 && (
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
                    <Pagination 
                      count={pageCount} 
                      page={page} 
                      onChange={handlePageChange} 
                      color="primary" 
                    />
                  </Box>
                )}
              </>
            ) : (
              <Box 
                sx={{ 
                  textAlign: 'center', 
                  py: 8,
                  bgcolor: 'background.default',
                  borderRadius: 2
                }}
              >
                <Typography variant="h6" gutterBottom>
                  No se encontraron mentores
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Intenta ajustar tus filtros o realizar una búsqueda diferente.
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary"
                  onClick={handleClearFilters}
                  sx={{ mt: 2 }}
                >
                  Limpiar filtros
                </Button>
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </PublicLayout>
  );
}