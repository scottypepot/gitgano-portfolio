import { Container, Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";

export default function Home() {
  const [role, setRole] = useState("Software Developer");
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    const fullText = role + ".";
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < fullText.length) {
          setDisplayText(fullText.slice(0, displayText.length + 1));
          setIsTypingDone(false);
        } else {
          setIsTypingDone(true);
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setIsTypingDone(false);
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRole((prev) =>
            prev === "Software Developer"
              ? "UI/UX Designer"
              : "Software Developer"
          );
        }
      }
    }, 80);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, role]);
  return (
    <Box
      sx={{
        height: "10vh",
        p: 3,
        m: "auto",
        mt: 15,
        mb: 2,
        maxWidth: 1400,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "center",
          textAlign: { xs: "center", sm: "left" },
          gap: { xs: 2, sm: 3 },
          width: "100%",
        }}
      >
        {/* Text Column - Can move freely */}
        <Box
          sx={{
            flex: { xs: "1 1 100%", sm: "1 1 auto" },
          }}
        >
          <Typography
            component="span"
            sx={{
              display: "block",
              fontSize: { xs: "25px", sm: "30px", md: "50px", lg: "65px" },
              fontWeight: 600,
            }}
          >
            Hi, I'm Gitgano
          </Typography>
          <Typography
            component="span"
            sx={{
              display: "block",
              fontSize: { xs: "25px", sm: "30px", md: "50px", lg: "60px" },
              fontWeight: 600,
              minHeight: { xs: "35px", sm: "42px", md: "70px", lg: "84px" },
            }}
          >
            a{" "}
            <span
              style={{
                display: "inline-block",
                borderRight: "2px solid currentColor",
                paddingRight: "8px",
                minWidth: "auto",
                whiteSpace: "nowrap",
                animation: isTypingDone ? "blink 0.7s infinite" : "none",
              }}
            >
              {displayText}
            </span>
          </Typography>
          <Typography
            component="span"
            sx={{
              display: "block",
              fontSize: { xs: "18px", sm: "24px" },
              fontWeight: 400,
              mt: 1,
            }}
          >
            Welcome to my website{" "}
            <span
              style={{
                display: "inline-block",
                animation: "wave 1s ease-in-out infinite",
                transformOrigin: "70% 70%",
                fontSize: "1.3em",
              }}
            >
              👋
            </span>
          </Typography>
        </Box>

        {/* Profile Image - Static position */}
        <Box
          sx={{
            flex: { xs: "1 1 100%", sm: "0 0 auto" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: { xs: "150px", sm: "200px", md: 300, lg: 400 },
              height: { xs: "150px", sm: "200px", md: 300, lg: 400 },
              borderRadius: "50%",
              margin: "auto",
              "& img": {
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                display: "block",
                position: "relative",
                zIndex: 1,
              },
              "&::before": {
                content: '""',
                position: "absolute",
                zIndex: -1,
                top: -11,
                left: -10,
                width: "calc(100% + 20px)",
                height: "calc(100% + 20px)",
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, #0400ff 0%, #8800ff 35%, #d100ff 100%)",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                zIndex: -2,
                top: -15,
                left: -16,
                width: "calc(100% + 30px)",
                height: "calc(100% + 30px)",
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, #0400ff 0%, #8800ff 35%, #d100ff 100%)",
                filter: "blur(20px)",
                animation: "cardafter 2.5s infinite forwards",
              },
            }}
          >
            <img src="/imgs/Profile.png" alt="profile-image" />
          </Box>
        </Box>
      </Box>

      {/* Keyframes in JSX */}
      <style>
        {`
      @keyframes cardafter {
        0% { opacity: 1; }
        50% { opacity: 0; }
        100% { opacity: 1; }
      }
      @keyframes blink {
        0%, 49% { border-right-color: currentColor; }
        50%, 100% { border-right-color: transparent; }
      }
      @keyframes wave {
        0% { transform: rotate(0deg); }
        10% { transform: rotate(14deg); }
        20% { transform: rotate(-8deg); }
        30% { transform: rotate(14deg); }
        40% { transform: rotate(-4deg); }
        50% { transform: rotate(10deg); }
        60% { transform: rotate(0deg); }
        100% { transform: rotate(0deg); }
      }
    `}
      </style>
    </Box>
  );
}
