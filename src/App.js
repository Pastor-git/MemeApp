import './style/style.css';
import { Switch, Route, BrowserRouter as Router, NavLink } from "react-router-dom";
import { MainPage } from './components/MainPage';
import { Hot } from './components/Hot';
import { Cold } from './components/Cold';
import React from 'react';
import mem1 from './img/mem1.jpg'


class App extends React.Component {

  

  constructor(props) {
    super(props);
    this.state = {
      memList: [{name: 'mem1', upVote: 0, downVote: 0, img: mem1}],
    }
   
  }


  render() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li><NavLink to="/mainlist">MainList</NavLink></li>
          <li><NavLink to="/hot">Hot</NavLink></li>
          <li><NavLink to="/cold">{`Cold`}</NavLink></li>
        </ul>
        <Switch>
          <Route path="/mainlist">
            <MainPage />
          </Route>
          <Route path="/hot">
            <Hot memList={this.state.memList}/>
          </Route>
          <Route path="/cold" >
            <Cold mem1={this.state.memList[0]}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

}

export default App;
