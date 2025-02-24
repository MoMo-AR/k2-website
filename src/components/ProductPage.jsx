import { Box, Typography, Container, Grid } from '@mui/material';
import k2Logo from '../assets/k2_logo.png';
import surfHero from '../assets/surf-hero.jpg';
import surfboard from '../assets/surfboard.png';
import surfer from '../assets/surfer.png';
import battery6ah from '../assets/12v-6ah.png';
import battery10ah from '../assets/12v-10ah.png';
import battery20ah from '../assets/12v-20ah.png';
import ebox from '../assets/e-box.png';
import battery123a from '../assets/123a.png';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';

function ProductPage() {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: '#0B3524', color: 'white' }}>
      {/* Hero Section */}
      <Box
        sx={{
          height: '100vh',
          position: 'relative',
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${surfHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Header */}
        <Box
          sx={{
            padding: '32px 80px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
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

        {/* Hero Content */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            padding: '0 80px',
          }}
        >
          <Box sx={{ maxWidth: '800px' }}>
            <Typography variant="h1" sx={{ fontSize: '64px', fontWeight: 600, mb: 2 }}>
              More Than Just Energy,
            </Typography>
            <Typography variant="h2" sx={{ fontSize: '48px', fontWeight: 500 }}>
              a Bold Way to Power Your Journey with K2.
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* Who we are Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 12 } }}>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: { xs: 'center', md: 'flex-start' },  // 移动端居中
              textAlign: { xs: 'center', md: 'left' }  // 移动端文字居中
            }}>
              <Typography variant="h3" sx={{ fontSize: '32px', fontWeight: 600, mb: 4 }}>
                12V 100Ah LiFePO4 Battery
              </Typography>
              <Typography sx={{ mb: 3, lineHeight: 1.8, color: 'white' }}>
                The 12V 100Ah LiFePO4 battery is designed for RVs, recreational solar systems, and powering DC or AC inverters. With a capacity of 1280Wh and the safety of LiFePO4 technology, it's the ideal choice for campers and 4X4 enthusiasts.
              </Typography>
              <Typography sx={{ mb: 3, lineHeight: 1.8, color: 'white' }}>
                This battery is also perfect for upgrading from lead-acid or older lithium-ion batteries, offering a significant boost in capacity and longevity (over 5000 cycles in optimal conditions). With its long lifespan, it can quickly pay for itself.
              </Typography>
              <Typography sx={{ lineHeight: 1.8, color: 'white' }}>
                For more details, contact us or visit our Support page for technical specifications.
              </Typography>
            </Box>
            {/* <Box
              component="img"
              src={surfboard}
              alt="Battery"
              sx={{
                flex: 1,
                maxWidth: '500px',
                borderRadius: '8px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
              }}
            /> */}
          </Grid>
        </Grid>
      </Container>

      {/* Our concept Section */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Box sx={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <Box
            component="img"
            src={surfer}
            alt="Surfer"
            sx={{
              flex: 1,
              maxWidth: '500px',
              borderRadius: '8px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            }}
          />
          <Box sx={{ flex: 1 }}>
            <Typography variant="h3" sx={{ fontSize: '32px', fontWeight: 600, mb: 4 }}>
            ZION 1500 Power Station
            </Typography>
            <Typography sx={{ mb: 3, lineHeight: 1.8, color: 'white' }}>
            The K2 Battery ZION 1500 features a bi-directional AC inverter and DC-DC converters, allowing for solar and AC recharging while offering pass-through power functionality. 
            </Typography>
            <Typography sx={{ mb: 3, lineHeight: 1.8, color: 'white' }}>
             Capable of powering up to 7 devices simultaneously in a sleek, compact design, the ZION 1500 fits perfectly in any environment.
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* Icons Section */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Grid container spacing={8}>
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              textAlign: 'center',
              p: 4,
              mb: 8,
            }}>
              <Box
                sx={{
                  width: '300px',
                  height: '300px',
                  bgcolor: 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 3,
                }}
              >
                <Box
                  component="img"
                  src={battery6ah}
                  alt="12v 6ah battery"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              </Box>
              <Typography variant="h4" sx={{ mb: 2 }}>12V 6Ah LIFEPO4</Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>
              The K2 Battery 12V 6Ah is perfect for specialist medical, security, and appliance products that require a compact 12V battery with excellent capacity. This pack offers deep discharge, quick recharge, and a long cycle life.
              </Typography>
            </Box>

            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              textAlign: 'center',
              p: 4,
            }}>
              <Box
                sx={{
                  width: '300px',
                  height: '300px',
                  bgcolor: 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 3,
                }}
              >
                <Box
                  component="img"
                  src={battery10ah}
                  alt="12v 10ah battery"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              </Box>
              <Typography variant="h4" sx={{ mb: 2 }}>
              12V 10Ah LFP</Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>
              The K2 Battery 12V 10Ah is tailored for specialist medical, security, and appliance applications where a slightly higher capacity is needed. Compared to the 6Ah version, this pack provides more power for longer durations while maintaining deep discharge, rapid recharge, and an extended cycle life. It’s an excellent choice for users requiring more energy in a compact 12V battery.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              textAlign: 'center',
              p: 4,
              mb: 8,
            }}>
              <Box
                sx={{
                  width: '300px',
                  height: '300px',
                  bgcolor: 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 3,
                }}
              >
                <Box
                  component="img"
                  src={battery20ah}
                  alt="12v 20ah battery"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              </Box>
              <Typography variant="h4" sx={{ mb: 2 }}>12V 20Ah LFP</Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>
              The K2 Battery 12V 20Ah is designed for applications that require a larger capacity while maintaining a compact size. Ideal for medical, security, and appliance products, this battery offers extended run times with deep discharge, fast recharge, and long cycle life. It’s the perfect solution for devices that need more power and endurance in a reliable, small-format 12V battery.
              </Typography>
            </Box>

            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              textAlign: 'center',
              p: 4,
            }}>
              <Box
                sx={{
                  width: '300px',
                  height: '300px',
                  bgcolor: 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 3,
                }}
              >
                <Box
                  component="img"
                  src={battery123a}
                  alt="123a battery"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              </Box>
              <Typography variant="h4" sx={{ mb: 2 }}>
              3.2V 550mAh LFP</Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>
              This rechargeable 123A size cylindrical LFP battery (DL: 16x34mm) is ideal for a wide range of consumer electronics applications. It offers deep discharge, fast recharge, and an extended cycle life.
              </Typography>
            </Box>
          </Grid>
        </Grid>

         {/* 新增的第五个图片模块 - 居中显示 */}
         <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 4,  // 与上方图片的间距
            width: '100%'
          }}
        >
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            textAlign: 'center',
            p: 4,
            maxWidth: '600px'  // 控制宽度以保持与其他图片一致
          }}>
            <Box
              sx={{
                width: '300px',
                height: '300px',
                bgcolor: 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 3,
              }}
            >
              <Box
                component="img"
                src={ebox}  // 使用新的电池图片
                alt="pytes ebox"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </Box>
            <Typography variant="h4" sx={{ mb: 2 }}>Pytes E-Box</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>
            The E-BOX-48100R is a compact, high-performance lithium iron phosphate battery for deep cycle server racks. With 5.12kWh capacity, it offers expandable storage and features a dual-protection Battery Management System (BMS) for optimal performance. Easy to install and cost-effective, the E-Box is ideal for home and small commercial applications.
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* Footer */}
      <Box
        sx={{
          bgcolor: 'rgba(0,0,0,0.2)',
          py: 4,
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
            © 2025 K2 Energy. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default ProductPage; 