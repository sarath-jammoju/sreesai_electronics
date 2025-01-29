
import { Link } from "react-router-dom";
import { useState } from "react";

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
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar-container">
      <nav className="navbar-content">
        {/* Left Section: Sree Sai Electronics */}
        <div className="logo-section">
          <Link to="/" className="logo-text">
            Sree Sai Electronics<span className="logo-highlight">.</span>
          </Link>
        </div>

        {/* Middle Section: Empty */}
        <div className="middle-section"></div>

        {/* Right Section: Navigation Links */}
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>

          <li className="nav-item" onMouseLeave={closeDropdown}>
            <Link to="#" onClick={() => setIsOpen(!isOpen)} className="nav-link">
              Services
            </Link>
            {isOpen && (
              <ul className="dropdown-menu">
                {categories.map((category) => (
                  <li key={category.path}>
                    <Link to={`/categories/${category.path}`} className="dropdown-item">
                      {category.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className="nav-item">
            <Link to="/contact-us" className="nav-link">Contact us</Link>
          </li>
        </ul>

      
      </nav>
    </header>
  );
};

export default Navbar;
