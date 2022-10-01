import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { IconContext } from 'react-icons';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import illustration from '../assets/img/hero-illustration.png';
import LoginContext from './Contexts/LoginContext';

const Header = (props) => {
  const baseUrl = 'https://sweetaromas.herokuapp.com';
  const {
    title1, title2, paragraph, image, icon, message,
  } = props;

  const {
    userId, username, setUsername, userToken,
  } = useContext(LoginContext);
  const [currentUserName, setCurrentUserName] = useState('');

  const getCurrentUserData = async () => {
    const config = {
      headers: {
        Authorization: userToken,
      },
    };

    try {
      // const response = await axios.get('/users/5');
      // const data = response?.data;
      const response = await axios.get(`${baseUrl}/users/${userId}`, config);
      const { data } = await response;

      setCurrentUserName(data.user_name);
      setUsername(currentUserName);
    } catch (error) {
    // const { statusText, data } = error.response;
    // console.log(error.message, statusText, data);
      console.log(error.message);
    }
  };

  useEffect(() => {
    console.log('LASTNAME:', username, 'LASTID:', userId);
    getCurrentUserData();
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
              <span className="hey">{icon}</span>
              {' '}
              {message}
              {currentUserName}
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
  icon: '👋',
  message: 'Bienvenu encore ici',
};

Header.propTypes = {
  title1: PropTypes.string,
  title2: PropTypes.string,
  paragraph: PropTypes.string,
  image: PropTypes.string,
  icon: PropTypes.string,
  message: PropTypes.string,
};

export default Header;
