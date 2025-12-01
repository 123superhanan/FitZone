import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./auth.css";

const Auth = ({ handleLogin }) => {
  const [signState, setSignState] = useState("Sign In");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/"; // Default to Home

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
    navigate(from, { replace: true }); // Redirect to original page
  };

  return (
    <div className="login">
      <div className="login-form">
        <h1>{signState}</h1>
        <form onSubmit={handleSubmit}>
          {signState === "Sign Up" && (
            <input type="text" placeholder="Your Name" />
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">{signState}</button>
        </form>

        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New To FitZone{" "}
              <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already Have an Account{" "}
              <span onClick={() => setSignState("Sign In")}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
