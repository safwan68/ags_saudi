import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ImgOne from "../../assets/HomePage/business-team-stack-hands-support-start-up-new-project.jpg";
import ImgTwo from "../../assets/HomePage/shanghai-aerial-sunset.jpg";

const SectionFour = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        container
        spacing={0}
        sx={{
          flexDirection: {
            xs: "column", // mobile
            sm: "column", // tablet portrait
            md: "row", // tablet landscape & laptops
          },
        }}
      >
        {/* LEFT GRID */}
        <Grid
          size={{ xs: 12, sm: 4, md: 6 }}
          sx={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${ImgOne})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            justifyContent: "center",
            minHeight: { xs: "40vh", md: "70vh" },
            p: 4,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: " #ebc185ff",
              fontWeight: 600,
              textAlign: "left",
            }}
          >
            Trusted for Reliability & Quality
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#fff",
              textAlign: "center",
              fontWeight: 600,
              textAlign: "left",
            }}
          >
            Our clients value our consistent delivery, ISO-certified quality
            standards, and ability to meet deadlines across critical industrial
            sectors.
          </Typography>
        </Grid>

        {/* RIGHT GRID */}
        <Grid
          size={{ xs: 12, sm: 4, md: 6 }}
          sx={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${ImgTwo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            justifyContent: "center",
            minHeight: { xs: "40vh", md: "70vh" },
            p: 4,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#ebc185ff",
              fontWeight: 600,
              textAlign: "left",
            }}
          >
            Complete Solutions Under One Roof
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#fff",
              fontWeight: 600,
              textAlign: "left",
            }}
          >
            AGS delivers integrated services manpower, materials, E&I works, and
            transportation ensuring seamless support for complex operations.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SectionFour;
