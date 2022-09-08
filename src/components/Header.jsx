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
  title1: 'Sweet',
  title2: 'Aromas',
  paragraph:
    'We are dedicated to serving the needs of our customers each every day. We have a large variety of pasta, chicken, veal, seafood, stuffed artichokes, braciole. Ask your server to ask the kitchen if we can make your favorite.',
  image: illustration,
};

Header.propTypes = {
  title1: PropTypes.string,
  title2: PropTypes.string,
  paragraph: PropTypes.string,
  image: PropTypes.string,
};

export default Header;
