/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser, FaUser } from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { FiPhoneCall } from 'react-icons/fi';
import { RiLockPasswordLine } from 'react-icons/ri';
import axios from 'axios';
import styles from '../../assets/scss/Login.module.scss';

const Register = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassowrd] = useState('');
  const baseUrl = 'https://sweetaromas.herokuapp.com';
  // const baseUrl = 'http://localhost:3001';

  const handleRegister = (e) => {
    e.preventDefault();
    if (userName === '' || email === '' || password === '') return;
    const user = {
      user_name: userName,
      email,
      // phoneNumber,
      password,
    };
    axios.post(`${baseUrl}/signup`, { user }).then(
      (res) => {
        console.log(res);
      },
    ).catch(
      (err) => {
        console.log(err);
      },
    );
    // console.log({ user });
    // const res = await axios.post(`${baseUrl}/signup`, { user });
    // res.data.json; // { answer: 42 }
  };

  return (
    <section className={styles['login-register']}>
      <div className={styles.loginIcon}><FaUser /></div>
      <h2>Welcome</h2>
      <form onSubmit={handleRegister}>
        <h4>Sign Up</h4>
        <div className={styles['form-group']}>
          <span className={styles.icon}><FaRegUser /></span>
          <input
            type="text"
            className="form-control"
            id="userName"
            placeholder="Enter User name"
            required
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
        </div>
        <div className={styles['form-group']}>
          <span className={styles.icon}><HiOutlineMailOpen /></span>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className={styles['form-group']}>
          <span className={styles.icon}><FiPhoneCall /></span>
          <input
            type="tel"
            className="form-control"
            id="number"
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
            onChange={(e) => setPassowrd(e.target.value)}
            value={password}
          />
        </div>
        <div className={styles['form-group']}>
          <span className={styles.icon}><RiLockPasswordLine /></span>
          <input
            type="password"
            className="form-control"
            id="passwordConfirm"
            placeholder="Confirm Password"
            onChange={(e) => setPassowrd(e.target.value)}
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
};

export default Register;
