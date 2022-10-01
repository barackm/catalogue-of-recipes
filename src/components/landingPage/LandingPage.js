/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

// import BackgroundSlider from 'react-background-slider';
// import image1 from '../../assets/img/landing1.jpg';
// import image2 from '../../assets/img/landing2.jpg';
// import image3 from '../../assets/img/landing3.jpg';
// import image4 from '../../assets/img/landing4.jpg';
// import image5 from '../../assets/img/landing5.jpg';
// import image6 from '../../assets/img/landing6.jpg';
// import logo from '../../assets/img/logo_transparent.png';
// import pattern from '../../assets/img/background-pattern.png';
import plate from '../../assets/img/landing/plate-icon.svg';
import curbside from '../../assets/img/landing/curbside-new.png';

import Feature from './Feature/Feature';
import Toggle from './Toggle/Toggle';
import pickup from '../../assets/img/landing/pickup.png';
import reduced from '../../assets/img/landing/reduced.png';
import states from '../../assets/img/landing/states.svg';
import styles from '../../assets/scss/LandingPage.module.scss';

const LandingPage = () => {
  const data = [
    {
      id: 1,
      icons: pickup,
      title: 'Curbside Pick-up',
      paragraph: 'Make off-premises dining experience safe and convenient for your customers with a curbside pick up capability. Restolabs online ordering system allows seamless communication between the restaurants and the customers who will pick up the order.',

    },
    {
      id: 2,
      icons: reduced,
      title: 'In-Store Touchless Ordering',
      paragraph: 'Our QR Code Ordering is designed to make the customers&apos; dine-in journey safe and efficient, starting from ordering to receiving food and making the payment. It offers a fast and simple way to minimize human contact, encourage repeat visit, and boost loyalty.',

    },
    {
      id: 3,
      icons: states,
      title: 'Reduced On-boarding time',
      paragraph: 'No one wants to wait for weeks and months to get to business. Our onboarding process is designed to help you reach your early value in the least amount of time by putting in minimum effort.',

    },
  ];

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
          With your restaurant&apos;s own online ordering portal, you can start:
          Take Orders For Delivery, Takeaway, QR Dine In, Catering and Reservation
          On Your Own Website &/or Mobile App. Sign up today for a 90-day free trial.
        </p>
        <button type="submit" className={styles.signup}>
          <Link to="/signup" className={styles['signup-btn']}> Get Started</Link>
        </button>
      </div>

      <div className={styles['landing-main']}>
        <article className={styles['landing-main-article']}>
          <div className={styles.plateImg}>
            <img src={plate} alt="plate" />
          </div>
          <h2>EXQUISITE FINE DINING. HAND-CRAFTED COCKTAILS.</h2>
          <p>
            With the industry’s most comprehensive suite of marketing tools, MenuDrive will increase new traffic to your site,
            convert those new visitors to customers, and keep them coming back for more. No hold payments, full customer data ownership,
            and a mobile ordering app all for 0% commission. Please call us to discuss; we want to work with you!
          </p>
          <p>
            Make your reservations today for the restaurant honored by Wine Spectator with the 2021 Award of Excellence and
            named the “Best Restaurant” by Inland Empire Magazine readers, for three consecutive years (2018, 2019, and 2020).
          </p>
        </article>
        <aside className={styles['landing-main-aside']}>
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
        <article className={styles['landing-dev-article']}>
          <h2>
            Do More With
            <br />
            The
            <span>
              Rated Food Ordering Software
            </span>
          </h2>
          <ul>
            {data.map((item) => <Toggle key={item.id} toggle={item} />)}
            <li>
              <button type="button">Request a Free Demo Now</button>
            </li>
          </ul>
        </article>
      </div>
      <Feature />
      {/* <div className={styles.curbsideImg}>
        <h2>Become cooking magician</h2>
        <p>
          Enjoy our
          {' '}
          <span>Delicious</span>
          Food
        </p>
        <div className={styles.curbsideImg}>
          <img src={logo} alt="logo" />
        </div>
      </div> */}
    </section>
  );
};
export default LandingPage;
