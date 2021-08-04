import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';

function App() {
  return (
    <div className="ppp">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Header} />
      </Switch>
    </div>
  );
}

export default App;
