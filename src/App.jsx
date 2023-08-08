import React, { Fragment, useEffect, useState } from "react";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";
import { generateId } from "./utils";

function App() {
  const [currentCategoryId, setCurrentCategoryId] = useState("");
  const [categoryList, setCategoryList] = useState(
    getCategoryListFromLocalStorage()
  );

  useEffect(() => {
    // Save the categoryList to localStorage whenever it changes
    localStorage.setItem("categoryList", JSON.stringify(categoryList));
  }, [categoryList]);

  function getCategoryListFromLocalStorage() {
    const storedData = localStorage.getItem("categoryList");
    return storedData ? JSON.parse(storedData) : [];
  }

  // add new category with empty todos
  function handleAddCategory(label) {
    setCategoryList([
      ...categoryList,
      {
        id: generateId(),
        label: label,
        todos: [],
      },
    ]);
  }

  // delete category along with it's todos
  function handleDeleteCategory(event) {
    event.stopPropagation();
    const id = event.currentTarget.getAttribute("data-id");
    setCategoryList(categoryList.filter((category) => category.id !== id));
  }

  // select category and mark it as current category
  function handleSelectCurrentCategory(event) {
    const categoryId = event.currentTarget.getAttribute("data-id");
    setCurrentCategoryId(categoryId);
  }

  // add todo in selected category
  function handleAddTodo(categoryId, todoLabel) {
    setCategoryList(
      categoryList.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              todos: [
                ...category.todos,
                {
                  id: generateId(),
                  label: todoLabel,
                  done: false,
                },
              ],
            }
          : category
      )
    );
  }

  // delete todo from selected category
  function handleDeleteTodo(event) {
    const categoryId = event.currentTarget.getAttribute("data-category-id");
    const todoId = event.currentTarget.getAttribute("data-item-id");

    setCategoryList(
      categoryList.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              todos: category.todos.filter((todo) => todo.id !== todoId),
            }
          : category
      )
    );
  }

  // toggle done status of a todo in selected category
  function handleToggleTodo(event) {
    const categoryId = event.currentTarget.getAttribute("data-category-id");
    const todoId = event.currentTarget.getAttribute("data-item-id");

    setCategoryList(
      categoryList.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              todos: category.todos.map((todo) =>
                todo.id === todoId
                  ? {
                      ...todo,
                      done: !todo.done,
                    }
                  : todo
              ),
            }
          : category
      )
    );
  }

  // delete all done todos in selected category
  function handleDeleteCompleteTodos(event) {
    const categoryId = event.target.getAttribute("data-category-id");
    setCategoryList(
      categoryList.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              todos: category.todos.filter((todo) => todo.done === false),
            }
          : category
      )
    );
  }

  return (
    <Fragment>
      <Sidebar
        categoryList={categoryList}
        handleSelectCurrentCategory={handleSelectCurrentCategory}
        handleAddCategory={handleAddCategory}
        handleDeleteCategory={handleDeleteCategory}
      />
      <Main
        currentCategoryId={currentCategoryId}
        categoryList={categoryList}
        handleAddTodo={handleAddTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleToggleTodo={handleToggleTodo}
        handleDeleteCompleteTodos={handleDeleteCompleteTodos}
      />
    </Fragment>
  );
}

export default App;
