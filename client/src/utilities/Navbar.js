// src/components/Navbar.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { servicesData } from '../data';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Close sub-menu if main menu is closed
    if (isOpen) {
      setSubMenuOpen(false);
    }
  };

  // Handle navigation and close all menus
  const handleNavItemClick = (path) => {
    navigate(path);
    setIsOpen(false);
    setSubMenuOpen(false);
  };

  // Toggle the sub-navbar for "Services"
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => handleNavItemClick('/')}>
          <img
            src="https://i.postimg.cc/mrH0xfnF/i-Stock-1137683414-1-3.webp"
            alt="Company Logo"
            loading="eager"
          />
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={isOpen ? 'bar change' : 'bar'}></div>
          <div className={isOpen ? 'bar change' : 'bar'}></div>
          <div className={isOpen ? 'bar change' : 'bar'}></div>
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item" onClick={() => handleNavItemClick('/')}>
            Home
          </li>
          <li className="nav-item" onClick={toggleSubMenu}>
            Services
            {subMenuOpen && (
              <ul className="sub-nav-menu">
                {Object.entries(servicesData).map(([key, service]) => (
                  <li
                    key={key}
                    className="sub-nav-item"
                    onClick={() => handleNavItemClick(`/services/${key}`)}
                  >
                    {service.title}
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className="nav-item" onClick={() => handleNavItemClick('/locations')}>
            Locations
          </li>
          <li className="nav-item" onClick={() => handleNavItemClick('/about')}>
            About Us
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
