import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
  TextField,
  Button,
  MenuItem,
  Stack,
  Snackbar,
  Alert,
  Grid,
} from "@mui/material";
import aboutUsImg from "../assets/ContactUs/Contact-Us.jpg";

// Google Form endpoint and entry mapping (from your form)
const FORM_ACTION =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLSec5kEv5B6QOfVMawO4LV_DTicHTyteOK9DK0I5qmACh-rDig/formResponse";

const FIELD_MAP = {
  name: "entry.587278136",
  company: "entry.1024684930",
  email: "entry.1825944498",
  phone: "entry.627361359",
  project_details: "entry.1064634845",
  services: "entry.1744286600",
};

const SERVICES = [
  "Heavy Equipment Rental",
  "Manpower",
  "Trading & Supply",
  "Civil Works",
  "Fencing Work",
  "Scaffolding",
];

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    services: "",
    project_details: "",
  });

  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [snack, setSnack] = useState({
    open: false,
    severity: "success",
    message: "",
  });

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    if (!form.services) e.services = "Please select a service";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const submitToGoogle = (payload) => {
    // Build a hidden HTML form and submit it to Google to avoid CORS
    const htmlForm = document.createElement("form");
    htmlForm.action = FORM_ACTION;
    htmlForm.method = "POST";
    // open Google confirmation in new tab so user stays on site
    htmlForm.target = "_blank";

    Object.keys(payload).forEach((k) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = FIELD_MAP[k];
      input.value = payload[k] ?? "";
      htmlForm.appendChild(input);
    });

    document.body.appendChild(htmlForm);
    htmlForm.submit();
    document.body.removeChild(htmlForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      setSnack({
        open: true,
        severity: "error",
        message: "Please fix the form errors.",
      });
      return;
    }

    setSending(true);

    try {
      submitToGoogle(form);

      // Show success on UI (Google confirmation opens in new tab)
      setSnack({
        open: true,
        severity: "success",
        message: "Submitted — thank you! (Google confirmation opened)",
      });
      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        services: "",
        project_details: "",
      });
      setErrors({});
    } catch (err) {
      console.error(err);
      setSnack({
        open: true,
        severity: "error",
        message: "Submission failed — try again.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <Box>
      {/* Hero Banner */}
      {/* <Box
        sx={{
          minHeight: { xs: 240, sm: 350 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${aboutUsImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "100%",
            // height: "100%",
            position: "absolute",
            inset: 0,

            zIndex: 0,
          }}
        />
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            variant="h2"
            fontWeight={700}
            sx={{ fontSize: { xs: 24, sm: 34, md: 44 } }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mt: 2,
              fontSize: { xs: 13, sm: 16, md: 20 },
              maxWidth: 760,
              margin: "0 auto",
              color: "rgba(255,255,255,0.95)",
            }}
          >
            We’d love to hear from you. Reach out for inquiries, proposals, or
            service requests.
          </Typography>
        </Box>
      </Box> */}

      {/* Contact Form Section */}
      <Container sx={{ py: { xs: 4, md: 8 } }}>
        <Typography variant="h4" align="center" fontWeight={700} sx={{ mb: 3 }}>
          Get in Touch
        </Typography>

        <Typography
          variant="body1"
          align="center"
          sx={{ mb: 5, maxWidth: 900, mx: "auto" }}
        >
          Fill out the form below and our team at AGS will respond promptly. We
          provide manpower, material supply, equipment rental, transportation,
          and E&I services across Saudi Arabia.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ borderRadius: 2, p: { xs: 3, md: 4 } }}>
              <Box component="form" onSubmit={handleSubmit} noValidate>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      label="Full name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      error={!!errors.name}
                      helperText={errors.name}
                      fullWidth
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      label="Company name"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      fullWidth
                      error={!!errors.company}
                      helperText={errors.company}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      label="Email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      error={!!errors.email}
                      helperText={errors.email}
                      fullWidth
                      type="email"
                      autoComplete="email"
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      label="Phone number"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      error={!!errors.phone}
                      helperText={errors.phone}
                      fullWidth
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      select
                      label="Select Services"
                      name="services"
                      value={form.services}
                      onChange={handleChange}
                      required
                      error={!!errors.services}
                      helperText={errors.services || "Choose a service"}
                      fullWidth
                    >
                      <MenuItem value="">Choose</MenuItem>
                      {SERVICES.map((s) => (
                        <MenuItem key={s} value={s}>
                          {s}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid size={{ xs: 12, md: 12 }}>
                    <TextField
                      label="Project details"
                      name="project_details"
                      value={form.project_details}
                      onChange={handleChange}
                      multiline
                      minRows={4}
                      placeholder="Brief description, site location, timeline, etc."
                      fullWidth
                    />
                  </Grid>
                </Grid>

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  mt={3}
                  alignItems="center"
                >
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={sending}
                  >
                    {sending ? "Sending..." : "Send Inquiry"}
                  </Button>

                  <Button
                    variant="outlined"
                    onClick={() => {
                      setForm({
                        name: "",
                        company: "",
                        email: "",
                        phone: "",
                        services: "",
                        project_details: "",
                      });
                      setErrors({});
                    }}
                  >
                    Clear
                  </Button>

                  <Box sx={{ flex: 1 }} />

                  <Typography variant="caption" color="text.secondary">
                    Responses are saved to Google Forms/Sheets.
                  </Typography>
                </Stack>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={snack.open}
        autoHideDuration={6000}
        onClose={() => setSnack((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity={snack.severity}
          sx={{ width: "100%" }}
          onClose={() => setSnack((s) => ({ ...s, open: false }))}
        >
          {snack.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
