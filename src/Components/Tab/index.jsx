import React from "react";
import "./style.css";

function Tab({ handleTabClick, tabConfig, currentTabId }) {
  return (
    <ul id="Tab__ul__tab">
      {tabConfig.map((tabConfigItem) => (
        <li
          key={tabConfig.id}
          data-id={tabConfigItem.id}
          onClick={handleTabClick}
          className={
            tabConfigItem.id === currentTabId
              ? "Tab__ul__tab-list Tab__ul__tab-list-active"
              : "Tab__ul__tab-list"
          }
        >
          {tabConfigItem.label}
        </li>
      ))}
    </ul>
  );
}

export default Tab;
