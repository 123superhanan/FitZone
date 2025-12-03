import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./auth.css";
const Auth = ({ handleLogin }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
    navigate(from, { replace: true });
  };

  return (
    <div className="login">
      <div className="login-form">
        <h1>{isSignUp ? "Sign Up" : "Sign In"}</h1>
        <form onSubmit={handleSubmit}>
          {isSignUp && <input type="text" placeholder="Your Name" />}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">{isSignUp ? "Sign Up" : "Sign In"}</button>
        </form>
        <div className="form-switch">
          <p>
            {isSignUp ? "Already have an account?" : "New to FitZone?"}{" "}
            <span
              onClick={() => setIsSignUp(!isSignUp)}
              style={{ cursor: "pointer", color: "#fff", fontWeight: 500 }}
            >
              {isSignUp ? "Sign In Now" : "Sign Up Now"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
