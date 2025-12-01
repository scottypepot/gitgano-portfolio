import { useRef } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => alert("Email sent!"),
        (error) => alert("Failed to send email!")
      );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mt: 9,
        minHeight: "100vh",
      }}
    >
      <Typography sx={{ mb: 2, fontSize: "2rem" }}>Contact Me</Typography>

      <Box
        component="form"
        ref={form}
        onSubmit={sendEmail}
        sx={{
          width: 1000,
          maxWidth: "100%",
          bgcolor: "rgba(60, 60, 60, 0.6)",
          p: 3,
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            width: "100%",
          }}
        >
          <TextField
            label="Full name"
            name="user_name"
            sx={{
              flex: 1,
              minWidth: "200px",
              input: { color: "white" },
              label: { color: "#B5B5B5" },
            }}
          />
          <TextField
            label="Email Address"
            name="user_email"
            sx={{
              flex: 1,
              minWidth: "200px",
              input: { color: "white" },
              label: { color: "#B5B5B5" },
            }}
          />
          <TextField
            label="Your Message"
            name="message"
            fullWidth
            multiline
            rows={15}
            sx={{
              mt: 1,
              input: { color: "white" },
              label: { color: "#B5B5B5" },
            }}
          />
        </Box>
        <Button type="submit" variant="contained" sx={{ mt: 3 }}>
          Send
        </Button>
      </Box>
    </Box>
  );
}
