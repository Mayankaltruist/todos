import React from "react";
import "./style.css";

function Tab({ handleTabClick, tabConfig, currentTabId }) {
  return (
    <ul>
      {tabConfig.map((tabConfigItem) => (
        <li
          data-id={tabConfigItem.id}
          onClick={handleTabClick}
          className={
            tabConfigItem.id === currentTabId ? "tab tab-active" : "tab"
          }
        >
          {tabConfigItem.label}
        </li>
      ))}
    </ul>
  );
}

export default Tab;
