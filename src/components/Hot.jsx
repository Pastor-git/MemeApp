import React from "react";

export const Hot = (props) => {
  return (
    <div>
      {props.memList
        .filter((mem) => {
          return mem.upVote > mem.downVote;
        })
        .map((mem) => {
          return (
            <div  class="mem">
              <h1>{mem.name}</h1>,<img src={mem.img} />,
              <h2>
                {mem.upVote} Like {mem.downVote} Dislike
              </h2>
              ,<button onClick={() => props.upVote(mem.name)}>Like</button>
              <button onClick={() => props.downVote(mem.name)}>Dislike</button>
            </div>
          );
        })}
    </div>
  );
};
