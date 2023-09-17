"use client";

import AllTodo from "@/components/AllTodo";
import Header from "@/components/Header";
import TodoList from "@/components/TodoList";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  let pageTitle = "#todo";

  function handleCheckboxChange(id) {
    const updatedItems = tasks.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setTasks(updatedItems);
  }

  function handleDeleteTask(id) {
    const deleteItem = tasks.filter((task) => task.id !== id);

    setTasks(deleteItem);
  }

  function handleDeleteAllTask() {
    const filteredTasks = tasks.filter((task) => {
      if (activeTab == "active") {
        return task.completed;
      } else if (activeTab == "completed") {
        return !task.completed;
      } else {
        return true;
      }
    });

    setTasks(filteredTasks);
  }

  return (
    <>
      <Header pageTitle={pageTitle} />
      <main className="max-w-xl mx-auto">
        <div className="flex justify-around w-full border-b-2 mb-5 text-xl">
          <button
            className={`p-3 ${activeTab == "all" && "border-b-4"}`}
            onClick={() => setActiveTab("all")}
          >
            All
          </button>
          <button
            className={`p-3 ${activeTab == "active" && "border-b-4"}`}
            onClick={() => setActiveTab("active")}
          >
            Active
          </button>
          <button
            className={`p-3 ${activeTab == "completed" && "border-b-4"}`}
            onClick={() => setActiveTab("completed")}
          >
            Completed
          </button>
        </div>

        <div>
          {activeTab == "all" && (
            <AllTodo
              tasks={tasks}
              setTasks={setTasks}
              newTask={newTask}
              setNewTask={setNewTask}
            />
          )}
          <TodoList
            tasks={tasks}
            activeTab={activeTab}
            handleCheckboxChange={handleCheckboxChange}
            handleDeleteTask={handleDeleteTask}
            setTasks={setTasks}
          />
        </div>
        <div className="flex justify-end">
          {activeTab == "completed" && (
            <button
              className="py-5 px-5 bg-blue-500 rounded-xl hover:bg-blue-700 duration-300"
              onClick={handleDeleteAllTask}
            >
              All Delete
            </button>
          )}
        </div>
      </main>
    </>
  );
}
