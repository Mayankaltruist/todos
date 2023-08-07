import React, { Fragment, useEffect, useState } from "react";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";
import { generateId } from "./utils";

function App() {
  const initialCategoryList = [
    {
      id: "workout",
      label: "Workout",
      todos: [
        {
          id: "1",
          label: "Running",
          done: false,
        },
        {
          id: "2",
          label: "Go to Gym",
          done: false,
        },
      ],
    },
    {
      id: "study",
      label: "Study",
      todos: [
        {
          id: "1",
          label: "Read Book",
          done: false,
        },
        {
          id: "2",
          label: "Write journel",
          done: false,
        },
      ],
    },
  ];

  const [currentCategoryId, setCurrentCategoryId] = useState("");
  const [categoryList, setCategoryList] = useState(() => {
    const storedData = localStorage.getItem("categoryList");
    return storedData ? JSON.parse(storedData) : initialCategoryList;
  });

  useEffect(() => {
    // Save the categoryList to localStorage whenever it changes
    localStorage.setItem("categoryList", JSON.stringify(categoryList));
  }, [categoryList]);

  // Function to add category
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

  // Funtion to delete category
  function handleDeleteCategory(event) {
    event.stopPropagation();
    const id = event.target.getAttribute("data-id");
    setCategoryList(categoryList.filter((category) => category.id !== id));
  }

  // Function to add todos in selected category
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

  return (
    <Fragment>
      <Sidebar />
      <Main />
    </Fragment>
  );
}

export default App;
