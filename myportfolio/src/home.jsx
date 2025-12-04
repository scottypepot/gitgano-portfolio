import { Container, Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ height: "10vh", p: 3, m: "auto", maxWidth: 1400 }}>
      <Typography component="div" sx={{ fontSize: 30, textAlign: "left" }}>
        <ul className="body-style">
          <li style={{ margin: 0, padding: 0, lineHeight: 1.2 }}>
            <span
              style={{
                display: "block",
                fontSize: "60px",
                fontWeight: 600,
              }}
            >
              Hi, I'm Gitgano
            </span>
            <span
              style={{
                fontSize: "60px",
                fontWeight: 600,
              }}
            >
              a Software Developer.
            </span>
            <span
              className="lowWelcome"
              style={{
                display: "block",
                fontSize: "20px",
                fontWeight: 400,
                marginTop: "5px",
              }}
            >
              Welcome to my website 👋
            </span>
          </li>
          <li>
            <img
              src="imgs/profile.png"
              alt="profile-image"
              style={{
                height: "auto",
                borderRadius: "50%",
                display: "block",
              }}
            />
          </li>
        </ul>
      </Typography>
    </Box>
  );
}
