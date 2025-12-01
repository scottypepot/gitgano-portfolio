import { Typography, Box } from "@mui/material";

export default function Footer() {
  return (
    <>
      <Box
        component="footer"
        sx={{
          textAlign: "center",
          py: 2,
          mt: 4,
          fontSize: 14,
          color: "white",
        }}
      >
        <Typography>
          © 2025 Scott Benzer Gitgano. All rights reserved.
        </Typography>
      </Box>
    </>
  );
}
