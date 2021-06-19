import React from "react";



export const MainPage = (props) => {

  return(
 
    <div>  
    <img src={props.mem1.img} />
    <h1>{props.mem1.name}</h1>
    <h2>{props.mem1.upVote} Like {props.mem1.downVote} Dislike</h2>
    <div><button onClick={props.upVote}>Like</button>
    <button onClick={props.downVote}>Dislike</button>
    </div>
    </div>

  ) 


};
