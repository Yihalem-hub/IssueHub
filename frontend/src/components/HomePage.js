import React from "react";
import { FaUniversity, FaHandsHelping, FaQuestionCircle } from "react-icons/fa";
import "../styles/HomePage.css";

const HomePage = () => (
  <div className="home-page">
    {/* Hero Section with Background Image */}
    <div className="hero-section">
      <h4>Welcome to the University Issue Reporting System</h4>
      <p>Reporting issues made easy for students and departments</p>
    </div>

    {/* Features Section with Icons */}
    <div className="features">
      <div className="feature-item">
        <FaUniversity size={50} className="feature-icon" />
        <h3>Direct Reporting</h3>
        <p>Send reports directly to the relevant university departments.</p>
      </div>
      <div className="feature-item">
        <FaHandsHelping size={50} className="feature-icon" />
        <h3>Get Help Fast</h3>
        <p>
          Our system ensures your issues are addressed quickly and accurately.
        </p>
      </div>
      <div className="feature-item">
        <FaQuestionCircle size={50} className="feature-icon" />
        <h3>FAQ Assistance</h3>
        <p>Find answers to commonly asked questions on our FAQ page.</p>
      </div>
    </div>
  </div>
);

export default HomePage;
