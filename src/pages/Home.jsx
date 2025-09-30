import React from "react";
import Hero from "../components/Hero";
// import ServiceSlider from "../components/ServiceSlider";
// import ClientLogos from "../components/ClientLogos";
// import Reviews from "../components/Reviews";
import AboutAndNews from "../components/AboutAndNews";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSectionHomeScreen";
import Services from "../components/ServiceCard";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <AboutAndNews />
      <Services />
    </>
  );
}
