import React from "react";
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
import heavyEquipment from "../../assets/Website_Pictures/Crane.png";
import transport from "../../assets/Website_Pictures/Transport.png";

const servicesData = [
  {
    title: "Heavy Equipment Rental",
    description:
      "A modern fleet of well-maintained heavy machinery to support construction & industrial projects. Reliable equipment & timely delivery to keep your operations moving.",
    image: heavyEquipment,
    link: "/services/heavy-equipment-rental",
  },
  {
    title: "Manpower Services",
    description:
      "Skilled and trained personnel for industrial, construction and technical roles, supplied with compliance to safety and competency standards.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop&q=60",
    link: "/services/manpower",
  },
  {
    title: "Trading & Supply",
    description:
      "Comprehensive supply solutions for industrial materials, equipment, and tools. Timely deliveries with reliable logistics and efficient inventory management.",
    image: transport,
    link: "/services/trading-supply",
  },
  {
    title: "Civil Works",
    description:
      "Complete civil construction and maintenance solutions — foundations, masonry, concrete, and infrastructure works delivered safely and on schedule.",
    image:
      "https://images.unsplash.com/photo-1563245377-2d0d96b2f15d?w=1200&auto=format&fit=crop&q=60",
    link: "/services/civil-works",
  },
  {
    title: "Fencing Services",
    description:
      "Durable and secure fencing solutions for industrial and construction sites — installation, maintenance, and access control with reliable performance.",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&auto=format&fit=crop&q=60",
    link: "/services/fencing",
  },
  {
    title: "Scaffolding Services",
    description:
      "Safe and certified scaffolding solutions — erection, dismantling, and access support for industrial, construction, and maintenance projects.",
    image:
      "https://images.unsplash.com/photo-1581092327765-0a3f3b1f2d1e?w=1200&auto=format&fit=crop&q=60",
    link: "/services/scaffolding",
  },
];

/* Custom arrows compatible with react-slick props */
const NextArrow = (props) => {
  const { onClick, currentSlide, slideCount } = props;
  const disabled = currentSlide >= slideCount - props.slidesToShow;
  return (
    <IconButton
      onClick={onClick}
      disabled={disabled}
      aria-label="next"
      sx={{
        position: "absolute",
        top: "50%",
        right: { xs: 8, md: 12 },
        transform: "translateY(-50%)",
        zIndex: 20,
        bgcolor: "transparent",
        "&:hover": { bgcolor: "primary.main" },
        boxShadow: 2,
        width: 36,
        height: 36,
        opacity: disabled ? 0.4 : 1,
      }}
    >
      <ArrowForwardIos fontSize="small" />
    </IconButton>
  );
};

const PrevArrow = (props) => {
  const { onClick, currentSlide } = props;
  const disabled = currentSlide === 0;
  return (
    <IconButton
      onClick={onClick}
      disabled={disabled}
      aria-label="prev"
      sx={{
        position: "absolute",
        top: "50%",
        left: { xs: 8, md: 12 },
        transform: "translateY(-50%)",
        zIndex: 20,
        bgcolor: "transparent",
        "&:hover": { bgcolor: "primary.main" },
        boxShadow: 2,
        width: 36,
        height: 36,
        opacity: disabled ? 0.4 : 1,
      }}
    >
      <ArrowBackIos fontSize="small" />
    </IconButton>
  );
};

export default function Services() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 700, settings: { slidesToShow: 1 } },
    ],
  };

  const cardSx = {
    display: "flex",
    flexDirection: { xs: "row", sm: "column" }, // row on mobile, column on small+ screens
    borderRadius: 2,
    boxShadow: 3,
    backgroundColor: "background.paper",
    minHeight: { xs: "auto", sm: 450 }, // auto height for mobile
    width: { xs: "100%", sm: "auto" }, // full width on mobile
    transition: "transform 0.35s ease, box-shadow 0.35s ease",
    "&:hover": { transform: "translateY(-8px)", boxShadow: 6 },
    my: 3,
  };

  const buttonSx = {
    mt: 2, // pushes button to bottom of CardContent
    textTransform: "none",
    fontWeight: 700,
    borderRadius: 1,
    px: 3,
    py: 1,
  };

  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 6 }, background: "#e2e1dbff" }}>
      <Typography
        variant="subtitle1"
        sx={{ color: "#031749ff", mb: 3, fontWeight: 400 }}
      >
        What We do
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 600,
          fontSize: { xs: "1.5rem", md: "2rem" },
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
          mb: 2,
          color: "#031749ff",
        }}
      >
        We deliver comprehensive industrial solutions with consistency, quality,
        and a strong commitment to excellence.
      </Typography>
      <Typography
        sx={{
          mb: 4,
          color: "#031749ff  ",
          fontWeight: 400,
          fontSize: "1.1rem",
        }}
      >
        Trusted by our clients as a leading provider of Comprehensive Industrial
        Solutions across Saudi Arabia’s vital industries.
      </Typography>

      <Box sx={{ position: "relative", maxWidth: 1400, mx: "auto" }}>
        <Slider {...settings}>
          {servicesData.map((s) => (
            <Box key={s.title} sx={{ px: 2, boxSizing: "border-box" }}>
              <Card sx={cardSx} elevation={0}>
                <CardMedia
                  component="img"
                  image={s.image}
                  alt={s.title}
                  sx={{
                    height: 350,
                    objectFit: "cover",
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                  }}
                />

                {/* make CardContent a flex column so button can sit at bottom */}
                <CardContent
                  sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, color: "primary.main" }}
                  >
                    {s.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1, minHeight: 56 }}
                  >
                    {s.description}
                  </Typography>

                  <Button href={s.link} variant="contained" sx={buttonSx}>
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
