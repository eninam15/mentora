// src/components/layouts/PublicLayout.js
'use client';
import { useState, useEffect } from 'react';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  Container,
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemButton,
  useMediaQuery,
  useTheme as useMuiTheme,
  Slide,
  Fade,
  Avatar,
  Badge,
  InputBase
} from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../ui/Logo';
import Footer from '../shared/Footer';
import ThemeSwitch from '../ui/ThemeSwitch';

// Estilos neumórficos para el AppBar
const NeumorphicAppBar = styled(AppBar)(({ theme, scrolled }) => ({
  backgroundColor: scrolled 
    ? alpha(theme.palette.background.paper, 0.85) 
    : alpha(theme.palette.background.default, 0.5),
  backdropFilter: 'blur(10px)',
  borderBottom: scrolled ? `1px solid ${theme.palette.divider}` : 'none',
  boxShadow: scrolled ? theme.palette.neumorphic.boxShadow : 'none',
  color: theme.palette.text.primary,
  position: 'sticky',
  top: 0,
  zIndex: theme.zIndex.appBar,
  transition: 'all 0.3s ease',
  padding: scrolled ? theme.spacing(1, 0) : theme.spacing(2, 0),
}));

// Botón de menú neumórfico
const NeumorphicIconButton = styled(IconButton)(({ theme }) => ({
  width: 44,
  height: 44,
  borderRadius: '50%',
  backgroundColor: alpha(theme.palette.background.card, 0.8),
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

// Botón de navegación neumórfico
const NavButton = styled(Button)(({ theme, active }) => ({
  borderRadius: 12,
  padding: '8px 16px',
  color: active === 'true' ? theme.palette.primary.main : theme.palette.text.primary,
  fontWeight: active === 'true' ? 600 : 500,
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: 0,
    height: 3,
    width: active === 'true' ? '100%' : '0%',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '3px 3px 0 0',
    transition: 'width 0.3s ease',
  },
  '&:hover': {
    backgroundColor: 'transparent',
    '&::before': {
      width: '100%',
    },
  },
}));

// Barra de búsqueda neumórfica
const SearchBar = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.background.card, 0.8),
  boxShadow: theme.palette.neumorphic.inset,
  '&:hover': {
    backgroundColor: alpha(theme.palette.background.card, 1),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  maxWidth: 300,
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.secondary,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.text.primary,
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

// Drawer neumórfico
const NeumorphicDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    backgroundColor: theme.palette.background.default,
    boxShadow: `10px 0 20px ${theme.palette.neumorphic.shadow}`,
    borderRight: `1px solid ${theme.palette.divider}`,
    width: 280,
    paddingTop: theme.spacing(2),
  },
}));

// Botón de acción tipo Soft UI
const ActionButton = styled(Button)(({ theme }) => ({
  borderRadius: 14,
  padding: '10px 20px',
  fontWeight: 600,
  boxShadow: theme.palette.neumorphic.boxShadow,
  transition: 'all 0.3s ease',
  textTransform: 'none',
  overflow: 'hidden',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,0.05) 100%)',
    borderRadius: 'inherit',
  },
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: theme.palette.neumorphic.boxShadow,
  },
  '&:active': {
    transform: 'translateY(0px)',
    boxShadow: theme.palette.neumorphic.inset,
  },
}));

const PublicLayout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = useMuiTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const pathname = usePathname();

  // Efecto para detectar el scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Mentores', href: '/mentors' },
    { name: 'Blog', href: '/blog' },
    { name: 'Tienda', href: '/store' },
    { name: 'Planes', href: '/plans' },
    { name: 'Contacto', href: '/contact' },
  ];

  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Logo size="small" />
        <NeumorphicIconButton onClick={handleDrawerToggle} aria-label="cerrar menú">
          <CloseIcon />
        </NeumorphicIconButton>
      </Box>
      
      <List sx={{ flexGrow: 1, px: 2 }}>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding sx={{ mb: 1 }}>
            <ListItemButton 
              component={Link} 
              href={item.href}
              sx={{ 
                borderRadius: 2,
                backgroundColor: pathname === item.href 
                  ? alpha(theme.palette.primary.main, 0.1)
                  : 'transparent',
                color: pathname === item.href ? 'primary.main' : 'text.primary',
                fontWeight: pathname === item.href ? 600 : 400,
                '&:hover': {
                  backgroundColor: alpha(theme.palette.primary.main, 0.05),
                }
              }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
      <Box sx={{ p: 2, borderTop: `1px solid ${theme.palette.divider}` }}>
        <ActionButton 
          component={Link}
          href="/login"
          fullWidth
          variant="outlined"
          color="primary"
          sx={{ mb: 1 }}
        >
          Iniciar Sesión
        </ActionButton>
        <ActionButton 
          component={Link}
          href="/register"
          fullWidth
          variant="contained" 
          color="primary"
        >
          Registrarse
        </ActionButton>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NeumorphicAppBar scrolled={isScrolled ? 'true' : 'false'}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Fade in={true} timeout={1000}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Logo variant={theme.palette.mode === 'dark' ? 'white' : 'default'} />
                
                {/* Desktop navigation */}
                <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 4 }}>
                  {navItems.map((item) => (
                    <NavButton
                      key={item.name}
                      component={Link}
                      href={item.href}
                      active={(pathname === item.href).toString()}
                      sx={{ mx: 0.5 }}
                    >
                      {item.name}
                    </NavButton>
                  ))}
                </Box>
              </Box>
            </Fade>
            
            <Fade in={true} timeout={1000} style={{ transitionDelay: '200ms' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {/* Búsqueda en desktop */}
                <SearchBar sx={{ display: { xs: 'none', md: 'flex' } }}>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Buscar..."
                    inputProps={{ 'aria-label': 'buscar' }}
                  />
                </SearchBar>
                
                {/* Botones de acción en desktop */}
                <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
                  <ThemeSwitch />
                  
                  <NeumorphicIconButton aria-label="notificaciones">
                    <Badge badgeContent={4} color="primary">
                      <NotificationsNoneIcon />
                    </Badge>
                  </NeumorphicIconButton>
                  
                  <NeumorphicIconButton aria-label="carrito">
                    <Badge badgeContent={2} color="secondary">
                      <ShoppingCartOutlinedIcon />
                    </Badge>
                  </NeumorphicIconButton>
                  
                  <ActionButton 
                    component={Link}
                    href="/login"
                    variant="outlined" 
                    color="primary"
                    sx={{ ml: 1 }}
                  >
                    Iniciar Sesión
                  </ActionButton>
                  
                  <ActionButton 
                    component={Link}
                    href="/register"
                    variant="contained" 
                    color="primary"
                    sx={{ ml: 1 }}
                  >
                    Registrarse
                  </ActionButton>
                </Box>
                
                {/* Botones de acción en mobile */}
                <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>
                  <ThemeSwitch />
                  
                  <NeumorphicIconButton aria-label="carrito">
                    <Badge badgeContent={2} color="secondary">
                      <ShoppingCartOutlinedIcon />
                    </Badge>
                  </NeumorphicIconButton>
                  
                  <NeumorphicIconButton
                    color="inherit"
                    aria-label="abrir menú"
                    edge="end"
                    onClick={handleDrawerToggle}
                  >
                    <MenuIcon />
                  </NeumorphicIconButton>
                </Box>
              </Box>
            </Fade>
          </Toolbar>
        </Container>
      </NeumorphicAppBar>
      
      {/* Mobile navigation drawer */}
      <NeumorphicDrawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {drawer}
      </NeumorphicDrawer>
      
      {/* Main content */}
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1,
          backgroundColor: theme.palette.background.default,
          transition: 'background-color 0.3s ease'
        }}
      >
        {children}
      </Box>
      
      <Footer />
    </Box>
  );
};

export default PublicLayout;