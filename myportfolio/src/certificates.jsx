import { Modal, Typography, Box, Container, Grid, Button } from "@mui/material";
import Fade from "@mui/material/Fade";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const hoverIcon = "/imgs/eyes.png";

const cert = [
  {
    name: "AI + You_Gemini for Developers",
    image: "/imgs/certs/gemini.png",
    category: "Web Development",
    link: "https://drive.google.com/file/d/1yVOdr56urN91mFs9xlP7eSsx_wN1abwN/view?usp=sharing",
  },
  {
    name: "𝗖𝗹𝗼𝘂𝗱𝘀𝘆𝗻𝗰: 𝗙𝗶𝗿𝗲𝗯𝗮𝘀𝗲 𝟭𝟬𝟭",
    image: "/imgs/certs/firebase.jpg",
    category: "Web Development",
    link: "https://drive.google.com/file/d/1yUdOZAv8F13P7lNOrOCs7nSYwsO_IwTF/view?usp=sharing",
  },
  {
    name: "Hackathon by Proweaver, Inc. - PromptQuest",
    image: "/imgs/certs/hackathon.png",
    category: "Web Development",
    link: "https://drive.google.com/file/d/1PTop4q_od2YL1TSSLaoIWVez7uv64967/view?usp=sharing",
  },
  {
    name: "AWS Academy - Cloud Foundation",
    image: "/imgs/certs/cloudfoundation.png",
    category: "Cloud",
    link: "https://drive.google.com/file/d/1mowIxU2uijafP74TJPESHVkIt-tAn3v1/view?usp=sharing",
  },
  {
    name: "AWS Academy - Cloud Architecting",
    image: "/imgs/certs/cloudarchitecting.png",
    category: "Cloud",
    link: "https://drive.google.com/file/d/1hCPRjp7zA3qFvXu6RG0F70mY_IbOZUYP/view?usp=sharing",
  },
];

const categories = ["All", "Web Development", "Cloud"];

export default function Certificates({ openCert, onCloseCert }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCerts =
    selectedCategory === "All"
      ? cert
      : cert.filter(
          (c) => c.category.toLowerCase() === selectedCategory.toLowerCase()
        );
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
            overflow: "auto",
          }}
        >
          <Fade in={openCert}>
            <Box>
              <Typography fontWeight={600} fontSize={30} textAlign="center">
                CERTIFICATES
              </Typography>
              <IconButton
                onClick={onCloseCert}
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  zIndex: 10,
                  bgcolor: "rgba(0,0,0,0.2)",
                  "&:hover": { bgcolor: "rgba(0,0,0,0.4)" },
                }}
              >
                <CloseIcon sx={{ color: "white" }} />
              </IconButton>
              <Container sx={{ mt: 3 }}>
                <Grid container justifyContent="center" spacing={2}>
                  {categories.map((cat) => (
                    <Grid item key={cat}>
                      <Button
                        variant="text"
                        disableRipple
                        sx={{
                          textTransform: "none",
                          color: selectedCategory === cat ? "wheat" : "white",
                          "&:hover": {
                            color: selectedCategory === cat ? "white" : "wheat",
                            bgcolor: "transparent !important",
                            transition: "color 0.3s ease",
                          },
                          fontSize: 20,
                          bgcolor: "transparent !important",
                        }}
                        onClick={() => setSelectedCategory(cat)}
                      >
                        {cat}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </Container>
              {filteredCerts.length > 0 ? (
                <Container>
                  <Grid
                    container
                    rowSpacing={8}
                    sx={{ mt: 5 }}
                    justifyContent="center"
                    alignItems="flex-start"
                  >
                    {filteredCerts.map((cert, index) => (
                      <Grid
                        key={index}
                        sx={{
                          textAlign: "center",
                        }}
                        size={{ xs: 6, sm: 6, md: 6, lg: 4 }}
                      >
                        <Box
                          onClick={() => window.open(cert.link, "_blank")}
                          sx={{
                            position: "relative",
                            cursor: "pointer",
                            transition: "0.3s",
                            "&:hover": {
                              transform: "scale(1.05)",
                            },
                            "&:hover .certImage": {
                              opacity: 0.3,
                            },
                            "&:hover .hoverIcon": {
                              opacity: 1,
                            },
                          }}
                        >
                          <Box
                            component="img"
                            className="certImage"
                            src={cert.image}
                            alt={cert.name}
                            sx={{
                              width: { xs: 220, lg: 330 },
                              height: { xs: 200, lg: 330 },
                              objectFit: "contain",
                            }}
                          />
                          <Box
                            className="hoverIcon"
                            sx={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              opacity: 0,
                              transition: "0.3s",
                              fontSize: 50,
                            }}
                          >
                            <img src={hoverIcon} width={50} />
                          </Box>
                        </Box>

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
