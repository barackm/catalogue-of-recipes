import React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { HiPlus } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { GrEmoji } from 'react-icons/gr';

export default function Footer() {
  return (
    <footer className="d-flex flex-center flex-between">
      <Link to="/" className="nav-logo-wrapper d-flex flex-center">
        Food
        <IconContext.Provider value={{ className: 'logo-plus-icon' }}>
          <HiPlus />
        </IconContext.Provider>
      </Link>
      <p className="footer-attribution">
        &copy;
        {' '}
        {new Date().getFullYear()}
        , Built with ❤️
        {' '}
        <a href="https://barackm.me" target="_blank" rel="noreferrer">
          Barack Mukelenga
        </a>
      </p>
      <ul className="d-flex footer-links-wrapper">
        <li>
          <a href="https://github.com/barackm" target="_blank" rel="noreferrer">
            <IconContext.Provider value={{ className: 'footer-github-icon' }}>
              <FaGithub />
            </IconContext.Provider>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/baraka-mukelenga/" target="_blank" rel="noreferrer">
            <IconContext.Provider value={{ className: 'footer-github-icon' }}>
              <FaLinkedin />
            </IconContext.Provider>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/BarackMukelenga" target="_blank" rel="noreferrer">
            <IconContext.Provider value={{ className: 'footer-github-icon' }}>
              <FaTwitterSquare />
            </IconContext.Provider>
          </a>
        </li>
        <li>
          <a href="https://github.com/barackm" target="_blank" rel="noreferrer">
            <IconContext.Provider value={{ className: 'footer-github-icon' }}>
              <GrEmoji />
            </IconContext.Provider>
          </a>
        </li>
      </ul>
    </footer>
  );
}
