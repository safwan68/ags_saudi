import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/Product";
import AboutUs from "./pages/AboutUs";
// import Services from './pages/Services';
// import ServiceDetail from './pages/ServiceDetail';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Brochures from './pages/Brochures';
// import Footer from './components/Footer';
// import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TradingAndSupply from "./pages/Services/TradingSupply";
import Header from "./components/CommonCompoents/Header";
import WhatsAppFloat from "./components/CommonCompoents/WhatsAppChat";
import Footer from "./components/CommonCompoents/Footer";
import HeavyEquipment from "./pages/Services/HeavyEquipment";
import ContactUs from "./pages/ContactUs";
import ManpowerSupply from "./pages/Services/ManpowerSupply";
import CivilWorks from "./pages/Services/CivilWorks";
import Scaffolding from "./pages/Services/Scaffolding";
import FencingWorks from "./pages/Services/Fencing";
import Transport from "./pages/Services/Transport";

function App() {
  return (
    <>
      <Header />
      {/* <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}> */}
      <Box sx={{ width: "100%", m: 0, p: 0 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />

          <Route
            path="/services/trading-supply"
            element={<TradingAndSupply />}
          />
          <Route
            path="/services/heavy-equipment-rental"
            element={<HeavyEquipment />}
          />
          <Route path="/services/manpower" element={<ManpowerSupply />} />
          <Route path="/services/civil-works" element={<CivilWorks />} />
          <Route path="/services/scaffolding" element={<Scaffolding />} />
          <Route path="/services/fencing-work" element={<FencingWorks />} />
          <Route path="/services/transport" element={<Transport />} />
        </Routes>
      </Box>
      <WhatsAppFloat />
      <Footer />
    </>
  );
}

export default App;
