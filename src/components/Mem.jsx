import { render } from "@testing-library/react";
import React from "react";

export const Mem = (props) => {
   
          return (
            <div  class="mem">
              <h1>{props.mem.name}</h1>,<img src={props.mem.img} alt="jpg1"/>,
              <h2>
                {props.mem.upVote} Like {props.mem.downVote} Dislike
              </h2>
              ,<button onClick={() => props.upVote(props.mem.name)}>Like</button>
              <button onClick={() => props.downVote(props.mem.name)}>Dislike</button>
            </div>
          );
        
};

export default Mem;
