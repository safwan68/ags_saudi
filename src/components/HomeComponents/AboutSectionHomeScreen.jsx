// import React from "react";
// import { Box, Button, Container, Grid, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// export default function AboutSection() {
//   const navigate = useNavigate();

//   return (
//     <Box sx={{ py: 8, bgcolor: "background.default" }}>
//       <Container maxWidth="lg">
//         <Grid container spacing={4} alignItems="center">
//           {/* Left Content */}
//           <Grid item xs={12} md={6}>
//             <Typography
//               variant="body2"
//               color="primary"
//               sx={{ fontWeight: 600, mb: 1 }}
//             >
//               About Us
//             </Typography>

//             <Typography
//               variant="h4"
//               component="h2"
//               sx={{
//                 fontWeight: 700,
//                 mb: 2,
//                 "& span": { color: "primary.main", fontStyle: "italic" },
//               }}
//             >
//               About <span>Femoza Engineers and Design Consultancy</span>
//             </Typography>

//             <Box
//               sx={{ width: 60, height: 3, bgcolor: "primary.main", mb: 3 }}
//             />

//             <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
//               Our company was founded to address the growing need for innovative
//               and reliable engineering solutions in both domestic and
//               international markets. We are dedicated to delivering services
//               that balance cost-efficiency, timely execution, and uncompromised
//               quality. Through consistent performance and client-focused
//               strategies, we have built lasting relationships and achieved
//               significant milestones. Backed by a team of skilled professionals
//               and visionary leadership, we continue to expand our capabilities
//               across multiple industries, offering an extensive portfolio of
//               services.
//             </Typography>

//             <Box sx={{ display: "flex", gap: 2 }}>
//               <Button
//                 variant="contained"
//                 size="large"
//                 sx={{
//                   bgcolor: "#006d85",
//                   "&:hover": { bgcolor: "#004f61" },
//                   boxShadow: 2,
//                 }}
//                 onClick={() => alert("Get a Quote clicked!")}
//               >
//                 Get a Quote
//               </Button>

//               <Button
//                 variant="outlined"
//                 size="large"
//                 sx={{
//                   borderColor: "#006d85",
//                   color: "#006d85",
//                   "&:hover": { bgcolor: "#e0f7fa", borderColor: "#004f61" },
//                 }}
//                 onClick={() => navigate("/about-us")}
//               >
//                 Learn More
//               </Button>
//             </Box>
//           </Grid>

//           {/* Right Image */}
//           <Grid item xs={12} md={6}>
//             <Box
//               component="img"
//               src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVhbXdvcmt8ZW58MHx8MHx8fDA%3D" // replace with your image path
//               alt="Team working"
//               sx={{
//                 width: "100%",
//                 height: "auto",
//                 borderRadius: 2,
//                 boxShadow: 3,
//               }}
//             />
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// }

import React from "react";
import {
  Box,
  Typography,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import "@fontsource/playfair-display";

export default function AboutSection() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        py: 8,
        bgcolor: "#f9f9f9",
        boxShadow: "inset 0px 0px 30px rgba(0,0,0,0.05)",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: isSmallScreen ? "column" : "row",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                mb: 2,
                fontWeight: 700,
                fontFamily: "'Playfair Display', serif",
                color: "#0D1B2A",
                textShadow: "2px 2px 5px rgba(0,0,0,0.15)",
                letterSpacing: "1px",
              }}
            >
              About Our Company
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 4,
                lineHeight: 1.8,
                color: "#333",
              }}
            >
              {/* Our company was founded with the vision to deliver reliable
              solutions across equipment rental, manpower, trading, and civil
              works, combining innovation, expertise, and professionalism. With
              a skilled team and a client-focused approach, we ensure
              efficiency, quality, and trust in every service we provide. */}
              AGS (Arabian Golden Sparrow) is a trusted provider of integrated
              industrial services across Manpower Supply, Equipment Rental,
              Transportation solutions and Civil, Electrical & Instrumentation
              (E&I). Built on innovation, expertise, and professionalism, we
              deliver reliable, efficient, and result-driven services tailored
              to the evolving needs of our clients.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.8,
                color: "#333",
              }}
            >
              {/* Through years of dedication and strong partnerships with
              businesses across industries, we have built a reputation for
              excellence and reliability, achieving remarkable milestones in
              supporting construction, infrastructure, and industrial growth. */}
              With a dedicated workforce and strong partnerships across major
              industries in Saudi Arabia, AGS continues to build a reputation
              for quality, safety, and on-time delivery supporting construction,
              infrastructure, and industrial growth with unmatched commitment.
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              perspective: "1000px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVhbXdvcmt8ZW58MHx8MHx8fDA%3D"
              alt="About Us"
              sx={{
                width: "100%",
                maxWidth: "500px",
                borderRadius: "15px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                transform: "rotateY(0deg)",
                transition: "transform 0.6s ease, box-shadow 0.6s ease",
                "&:hover": {
                  transform: "rotateY(10deg) scale(1.03)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                },
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
