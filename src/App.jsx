import React, { Fragment } from "react";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";

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

  

  return (
    <Fragment>
      <Sidebar />
      <Main />
    </Fragment>
  );
}

export default App;
