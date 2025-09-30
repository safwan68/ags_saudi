import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const servicesData = [
  {
    title: "Service One",
    description: "This is a short description for service one...",
    image:
      "https://plus.unsplash.com/premium_photo-1673728788984-6d6540186c95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    link: "/services/service-one",
  },
  {
    title: "Service Two",
    description: "This is a short description for service two...",
    image:
      "https://plus.unsplash.com/premium_photo-1744085660376-4e8f8ddb38d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
    link: "/services/service-two",
  },
  {
    title: "Service Three",
    description: "This is a short description for service three...",
    image:
      "https://plus.unsplash.com/premium_photo-1744142824197-fa24720db4b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMxfHx8ZW58MHx8fHx8",
    link: "/services/service-three",
  },
  {
    title: "Service Four",
    description: "This is a short description for service four...",
    image:
      "https://images.unsplash.com/photo-1660543228631-3f2341090afe?w=500&auto=format&fit=crop&q=60",
    link: "/services/service-four",
  },
  {
    title: "Service Five",
    description: "This is a short description for service five...",
    image:
      "https://plus.unsplash.com/premium_photo-1661921393343-343742700dd3?w=500&auto=format&fit=crop&q=60",
    link: "/services/service-five",
  },
  {
    title: "Service Six",
    description: "This is a short description for service six...",
    image:
      "https://images.unsplash.com/photo-1726111262949-e22631a8c376?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY2fHx8ZW58MHx8fHx8",
    link: "/services/service-six",
  },
];

const NextArrow = (props) => {
  const isDisabled =
    props.currentSlide >= props.slideCount - props.slidesToShow;
  return (
    <IconButton
      onClick={props.onClick}
      disabled={isDisabled}
      sx={{
        position: "absolute",
        top: "50%",
        right: 0,
        transform: "translateY(-50%)",
        bgcolor: "#1976d2",
        color: "#fff",
        opacity: isDisabled ? 0.4 : 1,
        pointerEvents: isDisabled ? "none" : "auto",
        "&:hover": { bgcolor: "#1565c0" },
        zIndex: 10,
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        width: 30,
        height: 30,
      }}
    >
      <ArrowForwardIos fontSize="small" />
    </IconButton>
  );
};

const PrevArrow = (props) => {
  const isDisabled = props.currentSlide === 0;
  return (
    <IconButton
      onClick={props.onClick}
      disabled={isDisabled}
      sx={{
        position: "absolute",
        top: "50%",
        left: 0,
        transform: "translateY(-50%)",
        bgcolor: "#1976d2",
        color: "#fff",
        opacity: isDisabled ? 0.4 : 1,
        pointerEvents: isDisabled ? "none" : "auto",
        "&:hover": { bgcolor: "#1565c0" },
        zIndex: 10,
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        width: 30,
        height: 30,
      }}
    >
      <ArrowBackIos fontSize="small" />
    </IconButton>
  );
};
export default function Services() {
  const [visibleSlides, setVisibleSlides] = useState(3);

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 600) setVisibleSlides(1);
      else if (window.innerWidth < 1024) setVisibleSlides(2);
      else setVisibleSlides(3);
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: visibleSlides,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: false,
    afterChange: () => {},
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    borderRadius: 4,
    boxShadow: "0 8px 32px rgba(33,150,243,0.10)",
    background: "rgba(255,255,255,0.95)",
    border: "1px solid #e3eafc",
    transition: "transform 0.35s ease, box-shadow 0.35s ease",
    "&:hover": {
      transform: "translateY(-8px) scale(1.02)",
      boxShadow: "0 16px 40px rgba(33,150,243,0.18)",
    },
    minHeight: 420,
    marginTop: 2,
  };

  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 1, sm: 4 },
        background: "linear-gradient(135deg, #e3f2fd 0%, #f5f7fa 100%)",
      }}
    >
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 800,
          letterSpacing: 1,
          color: "#1976d2",
          mb: 6,
          margin: 0,
          fontFamily: "'Playfair Display', serif",
          textShadow: "2px 2px 5px rgba(0,0,0,0.15)",
        }}
      >
        Our Services
      </Typography>

      <Box
        sx={{
          position: "relative",
          maxWidth: "1400px",
          mx: "auto",
          overflow: "hidden",
          px: { xs: 0, sm: 2 }, // Padding for arrows on small screens
        }}
      >
        <Slider
          {...settings}
          style={{
            // Add gap between slides using padding and negative margin
            padding: "0 8px",
          }}
        >
          {servicesData.map((service, idx) => (
            <Box
              key={idx}
              sx={{
                px: 2, // This is the gap between cards
                boxSizing: "border-box",
              }}
            >
              <Card sx={cardStyle} elevation={0}>
                <CardMedia
                  component="img"
                  sx={{
                    height: 200,
                    objectFit: "cover",
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                  }}
                  image={service.image}
                  alt={service.title}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 700, color: "#1976d2" }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 3, minHeight: 40 }}
                  >
                    {service.description}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      background:
                        "linear-gradient(90deg, #1976d2 0%, #21cbf3 100%)",
                      color: "#fff",
                      fontWeight: 700,
                      borderRadius: 2,
                      px: 3,
                      py: 1,
                      boxShadow: "0 2px 8px rgba(33,150,243,0.10)",
                      textTransform: "none",
                      fontSize: "1rem",
                      "&:hover": {
                        background:
                          "linear-gradient(90deg, #1565c0 0%, #1ec8f7 100%)",
                      },
                    }}
                    href={service.link}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
