import React from "react";
import { Box, Typography, Grid, Paper, Link } from "@mui/material";

// Replace these logo URLs with your actual image files (for demo, placeholders used)
const clients = [
  {
    name: "FLUOR",
    image: require("../../assets/clients/fluor.png"),
  },
  {
    name: "JGC",
    image: require("../../assets/clients/jgc.png"),
  },
  {
    name: "NESMA",
    image: require("../../assets/clients/nesma.png"),
  },
  {
    name: "KENT",
    image: require("../../assets/clients/kent.png"),
  },
  {
    name: "TRONOX",
    image: require("../../assets/clients/tronox.png"),
  },
  {
    name: "Nesma & Partners",
    image: require("../../assets/clients/nesma.png"),
  },
];

const Clientele = () => (
  <Box sx={{ py: 6, px: { xs: 2, md: 8 }, background: "#fff" }}>
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography variant="h4" fontWeight={500}>
        Our Clientele
      </Typography>
      {/* <Link href="#" underline="none" sx={{ fontSize: '1rem', fontWeight: 400 }}>
        View All
      </Link> */}
    </Box>
    <Grid
      container
      spacing={6}
      sx={{ mt: 3 }}
      justifyContent="center"
      alignItems="center"
    >
      {clients.map((client, idx) => (
        <Grid
          item
          xs={6}
          sm={4}
          md={2}
          key={idx}
          display="flex"
          justifyContent="center"
        >
          <Paper
            elevation={0}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 2,
              background: "transparent",
              boxShadow: "none",
            }}
          >
            <Box
              component="img"
              src={client.image}
              alt={client.name}
              sx={{ maxHeight: 48, mb: 1, maxWidth: 120, objectFit: "contain" }}
            />
            {/* Uncomment below line if you want to show names under logos */}
            {/* <Typography variant="body2" align="center">{client.name}</Typography> */}
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Clientele;
