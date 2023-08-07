import React from "react";
import "./style.css";

function CategoryList({
  categoryList,
  handleDeleteCategory,
  handleSelectCurrentCategory,
}) {
  return (
    <ul id="category-list">
      {categoryList.map((category) => (
        <li
          data-id={category.id}
          className="category-list-item"
          onClick={handleSelectCurrentCategory}
        >
          <span
            data-id={category.id}
            className="delete-icon"
            onClick={handleDeleteCategory}
          ></span>
          <span className="category-label" data-id={category.id}>
            {category.label}
          </span>
          <span className="category-count">{category.todos.length}</span>
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;
