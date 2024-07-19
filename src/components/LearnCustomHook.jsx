import React from "react";
import { useCustomHook } from "./hooks/useCustomHook";

export const LearnCustomHook = () => {
  const { count, handleIncrement } = useCustomHook();
  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>Plus</button>
    </>
  );
};
