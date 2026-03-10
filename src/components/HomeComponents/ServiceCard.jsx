import React, { useEffect, useMemo, useState } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heavyEquipment from "../../assets/Website_Pictures/Crane.png";
import transport from "../../assets/Website_Pictures/Transport.png";
import tradingSupply from "../../assets/Website_Pictures/trading-supply.png";
import civilWorks from "../../assets/Website_Pictures/civik-works.jpg";
import constructionWorker from "../../assets/Website_Pictures/construction-worker.jpeg";
import fencingWork from "../../assets/Website_Pictures/fencing-work.png";
import scaffolding from "../../assets/Website_Pictures/scaffolding.jpg";

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
    image: constructionWorker,
    link: "/services/manpower",
  },
  {
    title: "Transport Services",
    description:
      "Reliable and efficient transport services for industrial and construction operations, ensuring timely delivery with safety compliance norms.",
    image: transport,
    link: "/services/transport",
  },
  {
    title: "Trading & Supply",
    description:
      "Comprehensive supply solutions for industrial materials, equipment, and tools. Timely deliveries with reliable logistics and efficient inventory management.",
    image: tradingSupply,
    link: "/services/trading-supply",
  },
  {
    title: "Civil Works",
    description:
      "Complete civil construction and maintenance solutions — foundations, masonry, concrete, and infrastructure works delivered safely and on schedule.",
    image: civilWorks,
    link: "/services/civil-works",
  },
  {
    title: "Fencing Services",
    description:
      "Durable and secure fencing solutions for industrial and construction sites — installation, maintenance, and access control with reliable performance.",
    image: fencingWork,
    link: "/services/fencing-work",
  },
  {
    title: "Scaffolding Services",
    description:
      "Safe and certified scaffolding solutions — erection, dismantling, and access support for industrial, construction, and maintenance projects.",
    image: scaffolding,
    link: "/services/scaffolding",
  },
];

export default function Services() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const itemsToShow = isMobile ? 1 : 3;

  const [index, setIndex] = useState(0);
  const [containerEl, setContainerEl] = useState(null);
  const [containerWidth, setContainerWidth] = useState(1);

  const GAP = 16;
  const itemWidth = Math.max(0, containerWidth / itemsToShow - GAP);
  const maxIndex = Math.max(0, servicesData.length - itemsToShow);

  /* Measure width */
  const viewportRef = (el) => {
    setContainerEl(el);
    if (el?.clientWidth) setContainerWidth(el.clientWidth);
  };

  useEffect(() => {
    const onResize = () => {
      if (containerEl?.clientWidth) {
        setContainerWidth(containerEl.clientWidth);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [containerEl]);

  useEffect(() => {
    setIndex((cur) => Math.min(cur, maxIndex));
  }, [maxIndex, itemsToShow]);

  const handlePrev = () => setIndex((i) => Math.max(0, i - 1));
  const handleNext = () => setIndex((i) => Math.min(maxIndex, i + 1));

  const transform = useMemo(
    () => `translateX(-${index * (itemWidth + GAP)}px)`,
    [index, itemWidth],
  );

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1200,
        mx: "auto",
        position: "relative",
        overflow: "hidden",
        mt: 1,
        mb: 2.5,
      }}
    >
      <Box p={2}>
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
          We deliver comprehensive industrial solutions with consistency,
          quality, and a strong commitment to excellence.
        </Typography>
        <Typography
          sx={{
            mb: 1,
            color: "#031749ff  ",
            fontWeight: 400,
            fontSize: "1.1rem",
          }}
        >
          Trusted by our clients as a leading provider of Comprehensive
          Industrial Solutions across Saudi Arabia’s vital industries.
        </Typography>
      </Box>
      <Box ref={viewportRef} sx={{ overflow: "hidden", position: "relative" }}>
        {/* Left Arrow */}
        <IconButton
          onClick={handlePrev}
          disabled={index === 0}
          sx={{
            position: "absolute",
            left: 10,
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "#fff",
            zIndex: 10,
            boxShadow: 2,
          }}
        >
          <ArrowBackIos fontSize="small" />
        </IconButton>

        {/* Right Arrow */}
        <IconButton
          onClick={handleNext}
          disabled={index >= maxIndex}
          sx={{
            position: "absolute",
            right: 10,
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "#fff",
            zIndex: 10,
            boxShadow: 2,
          }}
        >
          <ArrowForwardIos fontSize="small" />
        </IconButton>

        {/* Track */}
        <Box
          sx={{
            display: "flex",
            gap: `${GAP}px`,
            padding: `${GAP / 2}px`,
            transition: "transform 0.45s cubic-bezier(.2,.8,.2,1)",
            transform,
          }}
        >
          {servicesData.map((service, i) => (
            <Box
              key={i}
              sx={{
                width: `${itemWidth}px`,
                flexShrink: 0,
                borderRadius: "14px",
                backgroundColor: "#fff",
                boxShadow: 3,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "translateY(-5px)" },
              }}
            >
              {/* Image */}
              <Box
                component="img"
                src={service.image}
                alt={service.title}
                sx={{
                  width: "100%",
                  height: { xs: "28vh", sm: "22vh", md: "30vh" },
                  objectFit: "cover",
                }}
              />

              {/* Content */}
              <Box
                sx={{
                  p: 2,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                }}
              >
                <Typography fontWeight={600} mb={1}>
                  {service.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2, flexGrow: 1 }}
                >
                  {service.description}
                </Typography>

                <Button
                  component={Link}
                  to={service.link}
                  variant="contained"
                  size="small"
                  sx={{ borderRadius: "20px", alignSelf: "center" }}
                >
                  View Service
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
