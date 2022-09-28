import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegUser, FaUser } from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { FiPhoneCall } from 'react-icons/fi';
import { RiLockPasswordLine } from 'react-icons/ri';
import axios from 'axios';
import styles from '../../assets/scss/Login.module.scss';

const Register = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassowrd] = useState('');
  const baseUrl = 'https://sweetaromas.herokuapp.com';

  const handleRegister = async (e) => {
    e.preventDefault();
    if (userName === '' || email === '' || password === '') return;
    const user = {
      user_name: userName,
      email,
      // phoneNumber,
      password,
    };

    try {
      const response = await axios.post(`${baseUrl}/signup`, { user });
      // const response = await axios.post('/signup`, { user }');
      const { data } = response;
      if (data) navigate('/login');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={styles['login-register']}>
      <section className={styles['register-section']}>
        <div className={styles.loginIcon}><FaUser /></div>
        <h2>Sign up</h2>
        <form onSubmit={handleRegister}>
          <div className={styles['div-input']}>
            <span className={styles.icon}><FaRegUser /></span>
            <input
              type="text"
              className="form-control"
              id="userName"
              placeholder="Username"
              required
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            />
          </div>
          <div className={styles['div-input']}>
            <span className={styles.icon}><HiOutlineMailOpen /></span>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className={styles['div-input']}>
            <span className={styles.icon}><FiPhoneCall /></span>
            <input
              type="tel"
              className="form-control"
              id="number"
              placeholder="Mobile Number"
            />
          </div>
          <div className={styles['div-input']}>
            <span className={styles.icon}><RiLockPasswordLine /></span>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              required
              onChange={(e) => setPassowrd(e.target.value)}
              value={password}
            />
          </div>
          {/* <div className={styles['div-input']}>
            <span className={styles.icon}><RiLockPasswordLine /></span>
            <input
              type="password"
              className="form-control"
              id="passwordConfirm"
              placeholder="Confirm Password"
              onChange={(e) => setPassowrd(e.target.value)}
            />
          </div> */}
          <button type="submit">Sign Up</button>
        </form>
        <p className={styles.signup}>
          Already have an account?
          {' '}
          <Link to="/login">
            Login
          </Link>
        </p>
      </section>
    </div>
  );
};

export default Register;

// handleRequest = async () => {
//   const baseUrl = 'https://sweetaromas.herokuapp.com';

//   const config = {
//     headers: {
//       Authorization: localStorage.getItem('token'),
//     },
//   };

//   try {
//     const response = await axios.get(`${baseUrl}/users`, config);
//     const data = response;
//     console.log('zrdxzrdxzreserrxrexrexzrzrzrdzrd', data);
//     // localStorage.setItem('token', authorization);

//     // const { token } = res.data;
//   } catch (error) {
//     console.log(error);
//   }
// }
