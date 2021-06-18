import React from "react";

export function Cold(props) {
  console.log(props.mem1);
  
  return (
    <div>
  <img src={props.mem1.img} />
  <h1>{props.mem1.name}</h1>
  <h2>{props.mem1.upVote}</h2>
  <h2>{props.mem1.downVote}</h2>
  </div>
    );


}
