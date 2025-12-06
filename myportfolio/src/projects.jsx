import { Container, Box, Typography, Stack } from "@mui/material";
import "./Projects.css";
const projectData = [
  {
    name: "FitTrack",
    img: "/imgs/projects/project1.png",
    details:
      "A platform that helps users track their gym activity by " +
      "allowing them to input their workout type, workout goals," +
      "and rest times. They can also upload photos, share them with others" +
      " and receive likes or comments on their posts.",
    link: "https://github.com/scottypepot/FitTrack",
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
    link: "https://capstoneconnect.vercel.app/",
  },
  {
    name: "Pizza Menu",
    img: "/imgs/projects/pizzamenu.png",
    details:
      "A simple and user-friendly pizza menu application that allows users to browse through a variety of pizza options, customize their orders with different toppings and sizes, and view prices. This app serves as my practice project for learning JavaScript basics and props usage.",
    link: "https://github.com/scottypepot/PizzaMenu",
  },
];

export default function Projects() {
  return (
    <>
      <Typography sx={{ mt: 30 }} variant="h4" textAlign="center">
        Recent Projects
      </Typography>

      <Container>
        <Box
          sx={{
            mt: 10,
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 5,
          }}
        >
          {projectData.map((proj, i) => (
            <div
              key={i}
              className="brutalist-card"
              style={{ width: "380px" }}
              data-aos="zoom-in-up" // AOS animation
              data-aos-delay={i * 150} // staggered delay (150ms per card)
              data-aos-duration="800" // animation duration (optional)
            >
              {/* TOP FLEX: image on top, name wraps below if needed */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  borderBottom: "2px solid #000",
                  paddingBottom: "1rem",
                  marginBottom: "1rem",
                  gap: "1rem",
                }}
              >
                {/* IMAGE */}
                <img
                  src={proj.img}
                  alt={proj.name}
                  style={{
                    width: "380px",
                    height: "200px",
                    objectFit: "cover",
                    border: "3px solid #000",
                    boxShadow: "5px 5px 0 #000",
                    flexShrink: 0,
                  }}
                />

                {/* NAME */}
                <div
                  style={{
                    fontWeight: 900,
                    color: "#000",
                    fontSize: "1.2rem",
                    textTransform: "uppercase",
                    flexBasis: "100%",
                    wordWrap: "break-word",
                  }}
                >
                  {proj.name}
                </div>
              </div>

              {/* DETAILS */}
              <div
                className="brutalist-card__message"
                style={{ fontWeight: 600 }}
              >
                {proj.details}
              </div>

              {/* BUTTON */}
              <div className="brutalist-card__actions">
                <a
                  href={proj.link}
                  className="brutalist-card__button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </Box>
      </Container>
    </>
  );
}
