import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../containers/Home';
import Navbar from './Navbar';
import RecipeDetails from '../containers/RecipleDetails';
import Footer from './Footer';
import LandingPage from './landingPage/LandingPage';
import Login from './Auth/Login';
import Register from './Auth/Register';

const App = () => (
  <div className="ppp">
    <Navbar />
    <Switch>
      <Route path="/recipes" exact component={Home} />
      <Route path="/recipes/:id" component={RecipeDetails} />
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Register} />
      <Redirect from="/*" to="/recipes" />
      <Redirect to="/" />
    </Switch>
    <Footer />
  </div>
);

export default App;
