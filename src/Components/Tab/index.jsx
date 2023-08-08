import React from "react";
import "./style.css";

function Tab({ handleTabClick, tabConfig, currentTabId }) {
  return (
    <ul id="Tab__ul__tab">
      {tabConfig.map((tabConfigItem) => (
        <li
          key={tabConfigItem.id}
          data-id={tabConfigItem.id}
          onClick={handleTabClick}
          className={
            tabConfigItem.id === currentTabId
              ? "Tab__ul__item Tab__ul__item-active"
              : "Tab__ul__item"
          }
        >
          {tabConfigItem.label}
        </li>
      ))}
    </ul>
  );
}

export default Tab;
