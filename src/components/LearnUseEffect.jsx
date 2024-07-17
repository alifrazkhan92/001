import { useEffect, useState } from "react";

export const LearnUseEffect = () => {
  const [num, setNum] = useState(0);
  const handleNum = () => {
    setNum(num + 1);
  };
  const [rand, setRand] = useState(0);
  const handleRand = () => {
    let newRand = Math.floor(Math.random() * 100) + 1;
    setRand(newRand);
  };
  const handlereset = () => {
    setNum(0);
    setRand(0);
  };
  //1-Use effect execute with every rendering component.
  //it requires two parameters, one callback function
  //and second is array.
  //2-useEffect(() => {console.log("Use Effect Called")},[]);
  //if you use [], the useEffect will run only once.
  //3-if you add the dependency in the array like
  //useEffect(() => {console.log("Use Effect Called")},[count]);
  //this will execute on the execution of the dependency.
  useEffect(() => {
    console.log("Use Effect Called");
  });
  return (
    <>
      <h1>Learn Use Effect</h1>
      <h3>The number: {num}</h3>
      <button onClick={handleNum}>Plus ONE</button>
      <button onClick={handlereset}>Reset</button>
      <hr />
      <h3>The Random Number: {rand}</h3>
      <button onClick={handleRand}>Random Number</button>
      <button onClick={handlereset}>Reset</button>
    </>
  );
};
