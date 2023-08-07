import React from "react";
import "./style.css";

function TodoList({
  currentCategoryConfig,
  handleToggleTodo,
  handleDeleteTodo,
  todosToShow,
}) {
  return (
    <ul id="todo-list">
      {todosToShow.map((todo) => (
        <li className="todo-list-item" data-id={todo.id}>
          <span
            data-item-id={todo.id}
            data-category-id={currentCategoryConfig.id}
            className="todo-toggle"
            onClick={handleToggleTodo}
          >
            X
          </span>
          <span
            data-id={todo.id}
            className="todo-label"
            style={{ textDecoration: todo.done ? "underline" : "none" }}
          >
            {todo.label}
          </span>
          <span
            data-item-id={todo.id}
            data-category-id={currentCategoryConfig.id}
            className="todo-delete"
            onClick={handleDeleteTodo}
          >
            X
          </span>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
