import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Hero from './components/Hero';
import Content from './components/Content';
import Footer from './components/Footer.jsx';
import ProductPage from './components/ProductPage';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Content />
            <Footer />
          </>
        } />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App; 