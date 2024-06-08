import React, { useState } from 'react';
import './Navebar.css';
import { FaSearch } from 'react-icons/fa';
import { IoMdMenu } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  const toggleSignUpForm = () => {
    setIsSignUpVisible(!isSignUpVisible);
  };

  React.useEffect(() => {
    setIsSignUpVisible(false);
  }, [location.pathname]);

  return (
    <div className="navbar">
      <header className="navbar-header">
        <div className="navbar-logo">
          <h2>Project</h2>
        </div>
        <div className="navbar-search-box">
          <form action="#">
            <input type="text" className="search-bar" placeholder="Search" />
            <button type="submit" className="search-icon"><FaSearch /></button>
          </form>
        </div>
        <ul className={`navbar-menu ${isActive ? 'active' : ''}`}>
          <li><Link to={'/'} onClick={closeMenu}>Home</Link></li>
        </ul>
        <div className="navbar-signup" onClick={toggleSignUpForm}>
          <h3>Signup</h3>
        </div>
        <div className="navbar-hamburger-menu" onClick={toggleMenu}>
          <IoMdMenu />
        </div>
      </header>
    </div>
  );
};

export default Navbar;

