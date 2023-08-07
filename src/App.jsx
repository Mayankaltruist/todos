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

  function handleDeleteCategory(event) {
    event.stopPropagation();
    const id = event.target.getAttribute("data-id");
    setCategoryList(categoryList.filter((category) => category.id !== id));
  }

  return (
    <Fragment>
      <Sidebar />
      <Main />
    </Fragment>
  );
}

export default App;
