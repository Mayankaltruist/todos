import React, { Fragment } from "react";
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

  return (
    <main id="Main__main__main">
      {currentCategoryId ? (
        <Fragment>
          <Header currentCategoryLabel={currentCategoryConfig.label} />
          <TodoContainer
            currentCategoryConfig={currentCategoryConfig}
            handleAddTodo={handleAddTodo}
            handleDeleteTodo={handleDeleteTodo}
            handleToggleTodo={handleToggleTodo}
            handleDeleteCompleteTodos={handleDeleteCompleteTodos}
          />
        </Fragment>
      ) : (
        <h2 className="Main__main__fallback-text">Please Select a Category</h2>
      )}
    </main>
  );
}

export default Main;
