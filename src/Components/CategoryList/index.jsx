import React from "react";
import "./style.css";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

function CategoryList({
  categoryList,
  handleDeleteCategory,
  handleSelectCurrentCategory,
}) {
  return (
    <ul id="CategoryList__ul__category-list">
      {categoryList.map((category) => (
        <li
          data-id={category.id}
          className="CategoryList__ul__category-list-item"
          onClick={handleSelectCurrentCategory}
        >
          <span
            data-id={category.id}
            className="delete-icon"
            onClick={handleDeleteCategory}
          >
            <DeleteOutlineOutlinedIcon style={{ color: "red" }} />
          </span>
          <span
            className="CategoryList__ul__category-label"
            data-id={category.id}
          >
            {category.label}
          </span>
          <span className="CategoryList__ul__category-count">
            {category.todos.length}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;
