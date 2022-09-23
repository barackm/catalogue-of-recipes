/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import BackgroundSlider from 'react-background-slider';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { HiPlus, HiMinus } from 'react-icons/hi';

import Feature from './Feature/Feature';
import image1 from '../../assets/img/landing1.jpg';
import image2 from '../../assets/img/landing2.jpg';
import image3 from '../../assets/img/landing3.jpg';
import image4 from '../../assets/img/landing4.jpg';
import image5 from '../../assets/img/landing5.jpg';
import image6 from '../../assets/img/landing6.jpg';
// import logo from '../../assets/img/name.png';
// import pattern from '../../assets/img/background-pattern.png';
import plate from '../../assets/img/landing/plate-icon.svg';
import curbside from '../../assets/img/landing/curbside-new.png';
import pickup from '../../assets/img/landing/pickup.png';
import reduced from '../../assets/img/landing/reduced.png';
import states from '../../assets/img/landing/states.svg';
import styles from '../../assets/scss/LandingPage.module.scss';

const LandingPage = () => {
  const [showParag, setShowParag] = useState('hide');

  const handleClick = (e) => {
    console.log('ehiuhfewiuhufier', e.target);

    // if (!showParag) {
    //   setShowParag('show');
    // } else {
    //   setShowParag('hide');
    // }
  };

  return (
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
        <button type="submit" className={styles.signup}>
          <Link to="/signup" className={styles['signup-btn']}> Get Started</Link>
        </button>
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
            <img src={plate} alt="plate" />
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
              <button type="button">RESERVATION</button>
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

      <div className={styles['landing-dev']}>
        <div className={styles.curbsideImg}>
          <img src={curbside} alt="curbside" />
        </div>
        <article>
          <h2>
            Do More With
            <br />
            The
            <span>
              Rated Food Ordering Software
            </span>
          </h2>
          <ul>
            <li>
              <div className={styles['curbside-header']}>
                <div className="flex-unit d-flex">
                  <div><img src={pickup} alt="pickup" /></div>
                  <h4>Curbside Pick-up</h4>
                </div>
                <div id="1" className={styles['show-btn']}>
                  <button type="button" onClick={(e) => handleClick(e)}>
                    <IconContext.Provider className={styles['show-more']} value={{ className: 'show-more' }}>
                      <HiPlus />
                    </IconContext.Provider>
                    <IconContext.Provider className={styles['show-less']} value={{ className: 'logo-plus-icon' }}>
                      <HiMinus />
                    </IconContext.Provider>
                  </button>
                </div>
              </div>
              <p className={styles[`${showParag}`]}>Make off-premises dining experience safe and convenient for your customers with a curbside pick up capability. Restolabs online ordering system allows seamless communication between the restaurants and the customers who will pick up the order.</p>
            </li>
            <li>
              <div className={styles['curbside-header']}>
                <div className="flex-unit d-flex">
                  <div><img src={reduced} alt="reduced" /></div>
                  <h4>In-Store Touchless Ordering</h4>
                </div>
                <div id="2" className={styles['show-btn']}>
                  <button type="button" onClick={(e) => handleClick(e)}>
                    <IconContext.Provider value={{ className: 'logo-plus-icon' }}>
                      <HiPlus />
                    </IconContext.Provider>
                    <IconContext.Provider value={{ className: 'logo-plus-icon' }}>
                      <HiMinus />
                    </IconContext.Provider>
                  </button>
                </div>
              </div>
              <p>Our QR Code Ordering is designed to make the customers&apos; dine-in journey safe and efficient, starting from ordering to receiving food and making the payment. It offers a fast and simple way to minimize human contact, encourage repeat visit, and boost loyalty.</p>
            </li>
            <li>
              <div className={styles['curbside-header']}>
                <div className="flex-unit d-flex">
                  <div><img src={states} alt="states" /></div>
                  <h4>Reduced On-boarding time</h4>
                </div>
                <div id="3" className={styles['show-btn']}>
                  <button type="button" onClick={(e) => handleClick(e)}>
                    <IconContext.Provider value={{ className: 'logo-plus-icon' }}>
                      <HiPlus />
                    </IconContext.Provider>
                    <IconContext.Provider value={{ className: 'logo-plus-icon' }}>
                      <HiMinus />
                    </IconContext.Provider>
                  </button>
                </div>
              </div>
              <p>No one wants to wait for weeks and months to get to business. Our onboarding process is designed to help you reach your early value in the least amount of time by putting in minimum effort.</p>
            </li>
            <li>
              <button type="button">Request a Free Demo Now</button>
            </li>
          </ul>
        </article>
      </div>
      <Feature />
    </section>
  );
};
export default LandingPage;
