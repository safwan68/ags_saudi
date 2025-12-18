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

export default function FencingGrid() {
  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 12 }}>
          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: 3,
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              p: 3,
              border: "2px solid rgba(0, 0, 0, 0.1)",
              // minHeight: { xs: "auto", sm: 680 },
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
              Our Fencing services include:
            </Typography>
            <BulletList
              items={[
                "Chain-link fencing for industrial and commercial sites",
                "Barbed wire and razor wire security fencing",
                "Temporary fencing for construction and project sites",
                "Steel and metal panel fencing solutions",
                "Boundary wall fencing and gate installations",
                "Customized access control and security gate systems",
                "Repair, replacement, and maintenance of existing fencing",
              ]}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
