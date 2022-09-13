import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser, FaUser } from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { FiPhoneCall } from 'react-icons/fi';
import { RiLockPasswordLine } from 'react-icons/ri';
import styles from '../../assets/scss/Login.module.scss';

const Register = () => (
  <section className={styles['login-register']}>
    <div className={styles.loginIcon}><FaUser /></div>
    <h2>Welcome</h2>
    <form>
      <h4>Sign Up</h4>
      <div className={styles['form-group']}>
        <span className={styles.icon}><FaRegUser /></span>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter User name"
          required
        //   onChange={(e) => setUserName(e.target.value)}
        //   value={user_name}
        />
      </div>
      <div className={styles['form-group']}>
        <span className={styles.icon}><HiOutlineMailOpen /></span>
        <input
          type="email"
          className="form-control"
          id="Email1"
          placeholder="Enter Email"
          required
          // onChange={(e) => setEmail(e.target.value)}
          // value={email}
        />
      </div>
      <div className={styles['form-group']}>
        <span className={styles.icon}><FiPhoneCall /></span>
        <input
          type="tel"
          className="form-control"
          id="name"
          placeholder="Mobile Number"
        />
      </div>
      <div className={styles['form-group']}>
        <span className={styles.icon}><RiLockPasswordLine /></span>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="password"
          required
        />
      </div>
      <div className={styles['form-group']}>
        <span className={styles.icon}><RiLockPasswordLine /></span>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Confirm Password"
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
    <p>
      Already have an account?
      {' '}
      <Link to="/login" style={{ textDecoration: 'none' }}>
        Login
      </Link>

    </p>
  </section>
);

export default Register;
