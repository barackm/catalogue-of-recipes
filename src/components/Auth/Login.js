import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import styles from '../../assets/scss/Login.module.scss';

const Login = () => (
  <section className={styles['login-section']}>
    <div className={styles.loginIcon}><FaUser /></div>
    <h2>Welcome back</h2>

    <form>
      <h4>Login</h4>
      <div className={styles['form-group']}>
        <span className={styles.icon}><HiOutlineMailOpen /></span>
        <input
          type="email"
          className="form-control"
          id="Email1"
          name="email"
          placeholder="Useremail"
          required
          value="email"
        />
      </div>

      <div className={styles['form-group']}>
        <span className={styles.icon}><RiLockPasswordLine /></span>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          placeholder="Password"
          required
          // onChange={(e) => setPassowrd(e.target.value)}
          // value={password}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
    <p>
      New here?
      {' '}
      <Link to="/signup" style={{ textDecoration: 'none' }}>
        Sign Up
      </Link>
    </p>
  </section>
);

export default Login;

// rfce
// rafce
