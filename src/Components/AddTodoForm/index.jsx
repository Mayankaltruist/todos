import React, { useState } from "react";
import "./style.css";

function AddTodoForm({ currentCategoryId, handleAddTodo }) {
  const [itemText, setItemText] = useState("");

  function handleFormSubmit(event) {
    // prevent form default behaviour
    event.preventDefault();
    handleAddTodo(currentCategoryId, itemText.trim());
    //setting input feild to "" after submit
    setItemText("");
  }
  //  making controlled component
  function handleItemTextChange(event) {
    setItemText(event.target.value);
  }

  return (
    <form id="AddTodoForm__form__todo-form" onSubmit={handleFormSubmit}>
      <input
        className="AddTodoForm__form__todo-input"
        type="text"
        value={itemText}
        onChange={handleItemTextChange}
      />
      <button
        type="submit"
        disabled={itemText.trim().length === 0}
        className="AddTodoForm__form__todo-btn"
      >
        ADD TODO
      </button>
    </form>
  );
}

export default AddTodoForm;
