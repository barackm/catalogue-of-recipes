import React, { useState, useContext, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import logo from '../assets/img/logo_transparent.png';
import LoginContext from './Contexts/LoginContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { userToken, setUserToken, setRoutesUser } = useContext(LoginContext);
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  const closeMenu = () => setShowMenu(false);

  const [logoDirectTo, setLogoDirectTo] = useState('./');
  const [recipeDirectTo, setRecipeDirectTo] = useState('/login');

  useEffect(() => {
    if (userToken) {
      setIsUserAuthenticated(true);
      setLogoDirectTo('/recipes');
      setRecipeDirectTo('/recipes');
    }
  }, [userToken]);

  const logoutCurrentUser = async () => {
    localStorage.clear();
    setUserToken(null);
    setRoutesUser(false);
    setIsUserAuthenticated(false);
    navigate('/');
    setLogoDirectTo('/');
    setRecipeDirectTo('/login');
  };

  return (
    <div className={showMenu ? 'main-navbar-container d-flex open' : 'main-navbar-container d-flex'}>
      <NavLink to={logoDirectTo} className="nav-logo-wrapper d-flex flex-center">
        <div className="div-logo">
          <img src={logo} alt={logo} />
        </div>
      </NavLink>
      <button type="button" className={showMenu ? 'navbar-overlay visible' : 'navbar-overlay'} onClick={toggleMenu}> </button>
      <nav className="d-flex flex-center flex-unit nav-links-wrapper">
        <ul className="d-flex flex-center flex-between links-container">
          <div className="d-flex flex-center links">
            <li><NavLink to="/" onClick={closeMenu}>Accueil</NavLink></li>
            <li><NavLink to={recipeDirectTo} onClick={closeMenu}>Recipes</NavLink></li>
            <li><Link to={logoDirectTo} onClick={closeMenu}>Features</Link></li>
            <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
          </div>
          {isUserAuthenticated ? (
            <div className="login-info d-flex">
              <li className="signup-btn-div">
                <button type="button" className="signup-btn" onClick={() => logoutCurrentUser()}>Logout</button>
              </li>
            </div>
          ) : (
            <div className="login-info d-flex flex-center">
              <li>
                <NavLink to="/login" className="login-btn" onClick={closeMenu}>Log In</NavLink>
              </li>
              <li className="signup-btn-div">
                <NavLink to="/signup" className="signup-btn" onClick={closeMenu}>Get Started</NavLink>
              </li>
            </div>
          )}

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
