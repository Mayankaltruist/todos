import React, { Fragment } from "react";
import "./style.css";
import TodoContainer from "../TodoContainer";
import Header from "../Header";
import imgSrc from "../../img/Illustrator-Vector-Illustration-1.jpg";

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
        <div className="Main__div__fallback-ui">
          <h2 className="Main__h2__fallback-text">Please Select a Category</h2>
          <img
            className="Main__img__fallback-img"
            src={imgSrc}
            alt="backgroung image"
          />
        </div>
      )}
    </main>
  );
}

export default Main;
