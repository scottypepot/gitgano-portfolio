import {
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";

const scrollToSection = (id, offset = 0) => {
  const element = document.getElementById(id);
  if (element) {
    const top = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: top - offset, behavior: "smooth" });
  }
};

export default function Navbar() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) setShowNav(false);
    else setShowNav(true);
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const navItems = [
    {
      label: "Home",
      action: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    },
    { label: "About", action: () => scrollToSection("about", 150) },
    { label: "Skills", action: () => scrollToSection("skills", 90) },
    { label: "Projects", action: () => scrollToSection("projects", 100) },
    {
      label: "Contact",
      action: () =>
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        }),
    },
  ];

  return (
    <Box
      sx={{
        position: "fixed",
        top: showNav ? 0 : "-80px",
        left: 0,
        width: "100%",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: 2,
        px: { xs: 1, sm: 2, md: 10 },
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
          fontWeight: 600,
          fontSize: { xs: 15, sm: 17, md: 25 },
          color: "#ffffffff",
          cursor: "pointer",
          transition: "color 0.3s ease",
          "&:hover": { color: "#9153CA" },
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Scott Gitgano
      </Button>

      {/* Right side - desktop nav */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          gap: { xs: 1, lg: 3 },
          pr: { xs: 9, sm: 9, md: 13, lg: 5 },
        }}
      >
        {navItems.map((btn) => (
          <Button
            key={btn.label}
            variant="text"
            sx={{
              textTransform: "none",
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontWeight: 600,
              fontSize: { xs: 15, sm: 17, md: 25 },
              color: "#fff",
              cursor: "pointer",
              overflow: "hidden",
              transition: "color 0.3s ease",
              "&:hover": { color: "#9153CA" },
            }}
            onClick={btn.action}
          >
            {btn.label}
          </Button>
        ))}
      </Box>

      {/* Mobile hamburger */}
      <IconButton
        sx={{ display: { xs: "flex", md: "none" }, color: "#fff" }}
        onClick={() => setMobileOpen(true)}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      >
        <List sx={{ width: 250, bgcolor: "#24233b", height: "100%" }}>
          {navItems.map((btn) => (
            <ListItem key={btn.label} disablePadding>
              <ListItemButton
                onClick={() => {
                  btn.action();
                  setMobileOpen(false);
                }}
              >
                <ListItemText
                  primary={btn.label}
                  primaryTypographyProps={{
                    color: "white",
                    fontWeight: 600,
                    fontSize: 18,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
