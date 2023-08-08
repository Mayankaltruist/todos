import React, { useState } from "react";
import "./style.css";

function AddCategoryForm({ handleAddCategory }) {
  // setting state of input
  const [categoryText, setCategoryText] = useState("");

  // making component a controlled component
  const handleChange = (event) => {
    setCategoryText(event.target.value);
  };

  const handleSubmit = (event) => {
    // prevent form default behaviour
    event.preventDefault();
    handleAddCategory(categoryText);
    // reset category text to ""
    setCategoryText("");
  };

  return (
    <form id="AddCategoryForm__form__form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={categoryText}
        onChange={handleChange}
        className="AddCategoryForm__form__input"
      ></input>
      <button type="submit" className="AddCategoryForm__form__btn">
        ADD CATEGORY
      </button>
    </form>
  );
}

export default AddCategoryForm;
