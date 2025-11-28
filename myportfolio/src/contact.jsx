import { Box, TextField, Typography } from "@mui/material";

export default function ContactForm() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mt: 10,
        minHeight: "100vh",
      }}
    >
      <Typography sx={{ mb: 2, fontSize: "2rem" }}>Contact Me</Typography>

      <Box
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
          {/* Top row */}
          <TextField
            label="Full name"
            id="name"
            sx={{
              flex: 1,
              minWidth: "200px",
              input: { color: "white" },
              label: { color: "#B5B5B5" },
            }}
          />
          <TextField
            label="Email Address"
            id="email"
            sx={{
              flex: 1,
              minWidth: "200px",
              input: { color: "white" },
              label: { color: "#B5B5B5" },
            }}
          />

          {/* Bottom row */}
          <TextField
            label="Your Message"
            id="message"
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
      </Box>
    </Box>
  );
}
