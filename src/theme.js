import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#1A73C6" },
    secondary: { main: "#FF6F00" },
  },
  typography: {
    h1: { fontSize: "2rem", fontWeight: 700 },
    h2: { fontSize: "1.5rem" },
  },
});

export default theme;
