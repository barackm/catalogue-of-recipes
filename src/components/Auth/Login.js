import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import axios from 'axios';
import LoginContext from '../Contexts/LoginContext';
import styles from '../../assets/scss/Login.module.scss';

const Login = () => {
  const baseUrl = 'https://sweetaromas.herokuapp.com';
  const navigate = useNavigate();
  const {
    setUserId, setUsername, setRoutesUser, setUserToken,
  } = useContext(LoginContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginUser = async (e) => {
    e.preventDefault();
    if (email === '' || password === '') return;
    const user = {
      email,
      password,
    };

    try {
      const response = await axios.post(`${baseUrl}/login`, { user });
      // const response = await axios.post('/login', { user });
      const { authorization } = response.headers;
      const { data } = response.data;
      localStorage.setItem('token', authorization);
      localStorage.setItem('loginId', data.id);
      setUserToken(authorization);
      setUserId(data.id);
      setUsername(data.user_name);
      setRoutesUser(true);
      navigate('/recipes');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={styles['login-register']}>
      <section className={styles['login-section']}>
        <div className={styles.loginIcon}><FaUser /></div>
        <h2>Sign In</h2>
        <form onSubmit={handleLoginUser}>
          <div className={styles['div-input']}>
            <span className={styles.icon}><HiOutlineMailOpen /></span>
            <input
              type="email"
              className="form-control"
              id="email"
              name="Email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className={styles['div-input']}>
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
          <div className={styles['div-checked']}>
            <input
              type="checkbox"
              className="w-auto mt-0"
              name="rememberUser"
            />
            <span>Remember me?</span>
          </div>

          <button type="submit">Login Now</button>
        </form>
        <div className={styles['div-links']}>
          <Link to="/password" className={styles.password}>
            Forgot password?
          </Link>
          <Link to="/signup" className={styles.signup}>
            Create an acount?
          </Link>
        </div>
      </section>
    </div>
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
