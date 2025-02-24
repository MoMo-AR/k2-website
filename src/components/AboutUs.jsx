import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import k2Logo from '../assets/k2_logo.png';
import facility1 from '../assets/facility1.JPG';
import facility2 from '../assets/facility2.JPG';
import facility3 from '../assets/facility3.JPG';
import facility4 from '../assets/facility4.JPG';
import facility5 from '../assets/facility5.JPG';
import facility6 from '../assets/facility6.JPG';
import Navigation from './Navigation';

function AboutUs() {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: '#0B3524', color: 'white', minHeight: '100vh' }}>
      {/* Header */}
      <Box
        sx={{
          padding: '32px 80px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <Box
          component="img"
          src={k2Logo}
          alt="Logo"
          sx={{
            height: '40px',
            cursor: 'pointer',
          }}
          onClick={() => navigate('/')}
        />
        <Box sx={{ display: 'flex', gap: 4 }}>
        <Navigation />
        </Box>
      </Box>

      {/* About Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" sx={{ fontSize: '36px', fontWeight: 600, mb: 4 }}>
          About K2 Energy
        </Typography>
        <Typography sx={{ mb: 6, lineHeight: 1.8, color: 'rgba(255,255,255,0.8)' }}>
          K2 Energy is a leading provider of advanced lithium iron phosphate (LiFePO4) battery solutions. 
          We specialize in developing and manufacturing high-performance, safe, and reliable energy storage systems 
          for various applications including RVs, solar systems, and marine use.
        </Typography>

        {/* Core Values 改为 K2 Subsidiary composition */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" sx={{ fontSize: '28px', fontWeight: 600, mb: 4 }}>
            K2 Subsidiary composition
          </Typography>
          <Grid container spacing={3}>
            {[
              { 
                title: 'K2 Battery AU', 
                desc: 'K2 Battery is a subsidiary of K2 Energy based in Australia, focused on the B2B sales of K2 batteries and holding the exclusive agency rights for the full range of Pytes products.'
              },
              { 
                title: 'K2 Energy HK', 
                desc: 'K2 Energy HK is K2\'s branch in Hong Kong, responsible for sales and product development in the Asia-Pacific market.'
              },
              { 
                title: 'K2 Energy US', 
                desc: 'K2 Energy USA, located in Nevada, is the origin of K2, handling sales in North America and Europe, and equipped with a full research and development team.'
              },
              { 
                title: 'K2 Ecommerce', 
                desc: 'K2 Ecommerce serves as K2\'s retail online channel, primarily selling the complete range of K2 products directly to end consumers.'
              },
            ].map((subsidiary) => (
              <Grid item xs={12} sm={6} md={3} key={subsidiary.title}>
                <Paper
                  sx={{
                    p: 3,
                    bgcolor: 'rgba(255,255,255,0.05)',
                    height: '100%',
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="h6" sx={{ 
                    mb: 2,
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '20px'
                  }}>
                    {subsidiary.title}
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>
                    {subsidiary.desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Mission & Vision */}
        <Grid container spacing={6} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 4, bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 2 }}>
              <Typography variant="h4" sx={{ mb: 3 }}>
                Our Mission
              </Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>
                To provide innovative and reliable energy storage solutions that empower our customers 
                to achieve their goals while promoting sustainable energy practices.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 4, bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 2 }}>
              <Typography variant="h4" sx={{ mb: 3 }}>
                Our Vision
              </Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>
                To be the global leader in advanced battery technology, driving the transition 
                to a more sustainable and energy-efficient future.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Facilities */}
        <Box>
          <Typography variant="h3" sx={{ fontSize: '28px', fontWeight: 600, mb: 4 }}>
            Our Facilities
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                image: facility1,
                title: 'Research & Development Center',
              },
              {
                image: facility2,
                title: 'Warehouse',
              },
              {
                image: facility3,
                title: 'Leisure Center',
              },
              {
                image: facility4,
                title: 'Reception',
              },
              {
                image: facility5,
                title: 'Client Lounge',
              },
              {
                image: facility6,
                title: 'Meeting Room',
              }
            ].map((facility) => (
              <Grid item xs={12} sm={6} md={4} key={facility.title}>
                <Box 
                  sx={{ 
                    position: 'relative',
                    height: '300px',
                    borderRadius: 2,
                    overflow: 'hidden',
                    '&:hover': {
                      '& .overlay': {
                        opacity: 1
                      }
                    }
                  }}
                >
                  <Box
                    component="img"
                    src={facility.image}
                    alt={facility.title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  <Box
                    className="overlay"
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      bgcolor: 'rgba(0,0,0,0.7)',
                      p: 2,
                      opacity: 0.8,
                      transition: 'opacity 0.3s',
                    }}
                  >
                    <Typography 
                      sx={{ 
                        color: '#FFFFFF',
                        fontWeight: 600,
                        textAlign: 'center'
                      }}
                    >
                      {facility.title}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* Footer */}
      <Box
        sx={{
          bgcolor: 'rgba(0,0,0,0.2)',
          py: 4,
          mt: 8,
          textAlign: 'center',
          borderTop: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <Container maxWidth="lg">
          <Box
            component="img"
            src={k2Logo}
            alt="Logo"
            sx={{
              height: '30px',
              mb: 2,
            }}
          />
          <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>
            © 2025 K2 Energy
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default AboutUs; 