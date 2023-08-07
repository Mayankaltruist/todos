import React from "react";
import "./style.css";
import TodoContainer from "../TodoContainer";
import Header from "../Header";

function Main({
  currentCategoryId,
  categoryList,
  handleAddTodo,
  handleDeleteTodo,
  handleToggleTodo,
  handleDeleteCompleteTodos,
}) {
  const currentCategoryConfig = categoryList.find(
    (category) => category.id === currentCategoryId
  );

  if (!currentCategoryConfig) {
    // You can decide what to render or show when no category is selected
    return (
      <main id="main">
        <h2>Please Select a Category</h2>
      </main>
    );
  }

  return (
    <main id="main">
      <Header CurrentCategoryLabel={currentCategoryConfig.label} />
      <TodoContainer
        currentCategoryConfig={currentCategoryConfig}
        handleAddTodo={handleAddTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleToggleTodo={handleToggleTodo}
        handleDeleteCompleteTodos={handleDeleteCompleteTodos}
      />
    </main>
  );
}

export default Main;
