import './style/style.css';
import { Switch, Route, BrowserRouter as Router, NavLink } from "react-router-dom";
import { MainPage } from './components/MainPage';
import { Hot } from './components/Hot';
import { Cold } from './components/Cold';


function App() {
  return (
    <div className="App">
      <Router>
        <ul>
        <li><NavLink to="/Mainlist">MainList</NavLink></li>
        <li><NavLink to="/hot">Hot</NavLink></li>
        <li><NavLink to="/cold">Cold</NavLink></li>
        </ul>
        <Switch>
        <Route path="/Mainlist">
          <MainPage/>
        </Route>
        <Route path="/hot">
          <Hot />
        </Route>
        <Route path="/cold">
          <Cold />
        </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
