import { Box, Typography, Container, Grid } from '@mui/material';
import k2Logo from '../assets/k2_logo.png';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        bgcolor: '#0B3524',
        color: 'white',
        py: 4,
        borderTop: '1px solid rgba(255,255,255,0.1)',
        position: 'relative',
        width: '100%',
        zIndex: 2,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          {/* Logo & Description */}
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src={k2Logo}
              alt="K2 Logo"
              sx={{
                height: '40px',
                width: 'auto',
                mb: 2,
              }}
            />
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.8)',
                fontSize: '14px',
                lineHeight: 1.6,
              }}
            >
              Empowering Your Adventures with Reliable, Long-Lasting Energy Solutions.
            </Typography>
          </Grid>

          {/* More About K2 */}
          <Grid item xs={12} md={2}>
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: 700,
                mb: 3,
              }}
            >
              More About K2
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '14px',
                  cursor: 'pointer',
                  '&:hover': { color: '#FBD784' },
                }}
              >
                About K2
              </Typography>
              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '14px',
                  cursor: 'pointer',
                  '&:hover': { color: '#FBD784' },
                }}
                onClick={() => navigate('/product')}
              >
                Products
              </Typography>
              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '14px',
                  cursor: 'pointer',
                  '&:hover': { color: '#FBD784' },
                }}
                onClick={() => navigate('/contact')}
              >
                Partnerships
              </Typography>
            </Box>
          </Grid>

          {/* Contact Us */}
          <Grid item xs={12} md={2}>
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: 700,
                mb: 3,
              }}
            >
              Contact Us
            </Typography>
            <Typography sx={{ mb: 1 }}>
              Info@k2energysolutions.com.au
            </Typography>
            <Typography>
              sales@k2energysolutions.com.au
            </Typography>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Typography
          sx={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: '12px',
            mt: 8,
            textAlign: 'center',
          }}
        >
          Copyright 2025 K2 Energy
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer; 