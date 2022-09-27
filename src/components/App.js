/* eslint-disable no-unused-vars */
import {
  Routes, Route, Navigate, Outlet,
} from 'react-router-dom';
import { useState } from 'react';
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
  const [loginUser, setLoginUser] = useState(false);
  const [userId, setUserId] = useState('');
  const [username, setUsername] = useState('');

  return (
    <div className="ppp">
      <LoginContext.Provider value={{
        userId, setUserId, username, setUsername, setLoginUser,
      }}
      >
        {/* <Navigate from="/" to="/recipes" /> */}
        <Navbar />
        <Routes>
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          {loginUser
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
