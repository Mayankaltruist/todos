import React from "react";
import "./style.css";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { getNoTodoMessage } from "../../utils";
import imgSrc from "../../img/Illustrator-Vector-Illustration-1.jpg";

function TodoList({
  currentCategoryId,
  currentTabId,
  handleToggleTodo,
  handleDeleteTodo,
  todosToShow,
}) {
  return todosToShow.length === 0 ? (
    <div className="TodoList__div__fallback-ui">
      <p className="TodoList__p__fallback-text">
        {getNoTodoMessage(currentTabId)}
      </p>
      <img
        className="TodoList__img__fallback-img"
        src={imgSrc}
        alt="backgroung image"
      />
    </div>
  ) : (
    <ul id="TodoList__ul__todo-list">
      {todosToShow.map((todo) => (
        <li className="TodoList__ul__todo-list-item" key={todo.id}>
          <input
            type="radio"
            checked={todo.done}
            onClick={handleToggleTodo}
            data-item-id={todo.id}
            data-category-id={currentCategoryId}
            className="TodoList__ul__todo-toggle"
          ></input>
          <span
            className="TodoList__ul__todo-label"
            style={{ textDecoration: todo.done ? "underline" : "none" }}
          >
            {todo.label}
          </span>
          <span
            data-item-id={todo.id}
            data-category-id={currentCategoryId}
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
