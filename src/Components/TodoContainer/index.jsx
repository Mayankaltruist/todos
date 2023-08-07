import React from "react";
import AddTodoForm from "../AddTodoForm";
import TodoList from "../TodoList";

function TodoContainer() {
  return (
    <section id="todo-container">
      <AddTodoForm />
      <Tab />
      <TodoList />
      <button>Clear complete item</button>
    </section>
  );
}

export default TodoContainer;
