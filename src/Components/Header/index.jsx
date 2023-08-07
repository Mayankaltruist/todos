import React, { useEffect, useState } from "react";
import "./style.css";

function Header({ currentCategoryLabel }) {
  const [date, setDate] = useState("");

  useEffect(() => {
    // Function to update the date
    const updateDate = () => {
      setDate(new Date());
    };
    // Call updateDate once on component mount
    updateDate();
    // Setup an interval to update the date every secont
    const timerId = setInterval(updateDate, 1000);
    // Clear the interval once component unmount
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <header id="header">
      <h2>{currentCategoryLabel}</h2>
      <p>{date.toString()}</p>
    </header>
  );
}

export default Header;
