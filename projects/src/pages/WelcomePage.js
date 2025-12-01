import { Box, Button, Typography } from "@mui/material";

const WelcomePage = ({ onSkip }) => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        background: "#0a0a0a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        overflow: "hidden",
      }}
    >
      {/* Glitchy welcome text */}
      <Typography
        variant="h1"
        fontWeight={900}
        sx={{
          fontSize: { xs: "3rem", md: "5rem" },
          color: "#ff1c1c",
          position: "relative",
          textTransform: "uppercase",
          letterSpacing: "4px",
          mb: 4,
          "&::before, &::after": {
            content: '"Welcome to FitZone"',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            overflow: "hidden",
            clip: "rect(0, 9999px, 0, 0)",
          },
          "&::before": {
            left: "-2px",
            textShadow: "2px 0 #00fff0",
            animation: "glitch1 2s infinite linear alternate-reverse",
          },
          "&::after": {
            left: "2px",
            textShadow: "-2px 0 #ff00ff",
            animation: "glitch2 3s infinite linear alternate-reverse",
          },
        }}
      >
        Welcome to FitZone
      </Typography>

      <Typography
        variant="h5"
        sx={{
          color: "#ccc",
          mb: 6,
          fontSize: { xs: "1.2rem", md: "1.6rem" },
        }}
      >
        Track workouts, discover exercises, and stay fit.
      </Typography>

      <Button
        variant="contained"
        onClick={onSkip}
        sx={{
          fontWeight: "bold",
          fontSize: "1.2rem",
          px: 5,
          py: 1.8,
          borderRadius: "50px",
          background: "#ff1c1c",
          color: "#fff",
          "&:hover": {
            background: "#ff3b3b",
            transform: "translateY(-2px)",
          },
          transition: "all 0.3s ease",
        }}
      >
        Get Started
      </Button>

      {/* CSS keyframes for glitch */}
      <style>
        {`
        @keyframes glitch1 {
          0% { clip: rect(0, 9999px, 0, 0); transform: translate(0);}
          10% { clip: rect(10px, 9999px, 60px, 0); transform: translate(-2px, -2px);}
          20% { clip: rect(85px, 9999px, 140px, 0); transform: translate(2px, 2px);}
          30% { clip: rect(20px, 9999px, 80px, 0); transform: translate(-2px, 1px);}
          40% { clip: rect(0px, 9999px, 50px, 0); transform: translate(2px, -1px);}
          50% { clip: rect(40px, 9999px, 100px, 0); transform: translate(0);}
          100% { clip: rect(0, 9999px, 0, 0); transform: translate(0);}
        }

        @keyframes glitch2 {
          0% { clip: rect(0, 9999px, 0, 0); transform: translate(0);}
          10% { clip: rect(30px, 9999px, 90px, 0); transform: translate(2px, 1px);}
          20% { clip: rect(10px, 9999px, 70px, 0); transform: translate(-2px, -1px);}
          30% { clip: rect(50px, 9999px, 110px, 0); transform: translate(1px, -2px);}
          40% { clip: rect(20px, 9999px, 60px, 0); transform: translate(-1px, 2px);}
          50% { clip: rect(0, 9999px, 0, 0); transform: translate(0);}
          100% { clip: rect(0, 9999px, 0, 0); transform: translate(0);}
        }
      `}
      </style>
    </Box>
  );
};

export default WelcomePage;
