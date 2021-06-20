import React from "react";
import Mem from "./Mem";

export const Cold = (props) => {
  return (
    <div>
      {props.memList
        .filter((mem) => {
          return mem.downVote >= mem.upVote;
        })
        .map((mem) => {
          return (
            <Mem
              mem={mem}
              memList={props.memList}
              upVote={props.upVote}
              downVote={props.downVote}
            />
          );
        })}
    </div>
  );
};
