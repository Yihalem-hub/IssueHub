import React, { useState } from "react";
import "../styles/Login.css";
import Logo from "../assets/logo1.png";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple username validation (e.g., "s0000001234")
    const usernamePattern = /^s000000\d{4}$/i;

    if (!usernamePattern.test(username)) {
      setError('Username must start with "s000000" followed by 4 digits.');
    } else if (username === "" || password === "") {
      setError("Please enter both username and password.");
    } else {
      setError("");
      // Simulate successful login by calling onLogin without token
      onLogin(); // We do not use any token here
      // Redirect to the home page
      navigate("/"); // Redirect to the home page after login
    }
  };

  return (
    <div className="background">
      <div className="login-container">
        <div className="login-header">
          <img src={Logo} alt="University of Dubai Logo" className="logo" />
        </div>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="login-button">
            Log in
          </button>
        </form>
        <div className="login-footer">
          <a href="/lost-password">Forgot password?</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
