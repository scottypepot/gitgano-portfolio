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
        () => alert("Email sent!"),
        () => alert("Failed to send email!")
      );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt: 9,
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Inspiring Message - Outside Container */}
      <Typography
        sx={{
          mb: 5,
          fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
          color: "#9153CA",
          fontFamily: "'Orbitron', sans-serif",
          textAlign: "center",
          fontStyle: "italic",
          letterSpacing: "0.05em",
          position: "relative",
          zIndex: 1,
          maxWidth: "600px",
          px: 2,
          animation: "slideInDown 0.8s ease-out",
          textShadow: "0 0 20px rgba(145,83,202,0.4)",
        }}
      >
        ✨ "Let's turn your vision into reality. Together, we can build
        something extraordinary." ✨
      </Typography>

      {/* Main Form Container */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
          width: "100%",
          px: 2,
        }}
      >
        <Box
          component="form"
          ref={form}
          onSubmit={sendEmail}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            position: "relative",
            padding: "1.5rem",
            width: 1000,
            maxWidth: "100%",
            backgroundColor: "rgba(24, 19, 27, 1)",
            borderRadius: "0.5rem",
            border: "2px solid rgba(145,83,202,0.4)",
            boxShadow: "0 0 15px rgba(145,83,202,0.4)",
            animation: "frame-pulse 5s infinite ease-in-out",
          }}
        >
          <Typography
            sx={{
              mb: 2,
              fontSize: "2rem",
              color: "#9153CA",
              fontFamily: "'Orbitron', sans-serif",
              textAlign: "center",
            }}
          >
            Contact Me
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
            <TextField
              label="Full name"
              name="user_name"
              sx={{
                flex: 1,
                minWidth: "200px",
                "& .MuiInputBase-input": {
                  color: "#9153CA",
                  fontFamily: "'Orbitron', sans-serif",
                  letterSpacing: "0.05em",
                },
                "& .MuiInputLabel-root": { color: "rgba(145,83,202,0.6)" },
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "transparent",
                  "& fieldset": { border: "1px solid rgba(145,83,202,0.4)" },
                  "&:hover fieldset": {
                    border: "1px solid rgba(145,83,202,0.7)",
                    boxShadow: "0 0 12px rgba(145,83,202,0.3)",
                  },
                },
                caretColor: "#9153CA",
              }}
            />
            <TextField
              label="Email Address"
              name="user_email"
              sx={{
                flex: 1,
                minWidth: "200px",
                "& .MuiInputBase-input": {
                  color: "#9153CA",
                  fontFamily: "'Orbitron', sans-serif",
                  letterSpacing: "0.05em",
                },
                "& .MuiInputLabel-root": { color: "rgba(145,83,202,0.6)" },
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "transparent",
                  "& fieldset": { border: "1px solid rgba(145,83,202,0.4)" },
                  "&:hover fieldset": {
                    border: "1px solid rgba(145,83,202,0.7)",
                    boxShadow: "0 0 12px rgba(145,83,202,0.3)",
                  },
                },
                caretColor: "#9153CA",
              }}
            />
            <TextField
              label="Your Message"
              name="message"
              fullWidth
              multiline
              rows={10}
              sx={{
                mt: 1,
                "& .MuiInputBase-input": {
                  color: "#9153CA",
                  fontFamily: "'Orbitron', sans-serif",
                  letterSpacing: "0.05em",
                },
                "& .MuiInputLabel-root": { color: "rgba(145,83,202,0.6)" },
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "transparent",
                  "& fieldset": { border: "1px solid rgba(145,83,202,0.4)" },
                  "&:hover fieldset": {
                    border: "1px solid rgba(145,83,202,0.7)",
                    boxShadow: "0 0 12px rgba(145,83,202,0.3)",
                  },
                },
                caretColor: "#9153CA",
              }}
            />
          </Box>

          <Button
            type="submit"
            sx={{
              mt: 3,
              alignSelf: "flex-end",
              backgroundColor: "rgba(24, 19, 27, 1)",
              borderRadius: "0.5rem",
              border: "2px solid rgba(145,83,202,0.4)",
              boxShadow: "0 0 15px rgba(145,83,202,0.4)",
              padding: "0.5rem 1rem",
              cursor: "pointer",
              color: "#9153CA",
              fontFamily: "'Orbitron', sans-serif",
              letterSpacing: "0.05em",
              textTransform: "none",
              transition: "all 0.2s ease",
              "&:hover": {
                backgroundColor: "rgb(39,29,49)",
                boxShadow:
                  "0 0 25px rgba(145,83,202,0.6), 0 0 40px rgba(145,83,202,0.4)",
                transform: "scale(1.05)",
              },
              "&:active": {
                backgroundColor: "rgb(25,25,25)",
                boxShadow: "0 0 10px rgba(145,83,202,0.4)",
                transform: "scale(0.98)",
              },
            }}
          >
            Send
          </Button>
        </Box>
      </Box>

      <style>
        {`
          @keyframes frame-pulse {
            0%,100% { opacity: 1; }
            50% { opacity: 0.95; }
          }
          @keyframes slideInDown {
            from {
              opacity: 0;
              transform: translateY(-30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(20px); }
          }
        `}
      </style>
    </Box>
  );
}
