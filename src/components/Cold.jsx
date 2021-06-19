import React from "react";

export const Cold = (props) => {
  return (
    <div>
      {props.memList
        .filter((mem) => {
          return mem.downVote === 0;
        })
        .map((mem) => {
          return (
            <div>
              <img src={mem.img} />,<h1>{mem.name}</h1>,
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
}
