import React from "react";
import Mem from "./Mem";

export const MainPage = (props) => {
  // return
  return (
    <div class="mem">
      {props.memList.map((mem) => {
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
