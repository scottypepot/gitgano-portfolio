import "./App.css";
import Techs from "./techstack.jsx";
import Projects from "./projects.jsx";
import Contact from "./contact.jsx";
import { Container, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

function App() {
  return (
    <>
      <Container maxWidth={false} sx={{ padding: 0, ml: 0 }}>
        <div className="navbar">
          <ul>
            <li>Scott Gitgano</li>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
          </ul>
        </div>
        <Container maxWidth={false} sx={{ mt: 23, mb: 74 }}>
          <Box sx={{ height: "10vh" }}>
            <Typography
              component="div"
              sx={{ fontSize: 60, textAlign: "left" }}
            >
              <ul className="body-style">
                <li style={{ margin: 0, padding: 0, lineHeight: 1.2 }}>
                  <span
                    style={{
                      display: "block",
                      fontSize: "60px",
                      fontWeight: 700,
                    }}
                  >
                    Hi, I'm Gitgano
                  </span>
                  <span
                    style={{
                      fontSize: "60px",
                      fontWeight: 700,
                    }}
                  >
                    a Software Developer.
                  </span>
                  <span
                    style={{
                      display: "block",
                      fontSize: "24px",
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
              height: { xs: "78vh", sm: " 88vh", md: "90vh", lg: "80vh" }, // responsive height
              bgcolor: "rgba(60, 60, 60, 0.6)",
              mb: 25,
              borderRadius: 8,
            }}
          >
            <Grid container spacing={2} columns={16}>
              <Grid size={4}>
                <Box
                  component="img"
                  src="imgs/profile.png"
                  alt="profile-image"
                  sx={{
                    width: 180,
                    height: "auto",
                    borderRadius: "50%",
                    display: "block",
                    margin: "0 auto",
                    mt: 6.5,
                  }}
                />
                <ButtonGroup
                  variant="text"
                  sx={{
                    border: "none",
                    "& .MuiButton-root": {
                      border: "none",
                      backgroundColor: "transparent",
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    },
                    mt: 2.5,
                  }}
                >
                  <Button disableRipple>
                    <Box
                      component="img"
                      src="imgs/facebook-logo.png"
                      alt="Profile"
                      sx={{ width: 40, height: "auto" }}
                    />
                  </Button>
                  <Button disableRipple>
                    <Box
                      component="img"
                      src="imgs/github-logo.png"
                      alt="Profile"
                      sx={{ width: 40, height: "auto" }}
                    />
                  </Button>
                  <Button disableRipple>
                    <Box
                      component="img"
                      src="imgs/linkedin-logo.png"
                      alt="Profile"
                      sx={{ width: 40, height: "auto" }}
                    />
                  </Button>
                </ButtonGroup>
                <Box sx={{ mt: 2.5 }}>
                  <Button
                    sx={{
                      fontSize: 20,
                      color: "black",
                      bgcolor: "white",
                      padding: 0,
                      paddingInline: 4,
                      borderRadius: 2.5,
                      textTransform: "none",
                    }}
                  >
                    View My CV{" "}
                    <Box
                      component="img"
                      src="imgs/hand.png"
                      alt="hand-icon"
                      sx={{ width: 22, height: "auto", ml: 1.3 }}
                    />
                  </Button>
                </Box>
              </Grid>
              <Grid size={12}>
                <Box>
                  <Typography
                    sx={{
                      mt: { xs: 4, sm: 7, md: 10, lg: 12 },
                      mr: { xs: 0, sm: 3, md: 6 },
                      ml: { xs: 13, sm: 10, md: 4 }, // ✅ Added left margin here
                      fontSize: { xs: 16, sm: 19, md: 29, lg: 31 },
                      textAlign: "left",
                      lineHeight: 1.6,
                    }}
                  >
                    Hi everyone! Good day my name is Scott Benzer Gitgano a
                    front-end based web developer from Cebu City and Studying at
                    Cebu Institute of Technology - University, where i majored
                    in Bachelor of Science in Information Technology. I really
                    enjoyed building or creating new projects and especially
                    meeting new people, so relax I’m really a nice a guy where
                    you can talk and discuss at me anytime. I may lack
                    experience for frontend but you can trust me for it as I’ve
                    work really hard to understand what needs to be understood.
                  </Typography>
                </Box>
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
    </>
  );
}

export default App;
