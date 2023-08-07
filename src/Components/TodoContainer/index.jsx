import React, { useState } from "react";
import "./style.css";
import AddTodoForm from "../AddTodoForm";
import TodoList from "../TodoList";
import Tab from "../Tab";

function TodoContainer({
  currentCategoryConfig,
  handleAddTodo,
  handleDeleteTodo,
  handleToggleTodo,
  handleDeleteCompleteTodos,
}) {
  const [mode, setMode] = useState("all");

  // Function to handle mode when tab clicked
  const handleModeChange = (event) => {
    const modeId = event.target.getAttribute("data-id");
    setMode(modeId);
  };

  let todosToShow;
  // Show all todos
  if (mode === "all") {
    todosToShow = currentCategoryConfig.todos;
    // Show todo with done status false
  } else if (mode === "active") {
    todosToShow = currentCategoryConfig.todos.filter(
      (todo) => todo.done === false
    );
    // Show todo with done status true
  } else {
    todosToShow = currentCategoryConfig.todos.filter(
      (todo) => todo.done === true
    );
  }

  return (
    <section id="todo-container">
      <AddTodoForm
        handleAddTodo={handleAddTodo}
        currentCategoryId={currentCategoryConfig.id}
      />
      <Tab
        tabConfig={[
          {
            id: "all",
            label: "All",
          },
          {
            id: "active",
            label: "Active",
          },
          {
            id: "complete",
            label: "Complete",
          },
        ]}
        currentTabId={mode}
        handleTabClick={handleModeChange}
      />
      <TodoList
        todosToShow={todosToShow}
        handleDeleteTodo={handleDeleteTodo}
        handleToggleTodo={handleToggleTodo}
        currentCategoryId={currentCategoryConfig}
      />
      <button
        onClick={handleDeleteCompleteTodos}
        data-category-id={currentCategoryConfig.id}
      >
        Clear complete item
      </button>
    </section>
  );
}

export default TodoContainer;
