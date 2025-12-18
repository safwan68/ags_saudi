import React from "react";
import Hero from "../components/HomeComponents/Hero";
import AboutSection from "../components/HomeComponents/AboutSectionHomeScreen";
import Services from "../components/HomeComponents/ServiceCard";
import Clientele from "../components/HomeComponents/Clientele";
import SectionFour from "../components/HomeComponents/SectionFour";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Services />
      <SectionFour />
      <Clientele />
    </>
  );
}
