import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Use navigate instead of Link

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => navigate('/')}>
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
          <li className="nav-item" onClick={() => navigate('/')}>
            Home
          </li>
          <li className="nav-item" onClick={() => navigate('/services')}>
            Services
          </li>
          <li className="nav-item" onClick={() => navigate('/about')}>
            About Us
          </li>
          <li className="nav-item" onClick={() => navigate('/patient')}>
            Become a Patient
          </li>
          <li className="nav-item" onClick={() => navigate('/portal')}>
            Patient Portal
          </li>
          <li className="nav-item" onClick={() => navigate('/appointment')}>
            Book Appointment
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
