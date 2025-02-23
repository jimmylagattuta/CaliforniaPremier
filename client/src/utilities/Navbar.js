import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handler to navigate and close the menu
  const handleNavItemClick = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="navbar" style={{ position: "static" }}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => handleNavItemClick('/')}>
          <img
            src="https://i.postimg.cc/mrH0xfnF/i-Stock-1137683414-1-3.webp"
            alt="Company Logo"
            width="100%" 
            height="auto" 
            loading="eager" 
          />
        </div>
        <div className="menu-icon" alt="Toggle navigation menu" onClick={toggleMenu}>
          <div className={isOpen ? 'bar change' : 'bar'}></div>
          <div className={isOpen ? 'bar change' : 'bar'}></div>
          <div className={isOpen ? 'bar change' : 'bar'}></div>
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item" onClick={() => handleNavItemClick('/')}>
            Home
          </li>
          <li className="nav-item" onClick={() => handleNavItemClick('/services')}>
            Services
          </li>
          <li className="nav-item" onClick={() => handleNavItemClick('/locations')}>
            Locations
          </li>
          <li className="nav-item" onClick={() => handleNavItemClick('/about')}>
            About Us
          </li>
          <li className="nav-item" onClick={() => handleNavItemClick('/patient')}>
            Become a Patient
          </li>
          <li className="nav-item" onClick={() => handleNavItemClick('/portal')}>
            Patient Portal
          </li>
          <li className="nav-item" onClick={() => handleNavItemClick('/appointment')}>
            Book Appointment
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
