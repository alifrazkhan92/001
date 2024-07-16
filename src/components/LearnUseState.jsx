import React, { useState } from "react";

export const LearnUseState = () => {
  const [num, setNum] = useState(1);
  const handleNum = () => {
    setNum(num + 1);
  };
  return (
    <>
      <h1>Learn Use State</h1>
      <h2>Your number: {num} </h2>
      <button onClick={handleNum}>Plus ONE</button>
    </>
  );
};
