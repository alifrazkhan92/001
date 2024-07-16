import React from "react";

export const LearnLiftStateUp = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    let dt = "I am Lovely Child.";
    props.myCli(dt);
  };
  return (
    <>
      <h1>Learn Lift StateUp</h1>
      <button onClick={handleClick}>Child to Parent</button>
    </>
  );
};
