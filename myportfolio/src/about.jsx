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
      <Box
        sx={{
          bgcolor: "rgba(60, 60, 60, 0.6)",
          mb: 25,
          borderRadius: 5,
          p: 3,
          m: "auto",
          maxWidth: 1100,
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
              <Button
                disableRipple
                disableFocusRipple
                variant="text"
                sx={{
                  bgcolor: "transparent",
                  "&:hover": {
                    bgcolor: "black",
                    opacity: "bgcolor 0.1 ease",
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
                  sx={{
                    width: 32,
                  }}
                />
              </Button>
              <Button
                disableRipple
                disableFocusRipple
                variant="text"
                sx={{
                  bgcolor: "transparent",
                  "&:hover": {
                    bgcolor: "black",
                    opacity: "bgcolor 0.1 ease",
                  },
                }}
                onClick={() =>
                  window.open("https://github.com/scottypepot", "_blank")
                }
              >
                <Box
                  component="img"
                  src="imgs/github-logo.png"
                  sx={{ width: 32 }}
                />
              </Button>
              <Button
                disableRipple
                disableFocusRipple
                variant="text"
                sx={{
                  bgcolor: "transparent",
                  "&:hover": {
                    bgcolor: "black",
                    opacity: "bgcolor 0.1 ease",
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
                  sx={{ width: 32 }}
                />
              </Button>
            </ButtonGroup>

            <Box sx={{ mt: 2 }}>
              <Button
                onClick={handleOpenCv}
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
                onClick={handleOpenCert}
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
              Hi everyone! Good day my name is Scott Benzer Gitgano a front-end
              based web developer from Cebu City and Studying at Cebu Institute
              of Technology - University, where i majored in Bachelor of Science
              in Information Technology. I really enjoyed building or creating
              new projects and especially meeting new people, so relax I’m
              really a nice a guy where you can talk and discuss at me anytime.
              I may lack experience for frontend but you can trust me for it as
              I’ve work really hard to understand what needs to be understood.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Certificate openCert={openCert} onCloseCert={handleCloseCert} />
      <Resume openCv={openCv} onCloseCv={handleCloseCv} />
    </Container>
  );
}
