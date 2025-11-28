import { Container, Box, Typography, Stack } from "@mui/material";
import { useState } from "react";
const projectData = [
  {
    name: "FitTrack",
    img: "/imgs/projects/project1.png",
    details:
      "A platform that helps users track their gym activity by " +
      "allowing them to input their workout type, workout goals," +
      "and rest times. They can also upload photos, share them with others" +
      " and receive likes or comments on their posts.",
  },
  {
    name: "CapstoneConnect",
    img: "/imgs/projects/project1.png",
    details:
      "a platform that helps people with similar skills and project " +
      "interests find each other and work together. It lets users create " +
      "profiles, match with others, chat, and form teams. On the web, you" +
      "can use buttons to like or pass on profiles, while on mobile, you " +
      "can swipe. It sends notifications for matches and messages, making collaboration easy.",
  },
  {
    name: "GalacticPulse",
    img: "/imgs/projects/project1.png",
    details:
      "A hackathon challenge which we're challenged " +
      "to recreate the game galactic pulse",
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const project = projectData;

  const nextProject = () => {
    setIndex((prev) => (prev + 1) % project.length);
  };

  const prevProject = () => {
    setIndex((prev) => (prev - 1 + project.length) % project.length);
  };

  const current = project[index];

  return (
    <>
      <Typography sx={{ mt: 30 }} variant="h4" textAlign="center">
        Projects
      </Typography>

      <Container>
        <Box
          sx={{
            mt: 15,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
          }}
        >
          {/* LEFT BUTTON (Replace with your own image later) */}
          <Box
            onClick={prevProject}
            sx={{
              padding: "12px 20px",
              background: "lightgray",
              borderRadius: "8px",
              cursor: "pointer",
              userSelect: "none",
              fontWeight: "bold",
            }}
          >
            {"<"}
          </Box>

          {/* CONTENT */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
              maxWidth: "900px",
            }}
          >
            <Box
              component="img"
              src={current.img}
              alt={current.name}
              sx={{ width: 350, height: "auto" }}
            />

            <Typography sx={{ flex: 1, textAlign: "left" }}>
              <strong>{current.name}</strong>
              <br />
              {current.details}
            </Typography>
          </Box>

          {/* RIGHT BUTTON (Replace with your own image later) */}
          <Box
            onClick={nextProject}
            sx={{
              padding: "12px 20px",
              background: "lightgray",
              borderRadius: "8px",
              cursor: "pointer",
              userSelect: "none",
              fontWeight: "bold",
            }}
          >
            {">"}
          </Box>
        </Box>
      </Container>
    </>
  );
}
