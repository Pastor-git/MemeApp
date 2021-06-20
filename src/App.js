import './style/style.css';
import { Switch, Route, BrowserRouter as Router, NavLink } from "react-router-dom";
import { MainPage } from './components/MainPage';
import { Hot } from './components/Hot';
import { Cold } from './components/Cold';
import React from 'react';
import mem1 from './img/mem1.jpg';
import mem2 from './img/mem2.jpg';
import mem3 from './img/mem3.jpg';
import mem4 from './img/mem4.jpg';


class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      memList: [
        { name: 'mem1', upVote: 0, downVote: 0, img: mem1 },
        { name: 'mem2', upVote: 0, downVote: 0, img: mem2 },
        { name: 'mem3', upVote: 0, downVote: 0, img: mem3 },
        { name: 'mem4', upVote: 0, downVote: 0, img: mem4 }
      ],
    }

  }


  upVote = (name) => {
    let clickedMem = this.state.memList.find((mem) => { return mem.name === name });
    clickedMem.upVote = clickedMem.upVote + 1;
    return this.setState({
      memList: this.state.memList.map((mem) => {
        if (mem.name === clickedMem.name) return clickedMem
        else return mem
      })
    })
  }

  downVote = (name) => {
    let clickedMem = this.state.memList.find((mem) => { return mem.name === name });
    clickedMem.downVote = clickedMem.downVote + 1;
    return this.setState({
      memList: this.state.memList.map((mem) => {
        if (mem.name === clickedMem.name) return clickedMem
        else return mem
      })
    })
  }


  render() {

    return (

      <div className="App">
        <Router>
          <div class="navbar">
            <li><NavLink to="/mainlist">MainList</NavLink></li>
            <li><NavLink to="/hot">Hot</NavLink></li>
            <li><NavLink to="/cold">{`Cold`}</NavLink></li>
          </div>
          <Switch>
            <Route path="/mainlist">
              <MainPage memList={this.state.memList} upVote={this.upVote} downVote={this.downVote} />
            </Route>
            <Route path="/hot">
              <Hot memList={this.state.memList} upVote={this.upVote} downVote={this.downVote} />
            </Route>
            <Route path="/cold" >
              <Cold memList={this.state.memList} upVote={this.upVote} downVote={this.downVote} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }

}

export default App;
