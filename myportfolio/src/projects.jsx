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
    img: "/imgs/projects/capstoneconnect.png",
    details:
      "a platform that helps people with similar skills and project " +
      "interests find each other and work together. It lets users create " +
      "profiles, match with others, chat, and form teams. On the web, you" +
      "can use buttons to like or pass on profiles, while on mobile, you " +
      "can swipe. It sends notifications for matches and messages, making collaboration easy.",
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
        Recent Projects
      </Typography>

      <Container>
        <Box
          sx={{
            mt: 15,
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // column on small screens
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
          }}
        >
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
              flexDirection: { xs: "column", md: "row" }, // stack on small screens
              alignItems: "center",
              gap: 4,
              maxWidth: "900px",
              width: "100%",
            }}
          >
            <Box
              component="img"
              src={current.img}
              alt={current.name}
              sx={{
                width: { xs: "100%", sm: 300, md: 350 }, // responsive width
                height: "auto",
                borderRadius: 2,
              }}
            />

            <Typography
              component="div"
              sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}
            >
              <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                {current.name}
              </Typography>
              <br />
              {current.details}
            </Typography>
          </Box>

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
