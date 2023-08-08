import React, { useState } from "react";
import "./style.css";
import AddTodoForm from "../AddTodoForm";
import TodoList from "../TodoList";
import Tab from "../Tab";
import { tabConfig, ALL, ACTIVE, COMPLETE } from "../../constants";

function TodoContainer({
  currentCategoryConfig,
  handleAddTodo,
  handleDeleteTodo,
  handleToggleTodo,
  handleDeleteCompleteTodos,
}) {
  const [mode, setMode] = useState(ALL);

  // Function to update mode when tab is clicked
  const handleModeChange = (event) => {
    const modeId = event.target.getAttribute("data-id");
    setMode(modeId);
  };

  // deciding which todos to show based on mode
  let todosToShow;
  switch (mode) {
    case ACTIVE:
      todosToShow = currentCategoryConfig.todos.filter(
        (todo) => todo.done === false
      );
      break;
    case COMPLETE:
      todosToShow = currentCategoryConfig.todos.filter(
        (todo) => todo.done === true
      );
      break;
    case ALL:
      todosToShow = currentCategoryConfig.todos;
    default:
      break;
  }

  return (
    <section id="TodoContainer__section__todo-container">
      <AddTodoForm
        handleAddTodo={handleAddTodo}
        currentCategoryId={currentCategoryConfig.id}
      />
      <Tab
        tabConfig={tabConfig}
        currentTabId={mode}
        handleTabClick={handleModeChange}
      />
      <TodoList
        todosToShow={todosToShow}
        currentTabId={mode}
        currentCategoryId={currentCategoryConfig.id}
        handleDeleteTodo={handleDeleteTodo}
        handleToggleTodo={handleToggleTodo}
      />
      <button
        className="TodoContainer__section__btn"
        onClick={handleDeleteCompleteTodos}
        data-category-id={currentCategoryConfig.id}
      >
        Clear complete item
      </button>
    </section>
  );
}

export default TodoContainer;
