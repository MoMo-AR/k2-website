import { Box, Typography, Container, Grid } from '@mui/material';
import k2Logo from '../assets/k2_logo.png';
import battery6ah from '../assets/12v-6ah.png';
import battery10ah from '../assets/12v-10ah.png';
import battery20ah from '../assets/12v-20ah.png';
import battery100ah from '../assets/12v-100ah.png';
import ebox from '../assets/e-box.png';
import battery123a from '../assets/123a.png';
import surfHero from '../assets/surf-hero.jpg';  // 取消注释并修改扩展名为 .jpg
// import surfboard from '../assets/surfboard.png';
import surfer from '../assets/surfer.png';
// import seoIcon from '../assets/seo-icon.png';
// import ecoIcon from '../assets/eco-icon.png';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import { useState } from 'react';
// import heroBackground from '../assets/hero-bg.jpg';  // 或者你的背景图片路径

function ProductPage() {
  const navigate = useNavigate();

  // 添加图片加载状态
  const [imagesLoaded, setImagesLoaded] = useState({});

  const handleImageLoad = (imageId) => {
    setImagesLoaded(prev => ({
      ...prev,
      [imageId]: true
    }));
  };

  // 修改产品图片显示组件
  const ProductImage = ({ src, alt, id }) => (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        opacity: imagesLoaded[id] ? 1 : 0,
        transition: 'opacity 0.3s',
        display: 'block',
        margin: 'auto'
      }}
      onLoad={() => handleImageLoad(id)}
      onError={(e) => {
        console.error(`Failed to load image: ${src}`);
        e.target.src = 'https://via.placeholder.com/300x200?text=Product+Image';
      }}
    />
  );

  return (
    <Box sx={{ bgcolor: '#0B3524', color: 'white' }}>
      {/* Hero Section */}
      <Box
        sx={{
          height: '100vh',
          position: 'relative',
          bgcolor: '#0B3524',
          display: 'flex',
          flexDirection: 'column',
          '&:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${surfHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3,
            zIndex: 1,
            pointerEvents: 'none',
          }
        }}
      >
        {/* Header */}
        <Box
          sx={{
            padding: '32px 80px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative',
            zIndex: 2,
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
            padding: { xs: '20px', md: '0 80px' },
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Box sx={{ maxWidth: '800px' }}>
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: '28px', sm: '36px', md: '64px' },  // 响应式字体
                fontWeight: 600, 
                mb: 2,
                lineHeight: { xs: 1.2, md: 1.4 }  // 响应式行高
              }}
            >
              More Than Just Energy,
            </Typography>
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '24px', sm: '32px', md: '48px' },  // 响应式字体
                fontWeight: 500,
                lineHeight: { xs: 1.2, md: 1.4 }  // 响应式行高
              }}
            >
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
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: '100%',
                height: { xs: '300px', md: '400px' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <ProductImage
                src={battery100ah}  // 临时使用已有图片
                alt="100Ah Battery"
                id="battery100ah"
              />
            </Box>
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
                <ProductImage
                  src={battery6ah}
                  alt="Battery 6AH"
                  id="battery6ah"
                />
              </Box>
              <Typography variant="h4" sx={{ mb: 2 }}>12V 6Ah LFP</Typography>
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
                <ProductImage
                  src={battery10ah}
                  alt="Battery 10AH"
                  id="battery10ah"
                />
              </Box>
              <Typography variant="h4" sx={{ mb: 2 }}>
              12V 10Ah LFP</Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>
              The K2 Battery 12V 10Ah is perfect for compact medical, security, and appliance applications that demand a bit more power. With enhanced capacity over the 6Ah version, it offers reliable deep discharge, quick recharge, and a long cycle life.
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
                <ProductImage
                  src={battery20ah}
                  alt="Battery 20AH"
                  id="battery20ah"
                />
              </Box>
              <Typography variant="h4" sx={{ mb: 2 }}>12V 20Ah LFP</Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>
              The K2 Battery 12V 20Ah is designed for applications that require a larger capacity while maintaining a compact size. Ideal for medical, security, and appliance products, this battery offers extended run times with deep discharge, fast recharge, and long cycle life. 
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
                <ProductImage
                  src={battery123a}
                  alt="Battery 123A"
                  id="battery123a"
                />
              </Box>
              <Typography variant="h4" sx={{ mb: 2 }}>3.2V 550mAh LFP</Typography>
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
            mt: 2,  // 从 mt: 8 改为 mt: 2，减少与上方的间距
            width: '100%'
          }}
        >
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            textAlign: 'center',
            p: 4,
            maxWidth: '600px'
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
              <ProductImage
                src={ebox}  // 使用新的电池图片
                alt="pytes ebox"
                id="pytes ebox"
              />
            </Box>
            <Typography variant="h4" sx={{ mb: 2 }}>PYTES E-BOX-48100R</Typography>
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
            © 2025 K2 Energy
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default ProductPage; 