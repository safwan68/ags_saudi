import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import heroBannerFive from "../assets/hero-banner/hero-banner-5.png";

export default function Hero() {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1621922688758-359fc864071e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "EQUIPMENT RENTAL",
      title: "Reliable Equipment for Every Project",
      description:
        "Access a wide range of well-maintained heavy machinery and tools available for rent to keep your projects moving smoothly.",
      cta: "Explore Rentals",
      link: "/equipment-rental",
    },
    {
      image:
        "https://images.unsplash.com/photo-1589559375424-c3fa757c3094?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "MANPOWER SOLUTIONS",
      title: "Skilled Workforce On Demand",
      description:
        "We provide qualified and experienced manpower to meet your project requirements, ensuring efficiency and reliability.",
      cta: "Hire Now",
      link: "/manpower",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1742457785740-8512d5670d3c?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "TRADING SERVICES",
      title: "Trusted Trading Partner",
      description:
        "Supplying high-quality materials, equipment, and industrial products to support businesses across diverse sectors.",
      cta: "Start Trading",
      link: "/trading",
    },
    {
      image:
        "https://images.unsplash.com/photo-1631767697421-8586f50b42e5?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "CIVIL WORKS",
      title: "Building with Precision",
      description:
        "From construction to infrastructure development, our civil works solutions deliver quality and durability for every project.",
      cta: "View Projects",
      link: "/civil-works",
    },
    {
      image: heroBannerFive,
      tag: "COMPLETE SOLUTIONS",
      title: "Your Trusted Business Partner",
      description:
        "We combine equipment rental, manpower, trading, and civil works expertise to provide end-to-end solutions for your needs.",
      cta: "Contact Us",
      link: "/contact",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Box sx={{ position: "relative", width: "100%", height: "60vh" }}>
      {/* Background Image */}
      <Box
        component="img"
        src={slides[currentIndex].image}
        alt={slides[currentIndex].title}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      />

      {/* Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.1) 100%)",
          zIndex: 1,
        }}
      />

      {/* Text Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          color: "#fff",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          pl: { xs: 2, md: 10 },
          pr: { xs: 2, md: 10 },
          maxWidth: "800px",
        }}
      >
        <Typography
          variant="overline"
          sx={{
            fontWeight: "bold",
            letterSpacing: "1px",
            mb: 1,
            color: "#FFD700",
          }}
        >
          {slides[currentIndex].tag}
        </Typography>

        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 2,
            lineHeight: 1.2,
          }}
        >
          {slides[currentIndex].title}
        </Typography>

        <Typography variant="h6" sx={{ mb: 3, fontWeight: 400 }}>
          {slides[currentIndex].description}
        </Typography>

        <Button
          variant="contained"
          href={slides[currentIndex].link}
          sx={{
            width: "fit-content",
            backgroundColor: "#FFD700",
            color: "#000",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#FFC107",
            },
          }}
        >
          {slides[currentIndex].cta} →
        </Button>
      </Box>

      {/* Navigation Buttons */}
      <Box
        sx={{
          position: "absolute",
          bottom: 15,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 2,
          zIndex: 3,
        }}
      >
        {slides.map((_, index) => (
          <Box
            key={index}
            onClick={() => goToSlide(index)}
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor:
                index === currentIndex ? "#FFD700" : "rgba(255,255,255,0.5)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#FFD700",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
