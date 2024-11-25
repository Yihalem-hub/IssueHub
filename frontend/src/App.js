import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import UniversityAdministrationForm from "./components/UniversityAdministrationForm";
import AcademicDepartmentsForm from "./components/AcademicDepartmentsForm";
import StudentAffairsForm from "./components/StudentAffairsForm";
import RegistrarForm from "./components/RegistrarForm";
import FacilitiesManagementForm from "./components/FacilitiesManagementForm";
import ITSupportForm from "./components/ITSupportForm";
import FinancialAidForm from "./components/FinancialAidForm";
import CareerServicesForm from "./components/CareerServicesForm";
import StudentGovernanceForm from "./components/StudentGovernanceForm";
import HealthServicesForm from "./components/HealthServicesForm";
import SecurityForm from "./components/SecurityForm";
import LibraryServicesForm from "./components/LibraryServicesForm";
import InternationalOfficeForm from "./components/InternationalOfficeForm";
import DisciplinaryCommitteeForm from "./components/DisciplinaryCommitteeForm";
import HumanResourcesForm from "./components/HumanResourcesForm";
import AlumniRelationsForm from "./components/AlumniRelationsForm";
import FaqPage from "./components/FaqPage"; // FAQ page
import AdminDashboard from "./components/AdminDashboard"; // Admin dashboard
import Login from "./components/Login"; // Login page
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track if user is logged in
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar state

  const navigate = useNavigate();

  // Toggle Sidebar
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false); // Set logged in state to false
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="app">
      {/* Show Login page if not logged in */}
      {!isLoggedIn ? (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <>
          {/* If logged in, show Navbar and Sidebar */}
          <Navbar
            onLogout={handleLogout}
            onSidebarToggle={handleSidebarToggle}
          />
          <Sidebar isOpen={isSidebarOpen} />
          <div className={`content ${isSidebarOpen ? "shifted" : ""}`}>
            <Routes>
              {/* Public Pages */}
              <Route path="/" element={<HomePage />} />
              <Route path="/faq" element={<FaqPage />} />

              {/* Department-specific report forms */}
              <Route
                path="/report/university-administration"
                element={<UniversityAdministrationForm />}
              />
              <Route
                path="/report/academic-departments"
                element={<AcademicDepartmentsForm />}
              />
              <Route
                path="/report/student-affairs"
                element={<StudentAffairsForm />}
              />
              <Route path="/report/registrar" element={<RegistrarForm />} />
              <Route
                path="/report/facilities-management"
                element={<FacilitiesManagementForm />}
              />
              <Route path="/report/it-support" element={<ITSupportForm />} />
              <Route
                path="/report/financial-aid"
                element={<FinancialAidForm />}
              />
              <Route
                path="/report/career-services"
                element={<CareerServicesForm />}
              />
              <Route
                path="/report/student-governance"
                element={<StudentGovernanceForm />}
              />
              <Route
                path="/report/health-services"
                element={<HealthServicesForm />}
              />
              <Route path="/report/security" element={<SecurityForm />} />
              <Route
                path="/report/library-services"
                element={<LibraryServicesForm />}
              />
              <Route
                path="/report/international-office"
                element={<InternationalOfficeForm />}
              />
              <Route
                path="/report/disciplinary-committee"
                element={<DisciplinaryCommitteeForm />}
              />
              <Route
                path="/report/human-resources"
                element={<HumanResourcesForm />}
              />
              <Route
                path="/report/alumni-relations"
                element={<AlumniRelationsForm />}
              />

              {/* Admin Dashboard - Now available for everyone */}
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
