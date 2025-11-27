import { Container, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

const techs = [
  {
    name: "Java",
    img: "/imgs/facebook-logo.png",
  },
  {
    name: "JavaScript",
    img: "/imgs/facebook-logo.png",
  },
  {
    name: "ReactJS",
    img: "/imgs/facebook-logo.png",
  },
  {
    name: "Vite",
    img: "/imgs/facebook-logo.png",
  },
  {
    name: "Springboot",
    img: "/imgs/facebook-logo.png",
  },
  {
    name: "Git",
    img: "/imgs/facebook-logo.png",
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
      <Typography variant="h4" mb={10}>
        -- Tech Stacks --
      </Typography>

      {numTechs > 0 ? (
        <Container>
          <Grid
            container
            columnSpacing={1}
            rowSpacing={6}
            justifyContent="center"
          >
            {techs.map((tech, index) => (
              <Grid
                key={index}
                sx={{ textAlign: "center" }}
                size={{ xs: 4, sm: 4, md: 3 }}
              >
                <Box
                  component="img"
                  src={tech.img}
                  alt={tech.name}
                  sx={{ width: 100, height: 100, objectFit: "contain" }}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      ) : (
        <Typography>bleh</Typography>
      )}
    </Container>
  );
}
