import React from "react";

export const Mem = (props) => {
  return (
    <div class="mem">
      <h1 id="mem_title">{props.mem.name}</h1>
      <img src={props.mem.img} alt="jpg1" />
      <h2>
        <text id="like">{props.mem.upVote} Like </text>{" "}
        <text id="dislike">{props.mem.downVote} Dislike </text>
      </h2>
      <button class="vote" onClick={() => props.upVote(props.mem.name)}>
        Like
      </button>
      <button class="vote" onClick={() => props.downVote(props.mem.name)}>
        Dislike
      </button>
    </div>
  );
};

export default Mem;
