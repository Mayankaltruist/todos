import React from "react";
import "./style.css";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

function TodoList({
  currentCategoryConfig,
  handleToggleTodo,
  handleDeleteTodo,
  todosToShow,
}) {
  return (
    <ul id="TodoList__ul__todo-list">
      {todosToShow.map((todo) => (
        <li className="TodoList__ul__todo-list-item" data-id={todo.id}>
          <span
            data-item-id={todo.id}
            data-category-id={currentCategoryConfig.id}
            className="TodoList__ul__todo-toggle"
            onClick={handleToggleTodo}
          >
            <input type="radio"></input>
          </span>
          <span
            data-id={todo.id}
            className="TodoList__ul__todo-label"
            style={{ textDecoration: todo.done ? "underline" : "none" }}
          >
            {todo.label}
          </span>
          <span
            data-item-id={todo.id}
            data-category-id={currentCategoryConfig.ID}
            className="TodoList__ul__todo-delete"
            onClick={handleDeleteTodo}
          >
            <DeleteOutlineOutlinedIcon style={{ color: "red" }} />
          </span>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
