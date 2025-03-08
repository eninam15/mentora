// src/components/layouts/PublicLayout.js
'use client';
import { useState } from 'react';
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
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../ui/Logo';
import Footer from '../shared/Footer';

const PublicLayout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const pathname = usePathname();

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
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ my: 2 }}>
        <Logo size="small" />
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton 
              component={Link} 
              href={item.href}
              sx={{ 
                textAlign: 'center',
                backgroundColor: pathname === item.href ? 'rgba(42, 109, 102, 0.1)' : 'transparent',
                color: pathname === item.href ? 'primary.main' : 'inherit',
              }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton 
            component={Link}
            href="/login"
            sx={{ textAlign: 'center' }}
          >
            <ListItemText primary="Iniciar Sesión" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton 
            component={Link}
            href="/register"
            sx={{ textAlign: 'center', backgroundColor: 'primary.main', color: 'white', '&:hover': { backgroundColor: 'primary.dark' } }}
          >
            <ListItemText primary="Registrarse" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static" color="default" elevation={0} sx={{ backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Logo />
            
            {/* Desktop navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  component={Link}
                  href={item.href}
                  sx={{ 
                    color: pathname === item.href ? 'primary.main' : 'text.primary',
                    position: 'relative',
                    mx: 1,
                    '&::after': pathname === item.href ? {
                      content: '""',
                      position: 'absolute',
                      width: '100%',
                      height: '2px',
                      bottom: 0,
                      left: 0,
                      backgroundColor: 'primary.main',
                      borderRadius: '2px'
                    } : {}
                  }}
                >
                  {item.name}
                </Button>
              ))}
              <Button 
                component={Link}
                href="/login"
                sx={{ ml: 2 }}
                variant="outlined" 
                color="primary"
              >
                Iniciar Sesión
              </Button>
              <Button 
                component={Link}
                href="/register"
                sx={{ ml: 1 }}
                variant="contained" 
                color="primary"
              >
                Registrarse
              </Button>
            </Box>
            
            {/* Mobile menu icon */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ ml: 2, display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      
      {/* Mobile navigation drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
        }}
      >
        {drawer}
      </Drawer>
      
      {/* Main content */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      
      {/* Footer can be added here */}
      <Footer />
    </Box>
  );
};

export default PublicLayout;