import { createTheme } from "@mui/material/styles";

// Import Quicksand font in your index.html or via @fontsource
// npm install @fontsource/quicksand
import "@fontsource/quicksand";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ac8446", // Copper
    },
    secondary: {
      main: "#e9ae59", // Gold
    },
    background: {
      default: "#f9f6f2", // Optional light background
      paper: "#ffffff",
    },
    text: {
      primary: "#333333",
      secondary: "#555555",
    },
  },
  typography: {
    fontFamily: "Quicksand, Arial, sans-serif",
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
      color: "#ac8446",
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 600,
      color: "#ac8446",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px", // Optional rounded buttons
        },
      },
    },
  },
});

export default theme;
