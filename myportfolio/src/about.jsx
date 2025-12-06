import Resume from "./ResumeModal.jsx";
import Certificate from "./certificates.jsx";
import { Container, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function About() {
  const [openCv, setOpen] = useState(false);
  const [openCert, setOpenCert] = useState(false);

  const handleOpenCv = () => setOpen(true);
  const handleCloseCv = () => setOpen(false);

  const handleOpenCert = () => setOpenCert(true);
  const handleCloseCert = () => setOpenCert(false);
  return (
    <Container>
      {/* === MAC WINDOW CARD === */}
      <Box
        sx={{
          bgcolor: "#0b0e0fff",
          borderRadius: 2,
          p: 0,
          m: "auto",
          maxWidth: 1100,
          boxShadow: "0 0 15px rgba(145, 83, 202, 0.6)",
          overflow: "hidden",
        }}
      >
        {/* === TOP TOOLBAR WITH 3 CIRCLES === */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            p: "10px",
          }}
        >
          <Box
            sx={{
              width: 12,
              height: 12,
              bgcolor: "#ff605c",
              borderRadius: "50%",
            }}
          />
          <Box
            sx={{
              width: 12,
              height: 12,
              bgcolor: "#ffbd44",
              borderRadius: "50%",
            }}
          />
          <Box
            sx={{
              width: 12,
              height: 12,
              bgcolor: "#00ca4e",
              borderRadius: "50%",
            }}
          />
        </Box>

        {/* === YOUR ORIGINAL CONTENT === */}
        <Box
          sx={{
            bgcolor: "rgba(60, 60, 60, 0.6)",
            borderRadius: 0,
            p: 3,
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
                src="/imgs/Profile.png"
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
                  "& .MuiButtonGroup-grouped:not(:last-of-type)": {
                    border: "none",
                  },
                }}
              >
                {/* Facebook Button */}
                <Button
                  disableRipple
                  disableFocusRipple
                  variant="text"
                  sx={{
                    width: 56,
                    height: 56,
                    p: 0,
                    borderRadius: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
                    cursor: "pointer",
                    transition: "all 0.3s ease-out",
                    "&:hover": {
                      transform: "scale(1.1) translateY(-8px)",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.7)",
                    },
                  }}
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/scottbenzer.gitgano.9",
                      "_blank"
                    )
                  }
                >
                  <Box
                    component="img"
                    src="imgs/facebook-logo.png"
                    sx={{ width: 32, height: 32 }}
                  />
                </Button>

                {/* GitHub Button */}
                <Button
                  disableRipple
                  disableFocusRipple
                  variant="text"
                  sx={{
                    width: 56,
                    height: 56,
                    p: 0,
                    borderRadius: 3,
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
                    cursor: "pointer",
                    transition: "all 0.3s ease-out",
                    "&:hover": {
                      transform: "scale(1.1) translateY(-8px)",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.7)",
                    },
                  }}
                  onClick={() =>
                    window.open("https://github.com/scottypepot", "_blank")
                  }
                >
                  <Box
                    component="img"
                    src="imgs/github-logo.png"
                    sx={{ width: 32, height: 32 }}
                  />
                </Button>

                {/* LinkedIn Button */}
                <Button
                  disableRipple
                  disableFocusRipple
                  variant="text"
                  sx={{
                    width: 56,
                    height: 56,
                    p: 0,
                    borderRadius: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
                    cursor: "pointer",
                    transition: "all 0.3s ease-out",
                    "&:hover": {
                      transform: "scale(1.1) translateY(-8px)",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.7)",
                    },
                  }}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/scott-gitgano-7830a9335/",
                      "_blank"
                    )
                  }
                >
                  <Box
                    component="img"
                    src="imgs/linkedin-logo.png"
                    sx={{ width: 32, height: 32 }}
                  />
                </Button>
              </ButtonGroup>

              <Box sx={{ mt: 2 }}>
                <Button
                  onClick={handleOpenCv}
                  disableRipple
                  sx={{
                    position: "relative",
                    borderRadius: "0.75em",
                    bgcolor: "black",
                    padding: 0,
                    minWidth: 0,
                    textTransform: "none",
                    cursor: "pointer",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      px: 5,
                      py: 1,
                      borderRadius: "0.75em",
                      bgcolor: "white", // the top layer
                      color: "black",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      transform: "translateY(-0.2em)", // initial lift
                      transition: "transform 0.1s ease",
                      border: "2px solid black",
                      boxSizing: "border-box",
                      "&:hover": {
                        transform: "translateY(-0.33em)", // hover lift
                      },
                      "&:active": {
                        transform: "translateY(0)", // press down
                      },
                    }}
                  >
                    View My CV
                    <Box
                      component="img"
                      src="imgs/hand.png"
                      sx={{ width: 20, ml: 1 }}
                    />
                  </Box>
                </Button>
              </Box>

              <Box sx={{ mt: 2 }}>
                <Button
                  onClick={handleOpenCert}
                  disableRipple
                  sx={{
                    position: "relative",
                    borderRadius: "0.75em",
                    bgcolor: "black",
                    padding: 0,
                    minWidth: 0,
                    textTransform: "none",
                    cursor: "pointer",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      px: 2.5,
                      py: 1,
                      borderRadius: "0.75em",
                      bgcolor: "white", // top layer
                      color: "black",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      transform: "translateY(-0.2em)", // initial lift
                      transition: "transform 0.1s ease",
                      border: "2px solid black",
                      boxSizing: "border-box",
                      "&:hover": {
                        transform: "translateY(-0.33em)", // hover lift
                      },
                      "&:active": {
                        transform: "translateY(0)", // press down
                      },
                    }}
                  >
                    View Certificates
                    <Box
                      component="img"
                      src="imgs/hand.png"
                      sx={{ width: 20, ml: 1 }}
                    />
                  </Box>
                </Button>
              </Box>
            </Grid>

            {/* RIGHT COLUMN */}
            <Grid size={12}>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.9,
                  overflowWrap: "break-word",
                  fontSize: { xs: 13, sm: 15, md: 20, lg: 20 },
                  ml: { xs: 1, sm: 2, md: 3 },
                  pr: { xs: 1, sm: 2, md: 3 },
                  textAlign: "left",
                  color: "#e0e0e0",
                  letterSpacing: 0.4,
                  maxWidth: "90%",
                  borderLeft: "3px solid rgba(171, 82, 255, 0.4)",
                  pl: 3,
                  py: 1,
                }}
              >
                Hi, I'm <strong>Scott Benzer Gitgano</strong>, a
                front-end–focused web developer from Cebu City and an
                Information Technology student at Cebu Institute of Technology –
                University. I specialize in building clean, intuitive, and
                user-centered web interfaces using JavaScript, ReactJS, and
                Java.
                <br />
                <br />
                I’ve worked on several academic and hackathon projects—including
                <strong> GalacticPulse</strong>,{" "}
                <strong>CapstoneConnect</strong>, and
                <strong> FitTrack</strong>—where I developed key front-end
                features such as profile browsing, matching workflows, chat
                interfaces, real-time notifications, and workout tracking
                dashboards.
                <br />
                <br />
                Through these projects, I’ve gained strong experience in UI/UX
                design, responsive layouts, and building components that feel
                smooth and modern. I enjoy creating new projects, learning new
                technologies, and collaborating with people who love turning
                ideas into reality.
                <br />
                <br />
                Even though I’m still growing as a developer, I work hard, learn
                fast, and always aim to deliver high-quality work. If you're
                looking for someone dedicated, curious, and passionate about
                front-end development—I’m excited to connect and build something
                great together.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* MODALS */}
      <Certificate openCert={openCert} onCloseCert={handleCloseCert} />
      <Resume openCv={openCv} onCloseCv={handleCloseCv} />
    </Container>
  );
}
