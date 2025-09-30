import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  Link,
} from "@mui/material";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubscribe = () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email address");
      return;
    }
    setError("");
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(135deg, #0d1b2a, #1b263b)",
        color: "#fff",
        pt: 8,
        pb: 4,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative blurred circles */}
      <Box
        sx={{
          position: "absolute",
          width: 300,
          height: 300,
          background: "rgba(26, 115, 232, 0.15)",
          borderRadius: "50%",
          top: -100,
          left: -100,
          filter: "blur(100px)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 250,
          height: 250,
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: "50%",
          bottom: -80,
          right: -80,
          filter: "blur(80px)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={6}>
          {/* Logo & About */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontFamily: "'Playfair Display', serif",
                letterSpacing: 1,
                background: "linear-gradient(120deg, #4dabf7, #1a73e8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Dental Equipments
            </Typography>
            <Typography
              variant="body2"
              sx={{
                opacity: 0.75,
                maxWidth: 320,
                lineHeight: 1.7,
                fontSize: "0.95rem",
              }}
            >
              Innovative dental care & technology solutions built for comfort,
              precision, and patient well-being.
              <br /> This conveys a similar message tailored to dental
              practices, emphasizing care quality, advanced technology, and
              patient focus
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} md={3}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                mb: 2,
                fontSize: "1rem",
                letterSpacing: 0.5,
              }}
            >
              Quick Links
            </Typography>
            {[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                underline="none"
                color="inherit"
                sx={{
                  display: "block",
                  mb: 1,
                  opacity: 0.75,
                  fontSize: "0.95rem",
                  transition: "all 0.3s ease",
                  transform: "perspective(500px) translateZ(0px)",
                  "&:hover": {
                    opacity: 1,
                    color: "#4dabf7",
                    transform: "perspective(500px) translateZ(5px)",
                  },
                }}
              >
                {link.label}
              </Link>
            ))}
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} md={5}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                mb: 2,
                fontSize: "1rem",
                letterSpacing: 0.5,
              }}
            >
              Stay Updated
            </Typography>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              <TextField
                size="small"
                fullWidth
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  bgcolor: "rgba(255,255,255,0.9)",
                  borderRadius: "6px",
                  flex: 1,
                  input: { color: "#000" },
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  backdropFilter: "blur(4px)",
                }}
              />
              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(90deg, #1a73e8, #4dabf7)",
                  px: 3,
                  fontWeight: "bold",
                  whiteSpace: "nowrap",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                  transform: "translateY(0)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 14px rgba(0,0,0,0.3)",
                  },
                }}
                onClick={handleSubscribe}
              >
                Subscribe
              </Button>
            </Box>
            {error && (
              <Typography
                variant="caption"
                color="error"
                display="block"
                sx={{ mt: 0.5 }}
              >
                {error}
              </Typography>
            )}
          </Grid>
        </Grid>

        {/* Social + Bottom */}
        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          {/* Social Icons */}
          <Box sx={{ display: "flex", gap: 1 }}>
            {[Facebook, Twitter, LinkedIn, Instagram].map((Icon, i) => (
              <IconButton
                key={i}
                sx={{
                  color: "#fff",
                  bgcolor: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  "&:hover": {
                    bgcolor: "#1a73e8",
                    transform: "translateY(-3px) scale(1.1)",
                    boxShadow: "0 6px 15px rgba(0,0,0,0.3)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <Icon fontSize="small" />
              </IconButton>
            ))}
          </Box>

          {/* Copyright */}
          <Typography
            variant="body2"
            sx={{ opacity: 0.65, fontSize: "0.85rem" }}
          >
            © {new Date().getFullYear()} Dental Equipments. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
