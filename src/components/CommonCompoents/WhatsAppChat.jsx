import React from "react";
import Fab from "@mui/material/Fab";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Box from "@mui/material/Box";

// Replace with your WhatsApp number (international format, without +)
const whatsappNumber = "+966597113327";

const WhatsAppFloat = () => (
  <Box
    sx={{
      position: "fixed",
      bottom: { xs: 16, md: 32 },
      right: { xs: 12, md: 32 },
      zIndex: 9999,
    }}
  >
    <Fab
      color="success"
      aria-label="chat on whatsapp"
      sx={{
        width: { xs: 46, md: 60 },
        height: { xs: 46, md: 60 },
        boxShadow: 3,
        backgroundColor: "#25d366",
        "&:hover": { backgroundColor: "#1DA851" },
      }}
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <WhatsAppIcon sx={{ fontSize: { xs: 24, md: 30 } }} />
    </Fab>
  </Box>
);

export default WhatsAppFloat;
