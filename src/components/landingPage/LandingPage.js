/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from 'react';
import BackgroundSlider from 'react-background-slider';
import { Link } from 'react-router-dom';
import image1 from '../../assets/img/landing1.jpg';
import image2 from '../../assets/img/landing2.jpg';
import image3 from '../../assets/img/landing3.jpg';
import image4 from '../../assets/img/landing4.jpg';
import image5 from '../../assets/img/landing5.jpg';
import image6 from '../../assets/img/landing6.jpg';
// import logo from '../../assets/img/name.png';
// import pattern from '../../assets/img/background-pattern.png';
import plate from '../../assets/img/plate-icon.svg';
import time from '../../assets/img/time-icon.svg';
import location from '../../assets/img/location-icon.svg';
import phone from '../../assets/img/phone-icon.svg';
import chefHat from '../../assets/img/chef-hat-icon.svg';
import styles from '../../assets/scss/LandingPage.module.scss';

const LandingPage = () => (
  <section className={styles.landingPage}>
    {/* <BackgroundSlider
      images={[image1, image2, image3, image4, image5, image6]}
      duration={10}
      transition={6}
    /> */}
    <div className={styles['landing-header']}>
      <h1>Online Ordering with Built-in Marketing Driving You to Success</h1>
      <p>
        With the industry’s most comprehensive suite of marketing tools, MenuDrive will
        increase new traffic to your site, convert those new visitors to customers, and
        keep them coming back for more. Sign up today for a 90-day free trial.
      </p>
      <div className={styles.signup}>
        <Link to="/signup" className={styles['signup-btn']}> Get Started</Link>
      </div>
      {/* <p>Become cooking magician</p>
      <h4>sweet~Aromas</h4> */}
      {/* <h1>
        Enjoy our
        {' '}
        <span>Delicious</span>
        Food
      </h1> */}
    </div>
    
  </section>
);

export default LandingPage;
