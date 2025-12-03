import { Modal, Typography, Box, Container, Grid } from "@mui/material";
import Fade from "@mui/material/Fade";

const cert = [
  {
    name: "AI + You_Gemini for Developers",
    image: "/imgs/certs/gemini.png",
  },
  {
    name: "Hackathon by Proweaver, Inc. - PromptQuest",
    image: "/imgs/certs/hackathon.png",
  },
  {
    name: "AWS Academy - Cloud Foundation",
    image: "/imgs/certs/cloudfoundation.png",
  },
  {
    name: "AWS Academy - Cloud Architecting",
    image: "/imgs/certs/cloudarchitecting.png",
  },
];
export default function Certificates({ openCert, onCloseCert }) {
  const certs = cert;
  const certData = certs.length;

  return (
    <>
      <Modal open={openCert} onClose={onCloseCert}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "95vw", md: "50vw" },
            maxWidth: "95vw",
            height: { xs: "80vh", md: "95vh" },
            p: 2,
            borderRadius: 2,
            bgcolor: "rgba(32, 32, 32, 1)",
          }}
        >
          <Fade in={openCert}>
            <Box>
              <Typography fontWeight={600} fontSize={30}>
                CERTIFICATES
              </Typography>
              {certData > 0 ? (
                <Container>
                  <Grid container>
                    {cert.map((cert, index) => (
                      <Grid
                        key={index}
                        sx={{
                          textAlign: "center",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        size={{ xs: 6, sm: 6, md: 6, lg: 3.7 }}
                      >
                        <Box
                          component="img"
                          src={cert.image}
                          alt={cert.name}
                          sx={{
                            width: { xs: 200 },
                            height: { xs: 200 },
                            objectFit: "contain",
                          }}
                        />
                        <Typography sx={{ fontSize: 14, color: "white" }}>
                          {cert.name}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Container>
              ) : (
                <Typography>BLEH</Typography>
              )}
            </Box>
          </Fade>
        </Box>
      </Modal>
    </>
  );
}
