import { render } from "@testing-library/react";
import React from "react";
import mem1 from "./img/mem1.jpg";
import mem2 from "./img/mem2.jpg";
import mem3 from "./img/mem3.jpg";
import mem4 from "./img/mem4.jpg";

class MemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        // memList: [
        //   { name: "mem1", upVote: 0, downVote: 0, img: mem1 },
        //   { name: "mem2", upVote: 0, downVote: 0, img: mem2 },
        //   { name: "mem3", upVote: 0, downVote: 0, img: mem3 },
        //   { name: "mem4", upVote: 0, downVote: 0, img: mem4 },
        // ],
    };
  }

  render() {
    // return <MemList/>;
  }
}
