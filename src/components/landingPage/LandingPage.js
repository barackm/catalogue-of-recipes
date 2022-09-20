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
    <div className={styles['landing-main']}>
      <article>
        <div className={styles.plateImg}>
          <img src={plate} alt="logo" />
        </div>
        <h2>EXQUISITE FINE DINING. HAND-CRAFTED COCKTAILS.</h2>
        <p>
          The NEW Pines Modern Steakhouse—reopened on the 1st floor of the Casino expansion—offers guests
          timeless glamour,hospitality, and modern design along with specialty items such as wagyu steak tartare,
          imported caviar, homemade pastas, and house made gelato. Experience a unique and authentic dining experience only at The Pines.
        </p>
        <p>
          Make your reservations today for the restaurant honored by Wine Spectator with the 2021 Award of Excellence and
          named the “Best Restaurant” by Inland Empire Magazine readers, for three consecutive years (2018, 2019, and 2020).
        </p>
      </article>
      <aside>
        <div className={styles.asideDiv}>
          <div className={styles.btn}>
            <button type="submit">RESERVATION</button>
          </div>
          <ul>
            <li className={styles.time}>
              <h4>
                <span />
                Hours
              </h4>
              <p>
                <strong>Monday - Thursday:</strong>
                <br />
                6am - 10pm
              </p>
              <p>
                <strong>Friday - Saturday:</strong>
                <br />
                4pm - 2am
              </p>
              <p>
                <strong>Sunday:</strong>
                <br />
                7am - 9am | 2pm - 10pm
              </p>
            </li>

            <li className={styles.location}>
              <h4>
                <span />
                Location:
              </h4>
              <p>Kigai-city Town</p>
            </li>

            <li className={styles.phone}>
              <h4>
                <span />
                Phone:
              </h4>
              <p>+ 250 784 165 613</p>
            </li>

            <li className={styles.chefHat}>
              <h4>
                <span />
                Executive Chef:
              </h4>
              <p>Magnus Ben</p>
            </li>
            <li>
              <p><strong>Must be 21 or older.</strong></p>
            </li>
          </ul>
        </div>
      </aside>
    </div>

  </section>
);

export default LandingPage;
