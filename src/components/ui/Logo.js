// src/components/ui/Logo.js
import Image from 'next/image';
import Link from 'next/link';
import { Box } from '@mui/material';

const Logo = ({ variant = 'default', size = 'medium' }) => {
  const sizes = {
    small: { width: 100, height: 30 },
    medium: { width: 150, height: 45 },
    large: { width: 200, height: 60 },
  };

  const { width, height } = sizes[size];
  const logoSrc = variant === 'white' ? '/images/logo/logo-white.svg' : '/images/logo/logo.svg';

  return (
    <Link href="/">
      <Box component="span" sx={{ display: 'inline-block' }}>
        <Image 
          src={logoSrc} 
          alt="Mentora"
          width={width}
          height={height}
          priority
        />
      </Box>
    </Link>
  );
};

export default Logo;