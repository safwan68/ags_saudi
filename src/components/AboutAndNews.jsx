import React from "react";
import { Box, Typography, Button, Link } from "@mui/material";

export default function AboutAndNews() {
  const news = [
    {
      date: "August 15, 2025",
      title:
        "BrightSmile Dental Clinic opens new state-of-the-art facility to enhance patient care",
      link: "/news/brightsmile-new-facility",
    },
    {
      date: "July 30, 2025",
      title:
        "Expert dentists at SmileCare introduce advanced digital imaging for more accurate diagnoses",
      link: "/news/smilecare-digital-imaging",
    },
    {
      date: "June 12, 2025",
      title:
        "Healthy Teeth Initiative launches free community dental screenings across the city",
      link: "/news/healthy-teeth-screenings",
    },
    {
      date: "May 25, 2025",
      title:
        "Innovative laser dentistry now available at Premier Dental, reducing treatment times",
      link: "/news/premier-laser-dentistry",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 4,
        px: { xs: 2, md: 8 },
        py: 6,
      }}
    >
      {/* About Section */}
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: 400, mb: 3, maxWidth: "600px" }}
        >
          Dedicated to <strong>crafting smiles</strong> and{" "}
          <strong>transforming lives</strong> through advanced dental care and
          compassionate expertise.
        </Typography>

        <Button
          variant="outlined"
          endIcon={<span style={{ fontSize: "18px" }}>›</span>}
          sx={{
            borderColor: "#009688",
            color: "#009688",
            fontWeight: "bold",
            textTransform: "none",
            "&:hover": {
              borderColor: "#00695c",
              backgroundColor: "rgba(0,150,136,0.04)",
            },
          }}
          href="/about"
        >
          About us
        </Button>
      </Box>

      {/* News Section */}
      <Box sx={{ flex: 1, maxWidth: 400 }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", mb: 2, color: "#333" }}
        >
          News
        </Typography>

        {news.map((item, idx) => (
          <Box key={idx} sx={{ mb: 3 }}>
            <Typography
              variant="body2"
              sx={{ color: "#666", mb: 0.5, fontSize: "0.9rem" }}
            >
              {item.date}
            </Typography>
            <Link
              href={item.link}
              underline="hover"
              sx={{
                color: "#009688",
                fontSize: "1rem",
                lineHeight: 1.4,
                display: "block",
              }}
            >
              {item.title}
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
