import React from "react";
import { Link, useNavigate } from "react-router-dom"; // For redirection
import "../styles/Navbar.css";

const Navbar = ({ onLogout }) => {
  const navigate = useNavigate(); // For redirecting after logout

  const handleLogout = () => {
    onLogout(); // Trigger the logout function passed as prop
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <nav className="navbar">
      <h2>University Issue Reporting Platform</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
         <li>
          <Link to="/admin-dashboard">Admin Dashboard</Link>
        </li>
        <li>
          <Link to="/login" onClick={handleLogout}>Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
