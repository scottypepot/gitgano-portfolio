import "./App.css";

import Navbar from "./navbar.jsx";
import Techs from "./techstack.jsx";
import Projects from "./projects.jsx";
import Contact from "./contact.jsx";
import Footer from "./footer.jsx";
import Truck from "./truck.jsx";
import { Container, Box } from "@mui/material";

import Home from "./home.jsx";
import About from "./about.jsx";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // default duration, can be overridden in elements
      once: false, // allow animations to repeat
      mirror: true, // triggers animation when scrolling up
    });
  }, []);
  return (
    <>
      <Container maxWidth={false}>
        <Navbar />

        <div data-aos="zoom-in" data-aos-anchor-placement="top-bottom">
          <Container
            id="home"
            maxWidth={false}
            sx={{ mt: { xs: 42, md: 50 }, mb: { xs: 40, md: 60, lg: 50 } }}
          >
            <Home />
          </Container>
        </div>

        <div data-aos="fade-up">
          <Container id="about" maxWidth={false}>
            <Truck />
            <About />
          </Container>
        </div>

        <div data-aos="zoom-in-down">
          <Container id="skills">
            <Techs />
          </Container>
        </div>

        <div data-aos="zoom-in-down">
          <Container id="projects">
            <Projects />
          </Container>
        </div>

        <Container id="contact">
          <Contact />
        </Container>

        <Container>
          <Footer />
        </Container>
      </Container>
    </>
  );
}

export default App;
