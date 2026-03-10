import React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Avatar,
  Container,
  useTheme,
  Button,
} from "@mui/material";
import HandshakeIcon from "@mui/icons-material/Handshake";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import VerifiedIcon from "@mui/icons-material/Verified";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import SecurityIcon from "@mui/icons-material/Security";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import BuisnessDealImg from "../assets/essential/buisnessDeal.jpg";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import aboutUsImg from "../assets/aboutUs/aboutUs2.jpg";

const values = [
  {
    icon: <HandshakeIcon fontSize="large" />,
    title: "Partnership & Collaboration",
    description:
      "AGS highly values partnership and collaboration, working closely with clients as trusted advisors to achieve mutual success.",
  },
  {
    icon: <MonetizationOnIcon fontSize="large" />,
    title: "Cost-Effective Solutions",
    description:
      "We provide cost-effective solutions without compromising on quality, helping clients achieve their goals within budget.",
  },
  {
    icon: <MiscellaneousServicesIcon fontSize="large" />,
    title: "Comprehensive Services",
    description:
      "AGS offers a wide range of comprehensive services, providing end-to-end solutions that address all client needs.",
  },
  {
    icon: <VerifiedIcon fontSize="large" />,
    title: "Quality Assurance",
    description:
      "We uphold rigorous quality standards throughout every stage of project delivery, ensuring industry-leading results.",
  },
  {
    icon: <EmojiNatureIcon fontSize="large" />,
    title: "Sustainability & Responsibility",
    description:
      "AGS prioritizes sustainability and social responsibility, embracing responsible business practices in every operation.",
  },
  {
    icon: <SecurityIcon fontSize="large" />,
    title: "Risk Management",
    description:
      "Skilled in risk management, AGS identifies and navigates risks to ensure projects are resilient and future-ready.",
  },
];

export default function AboutUs() {
  const theme = useTheme();
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      {/* Hero Banner */}
      <Box
        sx={{
          minHeight: { xs: 240, sm: 300 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${aboutUsImg})`, // Correct
          backgroundSize: "cover", // Makes image cover the box
          backgroundPosition: "center", // Centers the image
          color: "#fff",
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h2"
          fontWeight="700"
          sx={{ fontSize: { xs: 32, md: 48 }, color: "#f9f6f2" }}
        >
          About Us
        </Typography>

        <Typography
          variant="h6"
          sx={{
            mt: 2,
            fontSize: { xs: 16, md: 24 },
            maxWidth: 700,
            margin: "0 auto",
          }}
        >
          Building Dreams, Crafting Legacies
        </Typography>
      </Box>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 8 }}
        p={{ xs: 2, md: 3 }}
      >
        <Grid size={{ xs: 2, sm: 4, md: 4 }}>
          <Box
            component="img"
            src={BuisnessDealImg}
            alt="Company Team"
            sx={{
              width: "100%",
              height: 360,
              objectFit: "cover",
              borderRadius: "0 0 0 0",
              boxShadow: "none",
              background: "#fff",
            }}
          />
        </Grid>
        <Grid size={{ xs: 2, sm: 4, md: 4 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                color: "#ac8446",
                fontWeight: 600,
                mb: 1,
                fontSize: 22,
                letterSpacing: 0.5,
              }}
            >
              Welcome to Arabian Golden Sparrow.
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                lineHeight: 1.15,
                fontSize: { xs: 24, md: 30 },
                mb: 2,
                color: "#424242",
              }}
            >
              Where Reliability Meets Excellence
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#5C5C5C",
                mb: 3,
                fontSize: 15,
                lineHeight: 1.7,
                textAlign: "justify",
              }}
            >
              AGS (Arabian Golden Sparrow Industrial Services) is a trusted
              provider of integrated industrial solutions, offering Civil, E&I
              works, Manpower Supply, Heavy Equipment Rental, Material Supply,
              and Transportation services across Saudi Arabia. With a strong
              focus on quality, safety, and technical excellence, we support
              major industrial, construction, and infrastructure projects. Our
              skilled team and customer-centric approach ensure reliable,
              efficient, and on-time delivery. From project execution to
              shutdowns and pre-commissioning, we provide end-to-end solutions
              tailored to client needs. AGS is recognized for consistent
              performance, professional service, and a commitment to long-term
              success.
            </Typography>

            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 2, sm: 8, md: 8 }}
              p={{ xs: 2, md: 3 }}
            >
              <Grid size={{ xs: 2, sm: 4, md: 4 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <EngineeringOutlinedIcon
                    sx={{ color: "#ac8446", fontSize: 40, mb: 1 }}
                  />
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 600,
                      color: "#424242",
                      fontSize: 19,
                      mb: 0.5,
                    }}
                  >
                    PROFESSIONAL TEAM
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#666", fontSize: 16, textAlign: "center" }}
                  >
                    We foster a culture of continuous development to stay ahead
                    of the industry.
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 2, sm: 4, md: 4 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <ApartmentOutlinedIcon
                    sx={{ color: "#ac8446", fontSize: 40, mb: 1 }}
                  />
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 600,
                      color: "#424242",
                      fontSize: 19,
                      mb: 0.5,
                    }}
                  >
                    QUALITY SERVICE
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#666", fontSize: 16, textAlign: "center" }}
                  >
                    Our unwavering focus is always on safety, quality, and
                    reliability.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 8 }}
        p={{ xs: 2, md: 3 }}
      >
        <Grid size={{ xs: 2, sm: 4, md: 4 }}>
          <Paper
            sx={{
              p: 3,
              textAlign: "center",
              borderTop: "4px solid #ac8446",
              minHeight: 235,
            }}
          >
            <Avatar sx={{ bgcolor: "primary.main", margin: "0 auto", mb: 1 }}>
              <EmojiObjectsIcon />
            </Avatar>
            <Typography variant="h5" fontWeight="700" gutterBottom>
              Our Vision
            </Typography>
            <Typography color="text.secondary">
              To be a leading provider of integrated industrial, construction,
              and technical services in Saudi Arabia recognized for our
              reliability, innovation, and consistent delivery of high-quality
              solutions that support the Kingdom’s industrial and economic
              development.
            </Typography>
          </Paper>
        </Grid>
        <Grid size={{ xs: 2, sm: 4, md: 4 }}>
          <Paper
            sx={{
              p: 3,
              textAlign: "center",
              borderTop: "4px solid #ac8446",
              minHeight: 235,
            }}
          >
            <Avatar sx={{ bgcolor: "primary.main", margin: "0 auto", mb: 1 }}>
              <TrackChangesIcon />
            </Avatar>
            <Typography variant="h5" fontWeight="700" gutterBottom>
              Our Mission
            </Typography>
            <Typography color="text.secondary">
              Achieving operational excellence, trust, and reliability for every
              client. AGS upholds quality, transparency, and team empowerment,
              aiming for sustainable development and growth within the digital
              landscape.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Container maxWidth="false" sx={{ pt: 3, pb: 3 }}>
        {/* Values Grid */}
        <Box sx={{ mt: 2 }}>
          <Box sx={{ py: 2, px: { xs: 2, md: 2 }, textAlign: "center" }}>
            {/* Heading Section */}
            <Typography variant="h6" color="#ac8446" gutterBottom>
              Why Choose Us
            </Typography>
            <Typography
              variant="h3"
              fontWeight={700}
              gutterBottom
              color="text.primary"
            >
              Building Dreams, Crafting Legacies
            </Typography>

            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
              sx={{
                textAlign: "center",
              }}
            >
              {values.map((value, idx) => (
                <Grid key={idx} item xs={12} sm={6} md={4}>
                  <Box
                    sx={{
                      backgroundColor: "#fff",
                      borderRadius: 3,
                      boxShadow: 0,
                      p: 3,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: 6,
                      },
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: "#ac8446",
                        width: 90,
                        height: 90,
                        mb: 3,
                        boxShadow: 3,
                      }}
                    >
                      {value.icon}
                    </Avatar>

                    <Typography
                      variant="h6"
                      fontWeight={600}
                      gutterBottom
                      color={"text.primary"}
                    >
                      {value.title}
                    </Typography>

                    <Typography
                      color="text.secondary"
                      sx={{
                        fontSize: "1rem",
                        lineHeight: 1.6,
                        maxWidth: "320px",
                      }}
                    >
                      {value.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
