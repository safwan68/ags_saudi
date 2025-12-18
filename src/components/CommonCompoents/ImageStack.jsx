// SmoothCarousel.jsx
import React, { useEffect, useState, useMemo } from "react";
import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const images = [
  "https://images.unsplash.com/photo-1761896118911-6e7ba1d956ff?w=800",
  "https://images.unsplash.com/photo-1629807472592-2649bfa09f9c?w=800",
  "https://plus.unsplash.com/premium_photo-1682142119293-ba4cb0877108?w=800",
  "https://images.unsplash.com/photo-1756402664856-91a90f90b70b?w=800",
  "https://images.unsplash.com/photo-1597088657840-37d3f5d1e1bc?w=800",
];

export default function SmoothCarousel() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const itemsToShow = isMobile ? 1 : 3;

  const [index, setIndex] = useState(0);
  const [containerEl, setContainerEl] = useState(null); // store DOM node in state
  const [containerWidth, setContainerWidth] = useState(1); // start >0 to avoid blank layout

  // callback ref: always a function, safe for React
  const viewportCallbackRef = (el) => {
    setContainerEl(el);
    if (el && el.clientWidth) {
      setContainerWidth(el.clientWidth);
    }
  };

  // measure on resize
  useEffect(() => {
    function onResize() {
      if (containerEl && containerEl.clientWidth) {
        setContainerWidth(containerEl.clientWidth);
      }
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [containerEl]);

  // compute sizes and limits
  const GAP = 16; // px gap between items
  const itemWidth = Math.max(0, containerWidth / itemsToShow - GAP);
  const maxIndex = Math.max(0, images.length - itemsToShow);

  // ensure index valid when breakpoint changes
  useEffect(() => {
    setIndex((cur) => Math.min(cur, maxIndex));
  }, [itemsToShow, maxIndex]);

  const handlePrev = () => setIndex((i) => Math.max(0, i - 1));
  const handleNext = () => setIndex((i) => Math.min(maxIndex, i + 1));

  // small performance: memoize transform value
  const transform = useMemo(
    () => `translateX(-${index * (itemWidth + GAP)}px)`,
    [index, itemWidth, GAP]
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
        /* always pass a function to ref -> avoids "Expected ref" issues */
        ref={viewportCallbackRef}
        sx={{
          overflow: "hidden",
          width: "100%",
          position: "relative",
        }}
      >
        {/* Left Arrow (overlay inside frame) */}
        <IconButton
          onClick={handlePrev}
          disabled={index === 0}
          sx={{
            position: "absolute",
            left: 10,
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.9)",
            zIndex: 10,
            boxShadow: 1,
          }}
        >
          <ArrowBackIos fontSize="small" />
        </IconButton>

        {/* Right Arrow (overlay inside frame) */}
        <IconButton
          onClick={handleNext}
          disabled={index >= maxIndex}
          sx={{
            position: "absolute",
            right: 10,
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.9)",
            zIndex: 10,
            boxShadow: 1,
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
            transition: "transform 420ms cubic-bezier(.2,.8,.2,1)",
            transform,
            whiteSpace: "nowrap",
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
                backgroundColor: "#eaeaea", // visible while loading
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
