import React from "react";
import { v4 as uuidv4 } from "uuid";

const CreateTodo = ({ tasks, setTasks, newTask, setNewTask }) => {
  function handleNewTask(e) {
    setNewTask(e.target.value);
  }

  function handleAddTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: uuidv4(), task: newTask, completed: false }]);
      setNewTask("");
    } else {
      return alert("Please enter the text");
    }
  }

  const handleKeyDown = (event) => {
    {
      event.key === "Enter" && handleAddTask();
    }
  };

  return (
    <div>
      <div className="flex gap-3 mb-8">
        <input
          onChange={handleNewTask}
          value={newTask}
          onKeyDown={handleKeyDown}
          className="w-full text-black  px-3 text-sm rounded-xl"
          type="text"
          placeholder="add details"
        />
        <button
          onClick={handleAddTask}
          className="py-4 px-11 bg-blue-500 rounded-xl hover:bg-blue-700 duration-300"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default CreateTodo;
