import React, { useState } from "react";

function AddCategoryForm({ handleAddCategory }) {
  // setting state of input
  const [categoryText, setCategoryText] = useState("");

  // making component a controlled component
  const handleChange = (event) => {
    setCategoryText(event.target.value);
  };

  const handleSubmit = (event) => {
    // prevent form default beaviour
    event.preventDefault();
    handleAddCategory(categoryText);
    // reset category text to ""
    setCategoryText("");
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      <input type="text" value={categoryText} onChange={handleChange}></input>
      <button type="submit">ADD CATEGORY</button>
    </form>
  );
}

export default AddCategoryForm;
