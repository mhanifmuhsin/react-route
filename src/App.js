
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import { Switch, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <ul className='menu'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <div className='main'>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
