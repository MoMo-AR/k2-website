import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007FFF',
      light: '#3399FF',
      dark: '#0066CC',
    },
    background: {
      default: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Cambay, sans-serif',
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 24,
        },
      },
    },
  },
});

export default theme;