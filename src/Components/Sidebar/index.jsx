import React from "react";
import "./style.css";
import CategoryList from "../CategoryList";
import UserInfo from "../UserInfo";
import AddCategoryForm from "../AddCategoryForm";

function Sidebar({
  categoryList,
  handleAddCategory,
  handleDeleteCategory,
  handleSelectCurrentCategory,
}) {
  return (
    <aside id="sidebar">
      <UserInfo />
      <CategoryList
        categoryList={categoryList}
        handleDeleteCategory={handleDeleteCategory}
        handleSelectCurrentCategory={handleSelectCurrentCategory}
      />
      <AddCategoryForm handleAddCategory={handleAddCategory} />
    </aside>
  );
}

export default Sidebar;
