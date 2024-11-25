import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/AdminDashboard.css";

const AdminDashboard = () => {
  const [issues, setIssues] = useState([]);
  const [error, setError] = useState(null);

  // Fetch issues from the server
  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/admin/issues"
        );
        setIssues(response.data); // Set the issues in the state
      } catch (err) {
        setError("Failed to load issues");
      }
    };
    fetchIssues();
  }, []);

  // List of departments
  const departments = [
    "University Administration",
    "Academic Departments",
    "Student Affairs Office",
    "Registrar's Office",
    "Facilities Management",
    "IT Support",
    "Finance Office",
    "Career Services",
    "Student Governance",
    "Health Services",
    "Security Office",
    "Library Services",
    "International Office",
    "Disciplinary Committee",
    "Human Resources",
    "Alumni Relations",
  ];

  // Group issues by department
  const groupedIssues = departments.reduce((acc, department) => {
    acc[department] = issues.filter((issue) => issue.department === department);
    return acc;
  }, {});

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <div className="tabs">
        <button>Pending Issues</button>
        <button>Solved Issues</button>
      </div>

      {error && <p>{error}</p>}

      <div className="department-issues">
        {departments.map((department) => (
          <div key={department} className="department">
            <h3>{department}</h3>
            {groupedIssues[department]?.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th>Student Name</th>
                    <th>Student ID</th>
                    <th>Problem Type</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {groupedIssues[department].map((issue) => (
                    <tr key={issue._id}>
                      <td>{issue.studentName}</td>
                      <td>{issue.studentId}</td>
                      <td>{issue.problemType}</td>
                      <td>{issue.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No issues reported for this department.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
