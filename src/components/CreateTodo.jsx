import React, { useState } from "react";

const CreateTodo = () => {
  const [tasks, setTask] = useState(0);
  const [input, setInput] = useState("");
  const places = [
    { id: 1, Place: "Tower Bridge" },
    { id: 2, Place: "London Bridge" },
    { id: 3, Place: "Waterloo Bridge" },
  ];

  const hideButton = false;
  const styles = {
    backgroundColor: "red",
  };
  const countTasks = () => {
    // if (tasks === 0) {
    //   return "No task available.";
    // } else {
    //   return `Task: ${tasks}`;
    // }
    return tasks === 0 ? "No tasks available" : `Tasks: ${tasks}`;
  };
  const handleClick = () => {
    setTask(tasks + 1);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <h1 style={styles}>Tasks: {countTasks()}</h1>
      <input type="text" onChange={handleChange} />
      <button disabled={hideButton} onClick={handleClick}>
        Add Task
      </button>
      <h3>Task: {input}</h3>
      <ul>
        {places.map((place) => (
          <li key={places.id}>{place.Place}</li>
        ))}
      </ul>
    </>
  );
};

export default CreateTodo;
