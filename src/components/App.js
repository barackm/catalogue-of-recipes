/* eslint-disable no-unused-vars */
import {
  Routes, Route, Navigate, Outlet,
} from 'react-router-dom';
import { useState } from 'react';
import Home from '../containers/Home';
import Navbar from './Navbar';
import RecipeDetails from '../containers/RecipleDetails';
import Footer from './Footer';
import LandingPage from './landingPage/LandingPage';
import Login from './Auth/Login';
import Register from './Auth/Register';

const SidebarLayout = () => (
  <>
    {/* <Navbar /> */}
    <Outlet />
    {/* <Footer /> */}
  </>
);

const App = () => {
  const [showUser, setShowUser] = useState('');

  return (
    <div className="ppp">
      {/* <Navigate to="/" /> */}
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route element={<SidebarLayout />}>
          <Route path="/recipes" exact element={<Home />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route exact path="/" element={<LandingPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/recipes" replace />} />
      </Routes>
      {/* <Navigate from="/" to="/recipes" /> */}
      <Footer />
    </div>
  );
};

export default App;
