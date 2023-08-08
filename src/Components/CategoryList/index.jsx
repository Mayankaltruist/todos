import React from "react";
import "./style.css";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import imgSrc from "../../img/Illustrator-Vector-Illustration-1.jpg";

function CategoryList({
  categoryList,
  handleDeleteCategory,
  handleSelectCurrentCategory,
}) {
  return categoryList.length === 0 ? (
    <div className="CategoryList__div__fallback-ui">
      <h2 className="CategoryList__h2__fallback-text">Please Add Category</h2>
      <img
        className="CategoryList__img__fallback-img"
        src={imgSrc}
        alt="backgroung image"
      />
    </div>
  ) : (
    <ul id="CategoryList__ul__category-list">
      {categoryList.map((category) => (
        <li
          data-id={category.id}
          key={category.id}
          className="CategoryList__ul__category-list-item"
          onClick={handleSelectCurrentCategory}
        >
          <span
            data-id={category.id}
            className="CategoryList__ul__delete-icon"
            onClick={handleDeleteCategory}
          >
            <DeleteOutlineOutlinedIcon style={{ color: "red" }} />
          </span>
          <span className="CategoryList__ul__category-label">
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
