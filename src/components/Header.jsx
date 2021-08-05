import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { BsArrowRight } from 'react-icons/bs';

import { Link } from 'react-router-dom';
import illustration from '../assets/img/hero-illustration.png';

const Header = (props) => {
  const {
    title1, title2, paragraph, image,
  } = props;
  return (
    <header className="app-header">
      <div className="header-main-container d-flex flex-center">
        <div className="header-wrapper flex-unit d-flex">
          <div className="hero-area d-flex flex-center flex-column">
            <h1 className="hero-text">
              {title1}
              <br />
              {title2}
            </h1>
            <p className="hero-paragraph">{paragraph}</p>
            <Link to="/" className="how-they-work d-flex flex-center">
              How they work
              <IconContext.Provider value={{ className: 'hero-arrow-icon' }}>
                <BsArrowRight />
              </IconContext.Provider>
            </Link>
          </div>
          <div className="hero-image-wrapper">
            <img src={image} alt="hiro" className="hiro-image" />
          </div>
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  title1: 'Recipes',
  title2: 'Catalogue',
  paragraph:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quae nesciunt porro maiores quod aliquam vero dicta animi ipsa assumenda.',
  image: illustration,
};

Header.propTypes = {
  title1: PropTypes.string,
  title2: PropTypes.string,
  paragraph: PropTypes.string,
  image: PropTypes.string,
};

export default Header;
