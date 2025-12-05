import "./App.css";

import Navbar from "./navbar.jsx";
import Techs from "./techstack.jsx";
import Projects from "./projects.jsx";
import Contact from "./contact.jsx";
import Footer from "./footer.jsx";
import Truck from "./truck.jsx";
import { Container } from "@mui/material";

import Home from "./home.jsx";
import About from "./about.jsx";

function App() {
  return (
    <>
      <Container maxWidth={false}>
        <Navbar />
        <Container
          id="home"
          maxWidth={false}
          sx={{ mt: { xs: 45, md: 50 }, mb: { xs: 55, md: 60, lg: 52 } }}
        >
          <Home />
        </Container>
        <Container id="about" maxWidth={false}>
          <Truck />
          <About />
        </Container>

        <Container id="skills">
          <Techs />
        </Container>
      </Container>

      <Container id="projects">
        <Projects />
      </Container>

      <Container id="contact">
        <Contact />
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}

export default App;
