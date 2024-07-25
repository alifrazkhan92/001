import React from "react";

export const LearnMapMethod = () => {
  const listStyle = {
    color: "blue",
    backgroundColor: "orange",
  };
  const data = ["item-1", "item-2", "item-3", "item-4"];
  return (
    <>
      <h1 style={{ color: "darkgray", backgroundColor: "gray" }}>
        Learn Map Method
      </h1>
      <ul style={listStyle}>
        {data.map((item, i) => (
          <li key={i}>
            {i} --- {}item
          </li>
        ))}
      </ul>
    </>
  );
};
//In this example I used index number but this is not a good practice
// the good practice is, to have an id field and use that.
//I also use CSS in this file for practice.
//I can also use CSS module or External CSS.
//External CSS is global however, the module css need
//to be imported.
