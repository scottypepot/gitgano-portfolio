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
    <Modal open={openCert} onClose={onCloseCert}>
      <Box
        sx={{
          position: "absolute",
          top: { xs: "55%", sm: "52%", md: "53%" },
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "92vw", sm: "85vw", md: "50vw" },
          maxWidth: { xs: "92vw", md: "95vw" },
          height: { xs: "85vh", md: "89vh" },
          p: { xs: 1, md: 1.5 },
          borderRadius: { xs: 4, md: 2 },
          bgcolor: "#24233b",
          zIndex: 14000, // put modal above navbar (navbar zIndex ~9999)
          boxShadow: "0px 10px 10px rgb(73, 70, 92)",
          transition: "0.5s",
          overflow: "hidden", // keep modal itself from scrolling
          boxSizing: "border-box",
        }}
      >
        <Fade in={openCert}>
          <Box
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            {/* Mac-style top bar */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 2,
                pl: 1,
              }}
            >
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  bgcolor: "#ff605c",
                }}
              />
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  bgcolor: "#ffbd44",
                }}
              />
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  bgcolor: "#00ca4e",
                }}
              />
              <Typography sx={{ color: "white", ml: 2, fontSize: 15 }}>
                CERTIFICATES
              </Typography>
            </Box>

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

            {/* Scrollable content */}
            <Box
              sx={{
                backgroundColor: "rgb(73, 70, 92)",
                borderRadius: 3,
                p: 2,
                flex: 1,
                overflowY: "auto", // vertical scrolling
              }}
            >
              {/* Categories */}
              <Box sx={{ display: "flex", gap: 2, overflowX: "auto", pb: 1 }}>
                {categories.map((cat) => (
                  <Button
                    key={cat}
                    variant="text"
                    disableRipple
                    sx={{
                      textTransform: "none",
                      color: selectedCategory === cat ? "#9153CA" : "white",
                      "&:hover": {
                        color: selectedCategory === cat ? "white" : "#9153CA",
                        bgcolor: "transparent !important",
                        transition: "color 0.3s ease",
                      },
                      fontSize: 20,
                      flexShrink: 0,
                      bgcolor: "transparent !important",
                    }}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </Button>
                ))}
              </Box>

              {/* Certificates images */}
              {filteredCerts.length > 0 ? (
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
                      sx={{ textAlign: "center", position: "relative" }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          width: { xs: 220, lg: 330 },
                          height: { xs: 200, lg: 330 },
                          cursor: "pointer",
                          "&:hover .hoverIcon": {
                            opacity: 1,
                          },
                        }}
                        onClick={() => window.open(cert.link, "_blank")}
                      >
                        <Box
                          component="img"
                          src={cert.image}
                          alt={cert.name}
                          sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            display: "block",
                          }}
                        />

                        {/* Hover icon */}
                        <Box
                          component="img"
                          src={hoverIcon}
                          alt="view"
                          className="hoverIcon"
                          sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: 50,
                            height: 50,
                            opacity: 0,
                            transition: "opacity 0.3s ease",
                          }}
                        />
                      </Box>

                      <Typography sx={{ fontSize: 14, color: "white", mt: 1 }}>
                        {cert.name}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <Typography color="white">No certificates found</Typography>
              )}
            </Box>
          </Box>
        </Fade>
      </Box>
    </Modal>
  );
}
