import style from './style.css';
import { Switch, Route, BrowserRouter as Router, NavLink } from "react-router-dom";
import { MainPage } from './components/MainPage';
import { Hot } from './components/Hot';
import { Cold } from './components/Cold';
import React from 'react';
import mem1 from './img/mem1.jpg';
import mem2 from './img/mem2.jpg';
import mem3 from './img/mem3.jpg';
import mem4 from './img/mem4.jpg';
import Background from './img/backgfx.jpg';

class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      memList: [
        { name: 'Mem1', upVote: 0, downVote: 0, img: mem1 },
        { name: 'Mem2', upVote: 0, downVote: 0, img: mem2 },
        { name: 'Mem3', upVote: 0, downVote: 0, img: mem3 },
        { name: 'Mem4', upVote: 0, downVote: 0, img: mem4 }
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

      <div id="App" stylesheet={style} >
        <div id="header"><text id="welcome_text">It's Rainy Meme!</text></div>
        <Router>
          <div id="navbar" >
            <NavLink to="/mainlist"><button class="navbutton" id="main">MainList</button></NavLink><br/>
            <NavLink to="/hot"><button class="navbutton" id="hot">Hot</button></NavLink><br/>
            <NavLink to="/cold"><button class="navbutton" id="cold">{`Cold`}</button></NavLink>
          </div>
          <div id="content" >
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
          </div>
        </Router>
      </div>
    );
  }

}

export default App;
