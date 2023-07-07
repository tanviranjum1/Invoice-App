import React from "react";
import User from "../../assets/user.jpg";
import "./SideBar.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const SideBar = () => {
  return (
    <div className="sidebar">
      <Logo />
      <img src={User} alt="My Image" />
    </div>
  );
};

export default SideBar;
