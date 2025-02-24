import { Box, Typography } from '@mui/material';
import content1 from '../assets/content-1.png';
import content2 from '../assets/content-2.png';
import content3 from '../assets/content-3.png';
import bgHero from '../assets/BG Hero.png';
import mountains from '../assets/mountains.png';
import human from '../assets/human.png';
import { useNavigate } from 'react-router-dom';

// 定义统一的渐变效果
const commonGradient = 'linear-gradient(180deg, rgba(11, 53, 36, 0.1) 0%, rgba(11, 53, 36, 0.4) 100%)';

function Content() {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate('/product');
  };

  return (
    <Box
      sx={{
        color: 'white',
        mt: '-100vh',
        position: 'relative',
        width: '100%',
        overflowX: 'hidden',
        overflowY: 'hidden',
        pt: '100vh',
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      {/* 背景图片层 */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          zIndex: 0,
          maxWidth: '100%',
          overflow: 'hidden',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(180deg, rgba(11, 53, 36, 0), rgba(11, 53, 36, 0.8) 100%)',
            pointerEvents: 'none',
            zIndex: 3,
          }
        }}
      >
        {/* 天空背景 */}
        <Box
          component="img"
          src={bgHero}
          alt="Background"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />

        {/* 山脉 */}
        <Box
          component="img"
          src={mountains}
          alt="Mountains"
          sx={{
            position: 'absolute',
            top: '60vh',
            left: 0,
            width: '100%',
            height: 'auto',
            filter: 'drop-shadow(0 -10px 10px rgba(11, 53, 36, 0.5))',
          }}
        />

        {/* 人物 */}
        <Box
          component="img"
          src={human}
          alt="Human"
          sx={{
            position: 'absolute',
            top: '70vh',
            left: 0,
            width: '100%',
            height: 'auto',
            filter: 'drop-shadow(0 -15px 15px rgba(11, 53, 36, 0.6))',
          }}
        />
      </Box>

      {/* 深绿色背景层 - 从内容部分开始 */}
      <Box
        sx={{
          position: 'absolute',
          top: '100vh',
          left: 0,
          width: '100%',
          height: '100%',
          bgcolor: '#0B3524',
          zIndex: 0,
          maxWidth: '100%',
          overflow: 'hidden',
        }}
      />

      {/* 内容块 */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto',
          padding: '0 80px',
          display: 'flex',
          alignItems: 'center',
          gap: '100px',
          mb: '200px',
          pt: '100px',
        }}
      >
        {/* 第一个内容块 */}
        <Box sx={{ flex: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Typography
              sx={{
                color: '#FBD784',
                fontSize: '180px',
                fontWeight: 700,
                opacity: 0.1,
                position: 'absolute',
                left: 0,
                transform: 'translateX(-50%)',
              }}
            >
              01
            </Typography>
          </Box>
          <Typography
            sx={{
              color: '#FBD784',
              fontSize: '14px',
              letterSpacing: 4,
              mb: 2,
              display: 'flex',
              alignItems: 'center',
              '&:before': {
                content: '""',
                width: '50px',
                height: '2px',
                bgcolor: '#FBD784',
                mr: 3,
              }
            }}
          >
            20 Years of Power
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '28px', md: '48px' },
              fontWeight: 600,
              mb: 2,
            }}
          >
            Twenty Years of Lithium Excellence
          </Typography>
          <Typography
            sx={{
              color: '#FFFFFF',
              opacity: 0.8,
              fontSize: '16px',
              lineHeight: 1.6,
              mb: 2,
            }}
          >
            With two decades of expertise in lithium battery manufacturing, K2 Energy stands as a leader in innovative energy solutions. Our robust R&D team and comprehensive production resources ensure that every battery meets the highest standards of quality and performance.
          </Typography>
          <Typography
            onClick={handleReadMore}
            sx={{
              color: '#FBD784',
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              '&:hover': { opacity: 0.8 },
            }}
          >
            read more →
          </Typography>
        </Box>
        <Box
          component="img"
          src={content1}
          alt="Hiker level"
          sx={{
            flex: 1,
            maxWidth: '500px',
            borderRadius: '8px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
          }}
        />
      </Box>

      {/* 第二个内容块 */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto',
          padding: '0 80px',
          display: 'flex',
          alignItems: 'center',
          gap: '100px',
          mb: '200px',
          flexDirection: 'row-reverse',
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Typography
              sx={{
                color: '#FBD784',
                fontSize: '180px',
                fontWeight: 700,
                opacity: 0.1,
                position: 'absolute',
                right: 0,
                transform: 'translateX(50%)',
              }}
            >
              02
            </Typography>
          </Box>
          <Typography
            sx={{
              color: '#FBD784',
              fontSize: '14px',
              letterSpacing: 4,
              mb: 2,
              display: 'flex',
              alignItems: 'center',
              '&:before': {
                content: '""',
                width: '50px',
                height: '2px',
                bgcolor: '#FBD784',
                mr: 3,
              }
            }}
          >
            Globally Trusted Energy
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '28px', md: '48px' },
              fontWeight: 600,
              mb: 2,
            }}
          >
            Globally Certified, Globally Trusted
          </Typography>
          <Typography
            sx={{
              color: '#FFFFFF',
              opacity: 0.8,
              fontSize: '16px',
              lineHeight: 1.6,
              mb: 2,
            }}
          >
            K2 Energy is proud to be a US military-certified energy enterprise, a mark of reliability and advanced technology. With clients worldwide and branches in the USA, Philippines, China, and Hong Kong, we are recognized for delivering excellence across borders.
          </Typography>
          <Typography
            onClick={handleReadMore}
            sx={{
              color: '#FBD784',
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              '&:hover': { opacity: 0.8 },
            }}
          >
            read more →
          </Typography>
        </Box>
        <Box
          component="img"
          src={content2}
          alt="Hiking gear"
          sx={{
            flex: 1,
            maxWidth: '500px',
            borderRadius: '8px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
          }}
        />
      </Box>

      {/* 第三个内容块 */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto',
          marginBottom: '0', // 移除底部边距
          padding: '0 80px',
          display: 'flex',
          alignItems: 'center',
          gap: '100px',
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Typography
              sx={{
                color: '#FBD784',
                fontSize: '180px',
                fontWeight: 700,
                opacity: 0.1,
                position: 'absolute',
                left: 0,
                transform: 'translateX(-50%)',
              }}
            >
              03
            </Typography>
          </Box>
          <Typography
            sx={{
              color: '#FBD784',
              fontSize: '14px',
              letterSpacing: 4,
              mb: 2,
              display: 'flex',
              alignItems: 'center',
              '&:before': {
                content: '""',
                width: '50px',
                height: '2px',
                bgcolor: '#FBD784',
                mr: 3,
              }
            }}
          >
            Empowering Adventure
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '28px', md: '48px' },
              fontWeight: 600,
              mb: 2,
            }}
          >
            Empowering Outdoor and Commercial Ventures
          </Typography>
          <Typography
            sx={{
              color: '#FFFFFF',
              opacity: 0.8,
              fontSize: '16px',
              lineHeight: 1.6,
              mb: 2,
            }}
          >
            Committed to safety and reliability, K2 Energy offers a complete range of energy equipment—including batteries, energy storage systems, and solar integrated solutions—for both outdoor adventures and commercial
          </Typography>
          <Typography
            onClick={handleReadMore}
            sx={{
              color: '#FBD784',
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              '&:hover': { opacity: 0.8 },
            }}
          >
            read more →
          </Typography>
        </Box>
        <Box
          component="img"
          src={content3}
          alt="Map and timing"
          sx={{
            flex: 1,
            maxWidth: '500px',
            borderRadius: '8px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
          }}
        />
      </Box>
    </Box>
  );
}

export default Content; 