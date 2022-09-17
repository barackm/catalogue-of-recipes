/* eslint-disable no-unused-vars */
import {
  Routes, Route, Navigate, Outlet,
} from 'react-router-dom';
import Home from '../containers/Home';
import Navbar from './Navbar';
import RecipeDetails from '../containers/RecipleDetails';
import Footer from './Footer';
import LandingPage from './landingPage/LandingPage';
import Login from './Auth/Login';
import Register from './Auth/Register';

const SidebarLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

const App = () => (
  <div className="ppp">
    {/* <Navigate to="/" /> */}
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="*" element={<Navigate to="/recipes" replace />} />
      <Route element={<SidebarLayout />}>
        <Route path="/recipes" exact element={<Home />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route exact path="/" element={<LandingPage />} />
      </Route>
    </Routes>
    {/* <Navigate from="/" to="/recipes" /> */}
  </div>
);

export default App;
