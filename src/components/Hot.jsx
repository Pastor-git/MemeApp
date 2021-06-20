import React from "react";
import Mem from "./Mem";

export const Hot = (props) => {
  return (
    <div>
      {props.memList
        .filter((mem) => {
          return mem.upVote > mem.downVote;
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
