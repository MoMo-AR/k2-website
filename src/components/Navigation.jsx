import { Box, Typography, IconButton, Drawer, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navigation() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Products', path: '/product' },
    { text: 'About us', path: '/about' },
    { text: 'Contact', path: '/contact' },
  ];

  // 移动端菜单
  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem 
          key={item.text}
          onClick={() => {
            navigate(item.path);
            handleDrawerToggle();
          }}
          sx={{ 
            color: 'white',
            cursor: 'pointer',
            '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
          }}
        >
          <Typography>{item.text}</Typography>
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      {/* 桌面端导航 */}
      <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
        {menuItems.map((item) => (
          <Typography
            key={item.text}
            sx={{
              color: 'white',
              cursor: 'pointer',
              '&:hover': { opacity: 0.8 },
            }}
            onClick={() => navigate(item.path)}
          >
            {item.text}
          </Typography>
        ))}
      </Box>

      {/* 移动端菜单按钮 */}
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ display: { md: 'none' } }}
      >
        <MenuIcon />
      </IconButton>

      {/* 移动端抽屉菜单 */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 240,
            bgcolor: '#0B3524'
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Navigation; 