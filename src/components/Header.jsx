import React from 'react';
import { IconContext } from 'react-icons';
import { BsArrowRight } from 'react-icons/bs';

import illustration from '../assets/img/hero-illustration.png';

function Header() {
  return (
    <header className="app-header">
      <div className="header-main-container d-flex flex-center">
        <div className="header-wrapper flex-unit d-flex">
          <div className="hero-area d-flex flex-center flex-column">
            <h1 className="hero-text">
              Reciples
              <br />
              Catalogue
            </h1>
            <p className="hero-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate quae nesciunt porro maiores quod aliquam vero dicta
              animi ipsa assumenda.
            </p>
            <a href="#f" className="how-they-work d-flex flex-center">
              How they work
              <IconContext.Provider value={{ className: 'hero-arrow-icon' }}>
                <BsArrowRight />
              </IconContext.Provider>
            </a>
          </div>
          <div className="hero-image-wrapper">
            <img src={illustration} alt="hiro" className="hiro-image" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
