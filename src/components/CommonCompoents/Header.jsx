import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemText,
  ListItemButton,
  Collapse,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import { Link as RouterLink } from "react-router-dom";
import "@fontsource/poppins"; // npm install @fontsource/poppins
import logo from "../../assets/Logo.png";

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false);

  const navItems = [
    { text: "Home", to: "/" },
    { text: "About", to: "/about" },
    {
      text: "Services",
      sub: [
        {
          text: "Heavy Equipment Rental",
          to: "/services/heavy-equipment-rental",
        },
        {
          text: "Manpower",
          to: "/services/manpower",
        },
        {
          text: "Transportation",
          to: "/services/transport",
        },
        { text: "Trading & Supply", to: "/services/trading-supply" },
        {
          text: "Civil Works",
          to: "/services/civil-works",
        },

        {
          text: "Fencing Work",
          to: "/services/fencing-work",
        },
        {
          text: "Scaffolding",
          to: "/services/scaffolding",
        },
      ],
    },

    { text: "Contact", to: "/contact-us" },
  ];

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(10px)",
          color: "black",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar sx={{ py: 1 }}>
          {/* add logo image here */}
          <Box
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 1,
              textDecoration: "none",
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{
                height: 60,
                objectFit: "contain",
              }}
            />

            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                letterSpacing: 1,
                background: "linear-gradient(120deg, #ac8446, #e9ae59)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textTransform: "uppercase",
              }}
            >
              Arabian Golden Sparrow
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 1.5 }}>
            {navItems.map((item) =>
              item.sub ? (
                <React.Fragment key={item.text}>
                  <Button
                    color="inherit"
                    endIcon={<ExpandMore />}
                    onClick={handleMenuOpen}
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 500,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "rgba(172, 132, 70, 0.15)",

                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    {item.text}
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    PaperProps={{
                      sx: {
                        mt: 1,
                        boxShadow: "0px 8px 20px rgba(0,0,0,0.1)",
                        borderRadius: 2,
                      },
                    }}
                  >
                    {item.sub.map((subItem) => (
                      <MenuItem
                        key={subItem.to}
                        component={RouterLink}
                        to={subItem.to}
                        onClick={handleMenuClose}
                        sx={{
                          fontFamily: "'Poppins', sans-serif",
                          "&:hover": {
                            backgroundColor: "rgba(172, 132, 70, 0.15)",
                          },
                        }}
                      >
                        {subItem.text}
                      </MenuItem>
                    ))}
                  </Menu>
                </React.Fragment>
              ) : (
                <Button
                  key={item.to}
                  color="inherit"
                  component={RouterLink}
                  to={item.to}
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 500,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(172, 132, 70, 0.15)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  {item.text}
                </Button>
              ),
            )}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            sx={{ display: { sm: "none" }, ml: 1 }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: { backgroundColor: "#f9f9f9" },
        }}
      >
        <List
          sx={{
            width: 260,
            fontFamily: "'Poppins', sans-serif",
            paddingTop: 10,
          }}
        >
          {navItems.map((item) =>
            item.sub ? (
              <React.Fragment key={item.text}>
                <ListItemButton
                  onClick={() => setMobileServicesOpen((prev) => !prev)}
                  sx={{
                    "&:hover": {
                      backgroundColor: "rgba(172, 132, 70, 0.15)",
                    },
                  }}
                >
                  <ListItemText primary={item.text} />
                  {mobileServicesOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={mobileServicesOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.sub.map((subItem) => (
                      <ListItemButton
                        key={subItem.to}
                        sx={{
                          pl: 4,
                          "&:hover": {
                            backgroundColor: "rgba(172, 132, 70, 0.15)",
                          },
                        }}
                        component={RouterLink}
                        to={subItem.to}
                        onClick={() => setOpen(false)}
                      >
                        <ListItemText primary={subItem.text} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </React.Fragment>
            ) : (
              <ListItemButton
                key={item.to}
                component={RouterLink}
                to={item.to}
                onClick={() => setOpen(false)}
                sx={{
                  "&:hover": { backgroundColor: "rgba(26,115,232,0.08)" },
                }}
              >
                <ListItemText primary={item.text} />
              </ListItemButton>
            ),
          )}
        </List>
      </Drawer>
    </>
  );
}
