import React from "react";

function TodoList() {
  return (
    <ul id="todo-list">
      <li>
        <span className="todo-toggle"></span>
        <span className="todo-lebel"></span>
        <span className="todo-delete"></span>
      </li>
    </ul>
  );
}

export default TodoList;
