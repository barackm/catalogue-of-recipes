import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
// import { HiPlus } from 'react-icons/hi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import logo from '../assets/img/logo_transparent.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  const closeMenu = () => setShowMenu(false);
  let buttons;

  if (localStorage.getItem('token')) {
    buttons = (
      <div className="login-info d-flex">
        <li>
          <Link to="/" className="signup-btn" onClick={() => localStorage.clear()}>Logout</Link>
        </li>
      </div>
    );
  } else {
    (
      buttons = (
        <div className="login-info d-flex">
          <li>
            <Link to="/login" className="login-btn" onClick={closeMenu}>Login</Link>
          </li>
          <li>
            <Link to="/signup" className="signup-btn" onClick={closeMenu}>Sign Up</Link>
          </li>
        </div>
      )
    );
  }
  return (
    <div className={showMenu ? 'main-navbar-container d-flex open' : 'main-navbar-container d-flex'}>
      <Link to="/recipies" className="nav-logo-wrapper d-flex flex-center">
        <div className="div-logo">
          <img src={logo} alt={logo} />
        </div>
        {/* <IconContext.Provider value={{ className: 'logo-plus-icon' }}>
          <HiPlus />
        </IconContext.Provider> */}
      </Link>
      <button type="button" className={showMenu ? 'navbar-overlay visible' : 'navbar-overlay'} onClick={toggleMenu}> </button>
      <nav className="d-flex flex-center flex-unit nav-links-wrapper">
        <ul className="d-flex flex-center flex-between links-container">
          <div className="d-flex flex-center links">
            <li><Link to="/" onClick={closeMenu}>Shop</Link></li>
            <li><Link to="/" onClick={closeMenu}>Features</Link></li>
            <li><Link to="/" onClick={closeMenu}>Recipes</Link></li>
          </div>
          {buttons}
          <button type="button" className="close-menu-btn menu-closed" onClick={toggleMenu}>
            <IconContext.Provider value={{ className: 'close-menu-icon' }}>
              <GrClose />
            </IconContext.Provider>
          </button>
        </ul>
        <button type="button" className="close-menu-btn" onClick={toggleMenu}>
          <IconContext.Provider value={{ className: 'close-menu-icon' }}>
            <GiHamburgerMenu />
          </IconContext.Provider>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
