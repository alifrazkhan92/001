import React from "react";
import { useState, useMemo } from "react";

export const LearnUseMemo = () => {
  const [num, setNum] = useState(0);
  const handleNum = () => {
    setNum(num + 1);
  };

  const handleReset = () => {
    setNum(0);
  };

  const isCountTen = useMemo(() => {
    if (num === 10) {
      return "Yes";
    }
    return "No";
  }, [num]);
  return (
    <>
      <h1>Learn Use Memo</h1>
      <h3>
        The number: {num} {isCountTen}
      </h3>
      <button onClick={handleNum}>Plus ONE</button>
      <button onClick={handleReset}>Reset</button>
      <hr />
    </>
  );
};
