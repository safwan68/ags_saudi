// EquipmentGrid.jsx
import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function BulletList({ items }) {
  return (
    <List dense disablePadding>
      {items.map((text, i) => (
        <ListItem key={i} sx={{ py: 0.6 }}>
          <ListItemIcon sx={{ minWidth: 28 }}>
            <FiberManualRecordIcon sx={{ fontSize: 10 }} />
          </ListItemIcon>
          <ListItemText
            primary={text}
            primaryTypographyProps={{ fontSize: 16 }}
          />
        </ListItem>
      ))}
    </List>
  );
}

export default function EquipmentGrid() {
  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={3}>
        {/* Light Equipment */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: 3,
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              p: 3,
              border: "2px solid rgba(0, 0, 0, 0.1)",

              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: 6,
              },
              minHeight: { xs: "auto", sm: 300 },
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
              Light Equipment
            </Typography>
            <BulletList
              items={[
                "Air compressor",
                "Generator",
                "Load bank",
                "Welding machine",
                "Tower light",
              ]}
            />
          </Box>
        </Grid>

        {/* Heavy Equipment */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: 3,
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              p: 3,
              border: "2px solid rgba(0, 0, 0, 0.1)",
              minHeight: { xs: "auto", sm: 300 },
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: 6,
              },

              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
              Heavy equipment’s
            </Typography>
            <BulletList
              items={[
                "Manlift",
                "Forklift",
                "Boom truck",
                "Telehandler",
                "Scissor lift",
              ]}
            />
          </Box>
        </Grid>

        {/* Cranes */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: 3,
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              p: 3,
              border: "2px solid rgba(0, 0, 0, 0.1)",
              minHeight: { xs: "auto", sm: 300 },
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: 6,
              },

              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
              Cranes
            </Typography>
            <BulletList items={["All-terrain", "Rough terrain", "Crawler"]} />
          </Box>
        </Grid>

        {/* Containers */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: 3,
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              p: 3,
              border: "2px solid rgba(0, 0, 0, 0.1)",
              minHeight: { xs: "auto", sm: 350 },
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: 6,
              },

              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
              Containers & Storage Units
            </Typography>
            <BulletList
              items={[
                "Toolbox Containers",
                "Dry Containers",
                "Reefer Container",
                "Offshore Rigging Loft",
                "Storage Rack",
              ]}
            />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: 3,
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              p: 3,
              border: "2px solid rgba(0, 0, 0, 0.1)",
              minHeight: { xs: "auto", sm: 350 },
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: 6,
              },

              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
              Earth Moving Equipment
            </Typography>
            <BulletList
              items={[
                "Skid-steer loaders",
                "Backhoe Loaders",
                "Excavators",
                "Wheel Loaders",
                "Bulldozer",
                "Roller Compactors upto 25T",
              ]}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
