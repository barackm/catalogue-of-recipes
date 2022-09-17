/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import jwt_decode from 'jwt-decode';
import illustration from '../assets/img/hero-illustration.png';

const Header = (props) => {
  const {
    title1, title2, paragraph, image,
  } = props;

  const [currentUser, setCurrentUser] = useState('');
  const baseUrl = 'https://sweetaromas.herokuapp.com';

  const handleRequest = async () => {
    const config = {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    };

    try {
      const response = await axios.get(`${baseUrl}/users/5`, config);
      const { data } = response;
      // console.log('Show', data);
      // const decoded = jwt_decode.decode(localStorage.getItem('token'), { header: true });
      // console.log('hello here:', decoded);

      setCurrentUser(data.user_name);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleRequest();
  }, []);
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
            <Link to="/recipies" className="how-they-work d-flex flex-center">
              How they work
              <IconContext.Provider value={{ className: 'hero-arrow-icon' }}>
                <BsArrowRight />
              </IconContext.Provider>
            </Link>
          </div>
          <div className="current-user">
            <p>
              Welcome
              {' ~ '}
              <span>{ currentUser }</span>
              {'. '}
            </p>
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
