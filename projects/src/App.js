import { Box } from "@mui/material";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import About from "./pages/About";
import Auth from "./pages/Auth";
import Contact from "./pages/Contact";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);

  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/exercise/:id"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <ExerciseDetail />
            </PrivateRoute>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<Auth handleLogin={handleLogin} />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
