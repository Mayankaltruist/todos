import React from "react";
import "./style.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function UserInfo() {
  return (
    <div id="UserInfo__div__user-info">
      <AccountCircleIcon style={{ height: "60px", width: "60px" }} />
      <h2 id="UserInfo__div__user-name">Paul John</h2>
    </div>
  );
}

export default UserInfo;
