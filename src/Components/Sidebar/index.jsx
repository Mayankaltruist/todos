import React from "react";
import CategoryList from "../CategoryList";
import UserInfo from "../UserInfo";
import AddCategoryForm from "../AddCategoryForm";

function Sidebar() {
  return (
    <aside id="sidebar">
      <UserInfo />
      <CategoryList />
      <AddCategoryForm />
    </aside>
  );
}

export default Sidebar;
