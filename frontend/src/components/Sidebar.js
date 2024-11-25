// frontend/src/components/Sidebar.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons
import "../styles/Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for sidebar toggle
  const departments = [
    { name: "University Administration", link: "university-administration" },
    { name: "Academic Departments", link: "academic-departments" },
    { name: "Student Affairs Office", link: "student-affairs" },
    { name: "Registrar's Office", link: "registrar" },
    { name: "Facilities Management", link: "facilities-management" },
    { name: "IT Support", link: "it-support" },
    { name: "Finance Office", link: "financial-aid" },
    { name: "Career Services", link: "career-services" },
    { name: "Student Governance", link: "student-governance" },
    { name: "Health Services", link: "health-services" },
    { name: "Security Office", link: "security" },
    { name: "Library Services", link: "library-services" },
    { name: "International Office", link: "international-office" },
    { name: "Disciplinary Committee", link: "disciplinary-committee" },
    { name: "Human Resources", link: "human-resources" },
    { name: "Alumni Relations", link: "alumni-relations" },
  ];

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <h3>Departments</h3>
      <ul>
        {departments.map((dept, index) => (
          <li key={index}>
            <Link to={`/report/${dept.link}`} className="department-link">
              {dept.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
