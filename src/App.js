import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/Product";
// import Services from './pages/Services';
// import ServiceDetail from './pages/ServiceDetail';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Brochures from './pages/Brochures';
import Header from "./components/Header";
// import Footer from './components/Footer';
// import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppChat";

function App() {
  return (
    <>
      <Header />
      {/* <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}> */}
      <Box sx={{ width: "100%", m: 0, p: 0 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductPage />} />
          {/* <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/brochures" element={<Brochures />} /> */}
        </Routes>
      </Box>
      <WhatsAppFloat />
      <Footer />
    </>
  );
}

export default App;
