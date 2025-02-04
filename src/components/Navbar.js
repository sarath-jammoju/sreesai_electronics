import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

// Example categories data (could be fetched from an API or passed as props)
const categories = [
  { path: "security", label: "Security" },
  { path: "communication", label: "Communication" },
  { path: "displays", label: "Displays" },
  { path: "solutions", label: "Solutions" },
  { path: "computers", label: "Computers" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);  // Toggle dropdown open/close
  };

  const closeDropdown = () => {
    setIsOpen(false);  // Close dropdown
  };

  return (
    <Fragment className="navbar-container">
      <nav className="navbar-content">
        {/* Left Section: Sree Sai Electronics */}
        <div className="logo-section">
          <Link to="/home" className="logo-text">
            Sree Sai Electronics<span className="logo-highlight">.</span>
          </Link>
        </div>

        {/* Middle Section: Empty */}
        <div className="middle-section"></div>

        {/* Right Section: Navigation Links */}
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li className="nav-item">
            <Link to="/Home" className="nav-link">Home</Link>
          </li>

          <li className="nav-item">
            <button
              className="nav-link dropdown-toggle"
              onClick={toggleDropdown}
            >
              Services
            </button>
            {isOpen && (
              <ul className="dropdown-menu" onMouseLeave={closeDropdown}>
                {categories.map((category) => (
                  <li key={category.path}>
                    <Link to={`/services/${category.path}`} className="dropdown-item" onClick={closeDropdown}>
                      {category.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className="nav-item">
            <Link to="/contactUs" className="nav-link">Contactus</Link>
          </li>
        </ul>      
      </nav>
    </Fragment>
  );
};

export default Navbar;
