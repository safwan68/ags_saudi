// TradeSupplyGrid.jsx
import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
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

export default function ManpowerGrid() {
  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={3}>
        {/* Engineering / QA-QC */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: 3,
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              p: 3,
              border: "2px solid rgba(0, 0, 0, 0.1)",
              minHeight: { xs: "auto", sm: 460 },
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
              Engineers / QA–QC Professionals
            </Typography>

            <BulletList
              items={[
                "Mechanical Engineers",
                "Civil Engineers",
                "Electrical Engineers",
                "Instrumentation Engineers",
                "Piping Engineers",
                "Welding Engineers",
                "Structural Engineers",
                "Insulation Engineers",
                "Planning & Scheduling Engineers",
              ]}
            />
          </Box>
        </Grid>

        {/* Administrative & Others */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: 3,
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              p: 3,
              border: "2px solid rgba(0, 0, 0, 0.1)",
              minHeight: { xs: "auto", sm: 460 },
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
              Administrative Personnel / Others
            </Typography>

            <BulletList
              items={[
                "Executive Secretaries",
                "Document Controllers",
                "Time Keepers",
                "Fire Watch Personnel",
                "Manhole Watch Personnel",
                "Safety Officers",
                "Quantity Surveyors",
                "Safety Personnel",
              ]}
            />
          </Box>
        </Grid>

        {/* Skilled Workers */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: 3,
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              p: 3,
              border: "2px solid rgba(0, 0, 0, 0.1)",
              minHeight: { xs: "auto", sm: 840 },
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
              Skilled Workers
            </Typography>

            <BulletList
              items={[
                "Pipe Fabricators",
                "Pipe Fitters",
                "Millwrights",
                "Instrument Technicians",
                "Industrial Electricians",
                "Welders",
                "General Workers (Laborers)",
                "Steel Fixers",
                "Plumbers",
                "Painters",
                "Carpenters",
                "Drivers",
                "Mechanical Helpers",
                "Equipment Operators",
                "Riggers (Aramco & TUV Certified)",
                "Scaffolders (TUV Certified)",
                "Mechanical Fitters",
                "Masons",
              ]}
            />
          </Box>
        </Grid>

        {/* Inspectors / Supervisors */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: 3,
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              p: 3,
              border: "2px solid rgba(0, 0, 0, 0.1)",
              minHeight: { xs: "auto", sm: 840 },
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
              Inspectors / Supervisors
            </Typography>

            <BulletList
              items={[
                "Quality Inspectors",
                "Safety Inspectors",
                "Electrical Supervisors / Foremen",
                "Instrumentation Supervisors / Foremen",
                "Piping Supervisors / Foremen",
                "Mechanical Supervisors / Foremen",
                "Structural Supervisors / Foremen",
                "Painting Supervisors / Foremen",
                "Material Coordinators",
                "AutoCAD Operators",
                "Surveyors",
              ]}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
