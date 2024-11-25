import React, { useState } from "react";
import "../styles/Form.css";

const SecurityForm = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    studentId: "",
    problemType: "",
    description: "",
    department: "Security Office",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/issues/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Issue submitted successfully!");
        setFormData({
          studentName: "",
          studentId: "",
          problemType: "",
          description: "",
        });
      } else {
        setMessage("Failed to submit issue. Please try again.");
      }
    } catch (error) {
      setMessage("Error: Unable to connect to the server.");
    }
  };

  return (
    <form className="problem-form" onSubmit={handleSubmit}>
      <h1>Report an Issue - Security related issues Form</h1>

      <div className="form-group">
        <label>Student Name (Optional)</label>
        <input
          type="text"
          name="studentName"
          value={formData.studentName}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </div>

      <div className="form-group">
        <label>Student ID (Optional)</label>
        <input
          type="text"
          name="studentId"
          value={formData.studentId}
          onChange={handleChange}
          placeholder="Enter your student ID"
        />
      </div>

      <div className="form-group">
        <label>Problem Type</label>
        <input
          type="text"
          name="problemType"
          value={formData.problemType}
          onChange={handleChange}
          required
          placeholder="Enter the type of problem"
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          placeholder="Describe the problem in detail"
        />
      </div>

      {message && <p className="submission-message">{message}</p>}

      <button type="submit" className="submit-button">
        Submit Issue
      </button>
    </form>
  );
};

export default SecurityForm;
