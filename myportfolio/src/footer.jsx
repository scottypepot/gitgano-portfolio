import { Typography, Box } from "@mui/material";

export default function Footer() {
  return (
    <>
      <Box
        component="footer"
        sx={{
          width: "100vw", // full browser width
          mx: "calc(50% - 50vw)", // removes parent container limits
          textAlign: "center",
          py: 2,
          mt: 3,
          fontSize: 14,
          color: "white",
          bgcolor: "black",
          overflow: "hidden",
        }}
      >
        <Typography>
          © 2025 Scott Benzer Gitgano. All rights reserved.
        </Typography>
      </Box>
    </>
  );
}
