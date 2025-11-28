import React from "react";
import { useState } from "react";

export const Todos = () => {
  const [todos, setTodos] = useState([{ id: 1, text: "sample" }]);
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    const newTask = {
      id: Date.now(),
      text: task,
    };

    setTodos([...todos, newTask]);
    setTask("");
  };

  const handleDelete = (id) => {
    let copy = todos.filter((val) => val.id != id);
    console.log(copy);
    setTodos(copy);
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <br />
      <button>Add</button>

    

      <hr />
      <ul>
        {todos.map((val) => {
          return (
            <li key={val.id}>
              {val.text}
              <button onClick={() => handleDelete(val.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
      </form>
    
    </>
  );
};
