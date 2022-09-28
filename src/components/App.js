/* eslint-disable no-unused-vars */
import {
  Routes, Route, Navigate, Outlet,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Home from '../containers/Home';
import RecipeDetails from '../containers/RecipleDetails';
import Footer from './Footer';
import LandingPage from './landingPage/LandingPage';
import Login from './Auth/Login';
import Register from './Auth/Register';
import NotFound from './landingPage/NotFound/NotFound';
import LoginContext from './Contexts/LoginContext';

const SidebarLayout = () => (
  <>
    {/* <Navbar /> */}
    <Outlet />
    {/* <Footer /> */}
  </>
);

const App = () => {
  const token = localStorage.getItem('token');
  const [loginState, setLoginState] = useState(false);
  const [userId, setUserId] = useState('');
  const [username, setUsername] = useState('');
  const [userToken, setUserToken] = useState(token);

  useEffect(() => {
    if (userToken) {
      setLoginState(true);
    }
  });

  return (
    <div className="ppp">
      <LoginContext.Provider value={{
        userId, setUserId, username, setUsername, setLoginState, userToken, setUserToken,
      }}
      >
        {/* <Navigate from="/" to="/recipes" /> */}
        <Navbar />
        <Routes>
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/" element={<LandingPage />} />
          {/* <Route exact path="/contact" element={<Home />} />
          <Route exact path="/feature" element={<Home />} /> */}
          {loginState
            ? (
              <Route element={<SidebarLayout />}>
                {/* <Route path="/login" element={<Navigate from="/login" to="/" replace />} /> */}
                <Route path="/recipes" exact element={<Home />} />
                <Route path="/recipes/:id" element={<RecipeDetails />} />
              </Route>
            ) : <Route path="*" element={<NotFound />} /> }
        </Routes>
        <Footer />
      </LoginContext.Provider>
    </div>
  );
};

export default App;
