import './style/style.css';
import { Switch, Route, BrowserRouter as Router, NavLink } from "react-router-dom";
import { MainPage } from './components/MainPage';
import { Hot } from './components/Hot';
import { Cold } from './components/Cold';
import React from 'react';
import mem1 from './img/mem1.jpg'
import mem2 from './img/mem2.jpg'
import mem3 from './img/mem3.jpg'
import mem4 from './img/mem4.jpg'

class App extends React.Component {

  

  constructor(props) {
    super(props);
    this.state = {
      memList: [
        {name: 'mem1', upVote: 0, downVote: 0, img: mem1},
        {name: 'mem2', upVote: 0, downVote: 0, img: mem2},
        {name: 'mem3', upVote: 0, downVote: 0, img: mem3},
        {name: 'mem4', upVote: 0, downVote: 0, img: mem4}
    ],
    }
   
  }

  
upVote=()=>  {
  let vote1 = this.state.memList[0].upVote + 1;
  let vote2 = this.state.memList[0].downVote;
  return this.setState({
    memList: [{name: 'mem1', upVote: vote1, downVote: vote2, img: mem1}],
  })
}

downVote=()=> {
  let vote1 = this.state.memList[0].downVote + 1;
  let vote2 = this.state.memList[0].upVote;
  return this.setState({
    memList: [{name: 'mem1', upVote: vote2, downVote: vote1, img: mem1}],
  })
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
            <MainPage memList={this.state.memList} mem1={this.state.memList[0]} upVote={this.upVote} downVote={this.downVote}/>
          </Route>
          <Route path="/hot">
            <Hot memList={this.state.memList}/>
          </Route>
          <Route path="/cold" >
            <Cold />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

}

export default App;
