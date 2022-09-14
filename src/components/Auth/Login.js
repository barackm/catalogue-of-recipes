import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import styles from '../../assets/scss/Login.module.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('LOGIN', e);
  };

  return (
    <section className={styles['login-section']}>
      <div className={styles.loginIcon}><FaUser /></div>
      <h2>Welcome back</h2>

      <form onSubmit={handleLogin}>
        <h4>Login</h4>
        <div className={styles['form-group']}>
          <span className={styles.icon}><HiOutlineMailOpen /></span>
          <input
            type="email"
            className="form-control"
            id="email"
            name="Email"
            placeholder="Useremail"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles['form-group']}>
          <span className={styles.icon}><RiLockPasswordLine /></span>
          <input
            type="password"
            className="form-control"
            id="password"
            name="Password"
            placeholder="Password"
            required
            onChange={(e) => setPassowrd(e.target.value)}
            value={password}
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
};

export default Login;

// rfce
// rafce
