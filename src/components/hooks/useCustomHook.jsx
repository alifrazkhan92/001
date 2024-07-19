import { useState } from "react";

export const useCustomHook = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  return {
    count,
    handleIncrement,
  };
};

//Any hook return two values
// 1- Current Value - count 2- Function - handleIncrement
