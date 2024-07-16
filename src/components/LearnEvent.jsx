import React from "react";

export const LearnEvent = () => {
  const onClickhandle = (e) => {
    e.preventDefault();
    alert("Hello Dreamer, you are super.");
  };
  return (
    <>
      <h1>Learn Event</h1>
      <button onClick={onClickhandle}>Click Me</button>
      <button onClick={(e) => alert("Second click")}>Click Me To</button>
    </>
  );
};
