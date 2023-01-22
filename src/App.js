import React, { useState, useEffect } from "react";
import "./App.css";
import Taskinput from "./components/Taskinput";
import { Tasklist } from "./components/Tasklist";

function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState(
    () => JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (e) => {
    if (!newTask) {
      alert("Need to write your task");
    } else {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };
  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };
  const handleEditTask = (index) => {
    setEditingTask({ index, task: tasks[index] });
  };
  const handleSaveEdit = (e) => {
    if (!newTask) {
      alert("Edit to save");
    } else {
      e.preventDefault();
      setTasks([
        ...tasks.slice(0, editingTask.index),
        newTask,
        ...tasks.slice(editingTask.index + 1),
      ]);
      setNewTask("");
    }
  };
  return (
    <main>
      <h1>To-Do List</h1>
      <Taskinput newTask={newTask} setNewTask={setNewTask} />
      {editingTask ? (
        <form onSubmit={handleSaveEdit}>
          <input
            type="text"
            value={newTask}
            placeholder="Edit your task"
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className="submit" type="submit">
            Save
          </button>
          <button className="cancel" onClick={() => setEditingTask(null)}>
            Cancel
          </button>
        </form>
      ) : (
        <button className="submit" onClick={handleAddTask}>
          Add task
        </button>
      )}
      <Tasklist
        handleEditTask={handleEditTask}
        handleDeleteTask={handleDeleteTask}
        tasks={tasks}
      />
    </main>
  );
}

export default App;
