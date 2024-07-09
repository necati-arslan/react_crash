import React from "react";
import Button from "./Button";

export const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
      <Button color={"red"} text={"Close"} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
