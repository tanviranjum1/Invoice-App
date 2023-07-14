import React, { useState } from "react";
import User from "../../assets/user.jpg";
import "./SideBar.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Moon } from "../../assets/icon-moon.svg";
import { ReactComponent as Sun } from "../../assets/icon-sun.svg";
import Image from "react-bootstrap/Image";

const SideBar = () => {
  const [mode, setMode] = useState(true);

  const toggleMode = () => {
    setMode(!mode);
  };

  return (
    <div className="sidebar">
      <span
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="logo-img"
      >
        <Logo />
      </span>
      <div>
        <span
          style={{ display: "flex", justifyContent: "center" }}
          onClick={toggleMode}
          className="mb-2"
        >
          {mode ? <Moon /> : <Sun />}
        </span>
        <div className="top-border"></div>
        <Image src={User} alt="My Image" roundedCircle />
      </div>
    </div>
  );
};

export default SideBar;
