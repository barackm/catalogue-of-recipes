import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../containers/Home';
import Navbar from './Navbar';
import RecipleDetails from '../containers/RecipleDetails';
import Footer from './Footer';

function App() {
  return (
    <div className="ppp">
      <Navbar />
      <Switch>
        <Route path="/reciples/:id" component={RecipleDetails} />
        <Route path="/reciples" exact component={Home} />
        <Redirect from="/" to="/reciples" />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
