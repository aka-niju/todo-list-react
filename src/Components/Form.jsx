import React, { useEffect, useState } from "react";
import Tasks from "./Tasks";

function Form() {

  // Creating states
  let arrayOfTasks = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
  let [tasks, setTasks] = useState(arrayOfTasks);
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");

  // Functon to add task 
  const addTask = (e) => {
    e.preventDefault();
    if (title !== "" && description !== "") {
      setTasks([
        ...tasks,
        {
          title,
          description,
        },
      ]);
    }

    // Resetting title and description field to empty after the 'add task' event
    setTitle("");
    setDescription("");
  };

  // Function to delete a task
  const deleteTask = (id) => {
    let updatedArray = tasks.filter((task, index) => {
      return index != id;
    });
    setTasks(updatedArray);
  };

  // Using useEffect Hook to add array of task objects into local storage
  useEffect(() => {
    // converting task object to string because strings is stored in local storage
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="task-form">
      <h1>Todo List</h1>
      <form action="">
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          name=""
          id="task-description"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button className="btn add-btn" onClick={addTask}>
          Add Task
        </button>
      </form>

      {/* Rendering my tasks */}
      {tasks.map((item, index) => {
        return (
          <Tasks
            key={index}
            title={item.title}
            description={item.description}
            id={index}
            deleteTask={deleteTask}
          />
        );
      })}
    </div>
  );
}

export default Form;
