import React, { useEffect, useMemo, useState } from "react";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

/* =========================
   Image Loader (CRA SAFE)
========================= */
function importAll(r) {
  return r.keys().map(r);
}

/* =========================
   Image Sets (MATCH FOLDERS)
========================= */
const imageSets = {
  transport: importAll(
    require.context(
      "../../assets/servicesImg/transport",
      false,
      /\.(png|jpe?g|svg)$/i,
    ),
  ),

  manpower: importAll(
    require.context(
      "../../assets/servicesImg/manpower",
      false,
      /\.(png|jpe?g|svg)$/i,
    ),
  ),

  civilWorks: importAll(
    require.context(
      "../../assets/servicesImg/civil",
      false,
      /\.(png|jpe?g|svg)$/i,
    ),
  ),

  trading: importAll(
    require.context(
      "../../assets/servicesImg/trading",
      false,
      /\.(png|jpe?g|svg)$/i,
    ),
  ),

  heavyEquipments: importAll(
    require.context(
      "../../assets/servicesImg/heavyEquipments",
      false,
      /\.(png|jpe?g|svg)$/i,
    ),
  ),

  fencing: importAll(
    require.context(
      "../../assets/servicesImg/fencing",
      false,
      /\.(png|jpe?g|svg)$/i,
    ),
  ),

  scaffolding: importAll(
    require.context(
      "../../assets/servicesImg/scaffolding",
      false,
      /\.(png|jpe?g|svg)$/i,
    ),
  ),
};

/* =========================
   COMPONENT
========================= */
export default function SmoothCarousel({ category = "transport" }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const itemsToShow = isMobile ? 1 : 3;

  const images = imageSets[category] || [];

  const [index, setIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(1);

  /* Measure container width */
  const containerRef = (el) => {
    if (el) {
      setContainerWidth(el.clientWidth);
    }
  };

  useEffect(() => {
    const onResize = () => {
      const el = document.getElementById("carousel-container");
      if (el) setContainerWidth(el.clientWidth);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const GAP = 16;
  const itemWidth = Math.max(0, containerWidth / itemsToShow - GAP);
  const maxIndex = Math.max(0, images.length - itemsToShow);

  const transform = useMemo(
    () => `translateX(-${index * (itemWidth + GAP)}px)`,
    [index, itemWidth],
  );

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1100,
        mx: "auto",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        id="carousel-container"
        ref={containerRef}
        sx={{ overflow: "hidden", position: "relative" }}
      >
        {/* LEFT ARROW */}
        <IconButton
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={index === 0}
          sx={{
            position: "absolute",
            left: 10,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            backgroundColor: "rgba(255,255,255,0.9)",
            boxShadow: 1,
          }}
        >
          <ArrowBackIos fontSize="small" />
        </IconButton>

        {/* RIGHT ARROW */}
        <IconButton
          onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
          disabled={index >= maxIndex}
          sx={{
            position: "absolute",
            right: 10,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            backgroundColor: "rgba(255,255,255,0.9)",
            boxShadow: 1,
          }}
        >
          <ArrowForwardIos fontSize="small" />
        </IconButton>

        {/* TRACK */}
        <Box
          sx={{
            display: "flex",
            gap: `${GAP}px`,
            padding: `${GAP / 2}px`,
            transition: "transform 0.4s ease",
            transform,
          }}
        >
          {images.map((src, i) => (
            <Box
              key={i}
              component="img"
              src={src}
              alt={`slide-${i}`}
              sx={{
                width: `${itemWidth}px`,
                height: { xs: "40vh", sm: "30vh", md: "28vh" },
                objectFit: "cover",
                borderRadius: "12px",
                flexShrink: 0,
                boxShadow: 2,
                backgroundColor: "#eaeaea",
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
