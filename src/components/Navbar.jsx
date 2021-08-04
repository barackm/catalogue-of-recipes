import React from 'react';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';

const Navbar = () => (
  <div className="main-navbar-container d-flex">
    <Link to="/" className="nav-logo-wrapper d-flex flex-center">
      Food
      <IconContext.Provider value={{ className: 'logo-plus-icon' }}>
        <HiPlus />
      </IconContext.Provider>
    </Link>
    <nav className="d-flex flex-center flex-unit nav-links-wrapper">
      <ul className="d-flex flex-center flex-between">
        <div className="d-flex flex-center links">
          <li><Link to="/">Shop</Link></li>
          <li><Link to="/">Features</Link></li>
          <li><Link to="/">Reciples</Link></li>
        </div>
        <div className="login-info d-flex">
          <li>
            <Link to="/" className="login-btn">Login</Link>
          </li>
          <li>
            <Link to="/" className="signup-btn">Sign Up</Link>
          </li>
        </div>
      </ul>
    </nav>
  </div>
);

export default Navbar;
