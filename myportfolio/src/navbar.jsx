import { Button, Box } from "@mui/material";
import { useState, useEffect } from "react";

const scrollToSection = (id, offset = 0) => {
  const element = document.getElementById(id);
  if (element) {
    const top = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: top - offset,
      behavior: "smooth",
    });
  }
};

export default function Navbar() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShowNav(false); // scrolling down
    } else {
      setShowNav(true); // scrolling up
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <Box
      sx={{
        position: "fixed",
        top: showNav ? 0 : "-80px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: 2,
        px: 4,
        bgcolor: "rgba(0,0,0,1)",
        transition: "top 0.3s",
        zIndex: 9999,
      }}
    >
      {/* Left side - your name */}
      <Button
        variant="text"
        sx={{
          textTransform: "none",
          color: "white",
          fontWeight: 600,
          fontSize: { xs: 15, sm: 17, md: 25 },
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Scott Gitgano
      </Button>

      {/* Right side - navigation buttons */}
      <Box
        sx={{
          display: "flex",
          gap: { xs: 1, lg: 3 },
          pr: { xs: 9, sm: 9, md: 13, lg: 18 },
        }}
      >
        <Button
          variant="text"
          sx={{
            textTransform: "none",
            color: "white",
            fontSize: { xs: 15, sm: 17, md: 25 },
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Home
        </Button>
        <Button
          variant="text"
          sx={{
            textTransform: "none",
            color: "white",
            fontSize: { xs: 15, sm: 17, md: 25 },
          }}
          onClick={() => scrollToSection("about", 150)}
        >
          About
        </Button>
        <Button
          variant="text"
          sx={{
            textTransform: "none",
            color: "white",
            fontSize: { xs: 15, sm: 17, md: 25 },
          }}
          onClick={() => scrollToSection("skills", 90)}
        >
          Skills
        </Button>
        <Button
          variant="text"
          sx={{
            textTransform: "none",
            color: "white",
            fontSize: { xs: 15, sm: 17, md: 25 },
          }}
          onClick={() => scrollToSection("projects", 100)}
        >
          Projects
        </Button>
        <Button
          variant="text"
          sx={{
            textTransform: "none",
            color: "white",
            fontSize: { xs: 15, sm: 17, md: 25 },
          }}
          onClick={() =>
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: "smooth",
            })
          }
        >
          Contact
        </Button>
      </Box>
    </Box>
  );
}
