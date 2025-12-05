import { Container, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

const techs = [
  {
    name: "Java",
    img: "/imgs/techs/java.png",
  },
  {
    name: "JavaScript",
    img: "/imgs/techs/js.png",
  },
  {
    name: "ReactJS",
    img: "/imgs/techs/C.png",
  },
  {
    name: "Vite",
    img: "/imgs/techs/react.png",
  },
  {
    name: "Springboot",
    img: "/imgs/techs/spring.png",
  },
  {
    name: "Git",
    img: "/imgs/techs/vite.png",
  },
  {
    name: "Git",
    img: "/imgs/techs/mui.png",
  },
  {
    name: "Git",
    img: "/imgs/techs/git.png",
  },
];
//unya nani after ma implement tanan
// function techProp() {
//   return (
//     <>
//       <Container></Container>
//     </>
//   );
// }

export default function techstack() {
  const tech = techs;
  const numTechs = tech.length;
  return (
    <Container sx={{ py: 4 }}>
      <Typography
        variant="h4"
        mb={10}
        sx={{ textAlign: "center", mt: 20, mb: 20 }}
      >
        -- Tech Stacks --
      </Typography>

      {numTechs > 0 ? (
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          {/* THE 3D ROTATING CAROUSEL */}
          <Box className="card-3d">
            {techs.map((tech, index) => (
              <div key={index}>
                <Box
                  component="img"
                  src={tech.img}
                  alt={tech.name}
                  sx={{
                    width: 60,
                    height: 60,
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
          </Box>
        </Container>
      ) : (
        <Typography>bleh</Typography>
      )}
    </Container>
  );
}
