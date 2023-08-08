import React, { useEffect, useState } from "react";
import "./style.css";

function Header({ currentCategoryLabel }) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    // Setup an interval to update the date every second
    const timerId = setInterval(updateDate, 1000);

    // Clear the interval once component unmounts
    return () => {
      clearInterval(timerId);
    };
  }, []);

  // sets date state to current date value
  function updateDate() {
    setDate(new Date());
  }

  return (
    <header id="Header__header__header">
      <h2 className="Header__header__label">{currentCategoryLabel}</h2>
      <p>
        {date.toLocaleDateString("en-us", {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </p>
    </header>
  );
}

export default Header;
