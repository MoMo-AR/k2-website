import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import k2Logo from '../assets/k2_logo.png';
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  const navigate = useNavigate();

  // 移动导航到组件顶层
  const Navigation = () => {
    return (
      <div style={{ 
        display: 'flex', 
        gap: '32px',
        position: 'relative',
        zIndex: 9999 
      }}>
        <Box sx={{ display: 'flex', gap: 4 }}>
          <Typography
            sx={{
              color: 'white',
              cursor: 'pointer',
              '&:hover': { opacity: 0.8 },
            }}
            onClick={() => navigate('/product')}
          >
            Products
          </Typography>
          <Typography
            sx={{
              color: 'white',
              cursor: 'pointer',
              '&:hover': { opacity: 0.8 },
            }}
            onClick={() => navigate('/about')}
          >
            About us
          </Typography>
          <Typography
            sx={{
              color: 'white',
              cursor: 'pointer',
              '&:hover': { opacity: 0.8 },
            }}
            onClick={() => navigate('/contact')}
          >
            Contact
          </Typography>
        </Box>
      </div>
    );
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        margin: 0,
        padding: 0,
        width: '100%',
        maxWidth: '100%',
        overflow: 'hidden'
      }}
    >
      {/* Header */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          padding: { xs: '16px 20px', md: '32px 80px' },
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 10,
        }}
      >
        {/* Logo */}
        <Box
          component="img"
          src={k2Logo}
          alt="K2 Battery Logo"
          sx={{
            height: { xs: '30px', md: '40px' },
          }}
        />

        {/* Navigation */}
        <Navigation />
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          padding: { xs: '0 20px', md: '0 80px' },
          zIndex: 4,
        }}
      >
        <Box sx={{ maxWidth: '800px' }}>
          <Typography
            sx={{
              color: '#575C4B',
              fontSize: { xs: '12px', md: '14px' },
              letterSpacing: { xs: 2, md: 4 },
              mb: 2,
              display: 'flex',
              alignItems: 'center',
              '&:before': {
                content: '""',
                width: { xs: '20px', md: '40px' },
                height: '2px',
                bgcolor: '#575C4B',
                mr: 2,
              }
            }}
          >
            Born of the American spirit
          </Typography>
          <TypeAnimation
            sequence={[
              'More Than Just Energy,',
              1000,
              'Power Your Adventure,',
              1000,
              'Embrace Freedom!',
              1000,
            ]}
            wrapper="h1"
            speed={50}
            style={{
              fontSize: window.innerWidth < 600 ? '36px' : '64px',
              fontWeight: 600,
              marginBottom: '16px',
              display: 'inline-block',
              color: '#333333',
              fontFamily: 'Roboto, sans-serif'
            }}
            repeat={Infinity}
          />
          
          <Typography variant="h2" sx={{ 
            fontSize: '48px', 
            fontWeight: 540,
            opacity: 0,
            animation: 'fadeIn 1s ease-in forwards',
            '@keyframes fadeIn': {
              '0%': { opacity: 0, transform: 'translateY(20px)' },
              '100%': { opacity: 1, transform: 'translateY(0)' }
            },
            animationDelay: '1s',
            color: '#333333',
            fontFamily: 'Roboto, sans-serif'
          }}>
            A Bold Way to Power Your Journey
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Hero; 