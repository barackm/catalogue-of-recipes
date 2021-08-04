import { Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Navbar from './Navbar';

function App() {
  return (
    <div className="ppp">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
