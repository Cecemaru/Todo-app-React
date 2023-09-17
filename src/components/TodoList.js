"use client";

import React, { useState } from "react";

const TodoList = ({
  tasks,
  activeTab,
  handleCheckboxChange,
  handleDeleteTask,
  setTasks,
}) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editTask, setEditTask] = useState("");

  const filteredTasks = tasks.filter((task) => {
    if (activeTab == "active") {
      return !task.completed;
    } else if (activeTab == "completed") {
      return task.completed;
    } else {
      return true;
    }
  });

  function editTodo(index) {
    const todoToEdit = tasks.find((todo) => todo.id === index);
    setEditTask(todoToEdit.task);
    setEditIndex(index);
  }

  function saveEdit() {
    const updatedTodos = tasks.map((todo) =>
      todo.id === editIndex ? { ...todo, task: editTask } : todo
    );

    console.log(updatedTodos);

    setTasks(updatedTodos);
    setEditTask("");
    setEditIndex(null);
  }

  const cancelEdit = () => {
    setEditTask("");
    setEditIndex(null);
  };

  function oneChangeInput(e) {
    setEditTask(e.target.value);
  }

  return (
    <div>
      <ul className="text-lg ">
        {filteredTasks.map((task) => (
          <li className="flex mb-5 w-full gap-5" key={task.id}>
            {task.id === editIndex ? (
              <>
                <input
                  onChange={oneChangeInput}
                  value={editTask}
                  className="w-full text-black py-4  px-3 text-lg rounded-xl"
                  type="text"
                />

                <button
                  className="text-green-300 border-2 px-3 rounded-lg btn-custom hover:text-green-700 duration-300"
                  onClick={saveEdit}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
                    />
                  </svg>
                </button>

                <button
                  className="text-red-500 border-2 px-3 rounded-lg btn-custom hover:text-red-800 duration-300"
                  onClick={cancelEdit}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                    />
                  </svg>
                </button>
              </>
            ) : (
              <>
                <label
                  className={`border-b-2 border-white px-4 py-4 rounded-md select-none w-full ${
                    task.completed && "line-through"
                  }`}
                  htmlFor={task.id}
                >
                  <input
                    checked={task.completed}
                    onChange={() => handleCheckboxChange(task.id)}
                    className="mr-4 scale-125"
                    type="checkbox"
                    name="name"
                    id={task.id}
                    key={task.id}
                  />

                  {task.task}
                </label>
                <button
                  className="text-green-300 border-2 px-3  rounded-lg btn-custom hover:text-green-700 duration-300"
                  onClick={() => editTodo(task.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </button>

                <button
                  className="text-red-400 border-2 px-3 rounded-lg btn-custom hover:text-red-800 duration-300 "
                  onClick={() => handleDeleteTask(task.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
