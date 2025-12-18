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

export default function TradeSupplyGrid() {
  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: 3,
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              p: 3,
              border: "2px solid rgba(0, 0, 0, 0.1)",
              minHeight: { xs: "auto", sm: 365 },
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: 6,
              },

              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
              Containers & Storage Units
            </Typography> */}
            <BulletList
              items={[
                "Electrical",
                "Mechanical",
                "Hydraulic & Pneumatic Solutions",
                "Instrumentation & Fittings",
                "Fire & Safety",
                "Lubricants",
                "Office Furniture",
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
              minHeight: { xs: "auto", sm: 365 },
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: 6,
              },

              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
              Earth Moving Equipment
            </Typography> */}
            <BulletList
              items={[
                "Building Material",
                "Industrial Door Solutions",
                "Industrial Paint",
                "Drill Pipe Float Valve",
                "Industrial Tools & Hardware",
                "Test Sieves & Equipment for Soil, Cement & Concrete",
              ]}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
