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
                Bachelor of Science in Information Technology. I really enjoyed
                building or creating new projects and especially meeting new
                people, so relax I’m really a nice a guy where you can talk and
                discuss at me anytime. I may lack experience for frontend but
                you can trust me for it as I’ve work really hard to understand
                what needs to be understood.
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
