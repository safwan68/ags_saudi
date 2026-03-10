import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Stack, Typography } from "@mui/material";
import aboutUsImg from "../../assets/aboutUs/aboutUs2.jpg";
import ImageStack from "../../components/CommonCompoents/ImageStack";
import { useLocation, useNavigate } from "react-router-dom";
import FencingGrid from "../../components/Services/FencingGrid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const sub = [
  { text: "Heavy Equipment Rental", to: "/services/heavy-equipment-rental" },
  { text: "Manpower", to: "/services/manpower" },
  { text: "Trading & Supply", to: "/services/trading-supply" },
  { text: "Civil Works", to: "/services/civil-works" },
  { text: "Fencing Work", to: "/services/fencing-work" },
  { text: "Scaffolding", to: "/services/scaffolding" },
  { text: "Transportation", to: "/services/transport" },
];

export default function FencingWorks() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
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
          Fencing Work
        </Typography>

        {/* <Typography
          variant="h6"
          sx={{
            mt: 2,
            fontSize: { xs: 16, md: 24 },
            maxWidth: 700,
            margin: "0 auto",
          }}
        >
          Building Dreams, Crafting Legacies
        </Typography> */}
      </Box>

      <Grid
        container
        mt={4}
        mb={4}
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid size={{ xs: 12, md: 8 }}>
          <ImageStack category="fencing" />
          <Box m={1} margin={3}>
            <Typography
              mt={1.5}
              sx={{
                textAlign: "justify",
              }}
            >
              AGS provides complete fencing solutions for industrial,
              commercial, and construction sites. We supply and install durable,
              high-quality fencing systems that ensure security, protection, and
              boundary definition. Our team delivers end-to-end support, from
              material supply and fabrication to installation and maintenance.
            </Typography>
          </Box>
          <FencingGrid />
          <Box m={1} margin={3}>
            <Typography
              mt={1.5}
              sx={{
                textAlign: "justify",
              }}
            >
              We ensure strong, long-lasting installations that meet safety,
              security, and project specifications.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: 3,
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              p: { xs: 3, md: 5 },
              mx: { xs: 1, md: 3 },
              border: "2px solid rgba(0, 0, 0, 0.06)",
              minHeight: { xs: "auto", sm: 300 },
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: 6,
              },
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Stack spacing={2} padding={2}>
              {sub.map((item) => {
                const isActive = location.pathname === item.to;

                return (
                  <Button
                    key={item.to}
                    onClick={() => !isActive && navigate(item.to)}
                    fullWidth
                    disableElevation
                    disabled={isActive}
                    sx={{
                      fontSize: { xs: 16, md: 22 },
                      py: isActive
                        ? { xs: 1.8, md: 2.4 }
                        : { xs: 1.2, md: 1.6 },
                      textTransform: "none",
                      color: isActive ? "#0c0c0cff" : "#fff",

                      // Same gradient for active, but faded using opacity
                      background: "linear-gradient(135deg, #b87333, #d4af37)",
                      opacity: isActive ? 0.8 : 1, // <<< 50% opacity when active

                      border: isActive ? "2px solid rgba(0,0,0,0.15)" : "none",

                      boxShadow: isActive
                        ? "0 3px 10px rgba(0,0,0,0.15)"
                        : "0 2px 6px rgba(0,0,0,0.08)",

                      transition: "all 240ms ease-in-out",

                      "&:hover": {
                        background: "linear-gradient(135deg, #d4af37, #b87333)",
                        transform: isActive ? "none" : "translateY(-3px)",
                      },

                      "&.Mui-disabled": {
                        opacity: 0.7, // keep 50% when disabled
                        cursor: "not-allowed",
                      },
                    }}
                  >
                    {item.text}
                  </Button>
                );
              })}
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
