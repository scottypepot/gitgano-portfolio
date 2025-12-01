import "./App.css";
import Techs from "./techstack.jsx";
import Projects from "./projects.jsx";
import Contact from "./contact.jsx";
import Footer from "./footer.jsx";
import { Container, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

function App() {
  return (
    <>
      <Container maxWidth={false}>
        <div className="navbar">
          <ul>
            <li>Scott Gitgano</li>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
          </ul>
        </div>
        <Container maxWidth={false} sx={{ mt: 18, mb: { xs: 55, lg: 66 } }}>
          <Box sx={{ height: "10vh", p: 3, m: "auto", maxWidth: 1400 }}>
            <Typography
              component="div"
              sx={{ fontSize: 30, textAlign: "left" }}
            >
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
                      width: "400px",
                      height: "auto",
                      borderRadius: "50%",
                      display: "block",
                    }}
                  />
                </li>
              </ul>
            </Typography>
          </Box>
        </Container>
        <Container maxWidth={false}>
          <Box
            sx={{
              bgcolor: "rgba(60, 60, 60, 0.6)",
              mb: 25,
              borderRadius: 8,
              p: 3,
              m: "auto",
              maxWidth: 1080,
            }}
          >
            <Grid
              container
              spacing={4}
              columns={16}
              sx={{ mt: 4, alignItems: "center", justifyContent: "center" }}
            >
              {/* LEFT COLUMN */}
              <Grid
                sx={{
                  alignSelf: "flex-start",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                }}
              >
                <Box
                  component="img"
                  src="imgs/profile.png"
                  alt="profile-image"
                  sx={{
                    width: "100%",
                    maxWidth: 180,
                    borderRadius: "50%",
                    mx: "auto",
                  }}
                />

                <ButtonGroup
                  variant="text"
                  sx={{
                    mt: 2,
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <Button disableRipple>
                    <Box
                      component="img"
                      src="imgs/facebook-logo.png"
                      sx={{ width: 32 }}
                    />
                  </Button>
                  <Button disableRipple>
                    <Box
                      component="img"
                      src="imgs/github-logo.png"
                      sx={{ width: 32 }}
                    />
                  </Button>
                  <Button disableRipple>
                    <Box
                      component="img"
                      src="imgs/linkedin-logo.png"
                      sx={{ width: 32 }}
                    />
                  </Button>
                </ButtonGroup>

                <Box sx={{ mt: 2 }}>
                  <Button
                    sx={{
                      fontSize: "1rem",
                      color: "black",
                      bgcolor: "white",
                      px: 5.23,
                      borderRadius: 2,
                      textTransform: "none",
                    }}
                  >
                    View My CV{" "}
                    <Box
                      component="img"
                      src="imgs/hand.png"
                      sx={{ width: 20, ml: 1 }}
                    />
                  </Button>
                </Box>
                <Box sx={{ mt: 2 }}>
                  <Button
                    sx={{
                      fontSize: "1rem",
                      color: "black",
                      bgcolor: "white",
                      px: 3,
                      borderRadius: 2,
                      textTransform: "none",
                    }}
                  >
                    View Certificates{" "}
                    <Box
                      component="img"
                      src="imgs/hand.png"
                      sx={{ width: 20, ml: 1 }}
                    />
                  </Button>
                </Box>
              </Grid>

              {/* RIGHT COLUMN */}
              <Grid size={12}>
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.8,
                    overflowWrap: "break-word",
                    fontSize: { xs: 16, sm: 19, md: 24, lg: 31 },
                    ml: 3,
                    textAlign: "left",
                  }}
                >
                  Hi everyone! Good day my name is Scott Benzer Gitgano a
                  front-end based web developer from Cebu City and Studying at
                  Cebu Institute of Technology - University, where i majored in
                  Bachelor of Science in Information Technology. I really
                  enjoyed building or creating new projects and especially
                  meeting new people, so relax I’m really a nice a guy where you
                  can talk and discuss at me anytime. I may lack experience for
                  frontend but you can trust me for it as I’ve work really hard
                  to understand what needs to be understood.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>

        <Container>
          <Techs />
        </Container>
      </Container>

      <Container>
        <Projects />
      </Container>

      <Container>
        <Contact />
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}

export default App;
