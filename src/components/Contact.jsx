import { Box, Typography, Container, TextField, MenuItem, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import k2Logo from '../assets/k2_logo.png';

function Contact() {
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
      </Box>

      {/* Contact Form Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* 标题部分 - 占满宽度 */}
        <Typography variant="h2" sx={{ 
          fontSize: '48px', 
          fontWeight: 600, 
          mb: 2,
          '& span': {
            color: '#39FF14'
          }
        }}>
          Get in <span>Touch</span>
        </Typography>
        <Typography sx={{ mb: 6, color: 'rgba(255,255,255,0.8)' }}>
          Contact us for any inquiries about our products or services. We're here to help you find the perfect energy solution.
        </Typography>

        {/* 表单和地图的容器 */}
        <Box sx={{ display: 'flex', gap: 4 }}>
          {/* 左侧表单 */}
          <Box sx={{ 
            flex: 1, 
            display: 'flex',
            flexDirection: 'column',
            height: '500px'
          }}>
            <Box 
              component="form" 
              sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 3,
                height: '100%'
              }}
            >
              <TextField
                required
                label="Name"
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': {
                      borderColor: 'rgba(255,255,255,0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255,255,255,0.5)',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255,255,255,0.7)',
                  },
                }}
              />
              <TextField
                required
                label="Email"
                type="email"
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': {
                      borderColor: 'rgba(255,255,255,0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255,255,255,0.5)',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255,255,255,0.7)',
                  },
                }}
              />
              <TextField
                required
                label="Phone number"
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': {
                      borderColor: 'rgba(255,255,255,0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255,255,255,0.5)',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255,255,255,0.7)',
                  },
                }}
              />
              <TextField
                multiline
                rows={4}
                label="Message"
                variant="outlined"
                sx={{
                  flex: 1,
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    height: '100%',
                    '& fieldset': {
                      borderColor: 'rgba(255,255,255,0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255,255,255,0.5)',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255,255,255,0.7)',
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#39FF14',
                  py: 2,
                  color: '#0B3524',
                  fontWeight: 600,
                  '&:hover': {
                    bgcolor: '#32D912',
                  },
                }}
              >
                SEND
              </Button>
            </Box>
          </Box>

          {/* 右侧地图 */}
          <Box sx={{ flex: 1, position: 'relative', minHeight: '500px' }}>
            <Paper
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                overflow: 'hidden',
                borderRadius: 2,
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.8300827694274!2d145.18752687677566!3d-37.81502613417297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad63c0c2e2cc5e9%3A0x971c0f42ce3e5c6!2s12A%20Redland%20Dr%2C%20Mitcham%20VIC%203132%2C%20Australia!5e0!3m2!1sen!2sus!4v1709697436044!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Paper>
          </Box>
        </Box>

        {/* 联系信息 */}
        <Box sx={{ mt: 8, display: 'flex', gap: 8, justifyContent: 'center' }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography sx={{ color: 'rgba(255,255,255,0.6)', mb: 1 }}>
              ADDRESS
            </Typography>
            <Typography>
              12A Redland Drive, Mitcham,
            </Typography>
            <Typography>
              Victoria 3132, Australia
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography sx={{ color: 'rgba(255,255,255,0.6)', mb: 1 }}>
              EMAIL
            </Typography>
            <Typography>
              info@k2energysolutions.com.au
            </Typography>
            <Typography>
    sales@k2energysolutions.com.au
  </Typography>
          </Box>
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

export default Contact; 