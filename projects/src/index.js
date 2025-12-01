import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import WelcomePage from "./pages/WelcomePage";

const RootComponent = () => {
  const [showWelcome, setShowWelcome] = useState(true);

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

  return (
    <BrowserRouter>
      {showWelcome ? <WelcomePage onSkip={handleSkip} /> : <App />}
    </BrowserRouter>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RootComponent />);
