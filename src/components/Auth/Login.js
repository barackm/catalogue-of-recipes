import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import axios from 'axios';
import styles from '../../assets/scss/Login.module.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email === '' || password === '') return;
    const user = {
      email,
      password,
    };

    try {
      const response = await axios.post('/login', { user });
      const { authorization } = response.headers;
      console.log(authorization);

      localStorage.setItem('token', authorization);
    } catch (error) {
      console.log(error);
    }
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
            onChange={(e) => setPassword(e.target.value)}
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

// const api = 'your api';
// const token = JSON.parse(sessionStorage.getItem('data'));
// const token = user.data.id; /*take only token and save in token variable*/
// axios.get(api , { headers: {"Authorization" : `Bearer ${token}`} })
// .then(res => {
// console.log(res.data);
// .catch((error) => {
//   console.log(error)
// });
