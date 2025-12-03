import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ExerciseDetail from "./pages/ExerciseDetail";
import Auth from "./pages/Auth";
import WelcomePage from "./pages/WelcomePage";
import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const hasSeenWelcome = sessionStorage.getItem("hasSeenWelcome");

    if (hasSeenWelcome) {
      setShowWelcome(false);
    } else {
      const timer = setTimeout(() => {
        setShowWelcome(false);
        sessionStorage.setItem("hasSeenWelcome", "true");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleSkip = () => {
    setShowWelcome(false);
    sessionStorage.setItem("hasSeenWelcome", "true");
  };

  const handleLogin = () => setIsAuthenticated(true);

  if (showWelcome) return <WelcomePage onSkip={handleSkip} />;

  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<Auth handleLogin={handleLogin} />} />

        {/* Only protect detail page */}
        <Route
          path="/exercise/:id"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <ExerciseDetail />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
