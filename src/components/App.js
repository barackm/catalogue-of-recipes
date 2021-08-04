import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../containers/Home';
import Navbar from './Navbar';
import RecipeDetails from '../containers/RecipleDetails';
import Footer from './Footer';

function App() {
  return (
    <div className="ppp">
      <Navbar />
      <Switch>
        <Route path="/recipes/:id" component={RecipeDetails} />
        <Route path="/recipes" exact component={Home} />
        <Redirect from="/" to="/recipes" />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
