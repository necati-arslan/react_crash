import React from "react";
import Button from "./Button";

export const Header = ({ title }) => {
  const onClick = () => {
    console.log("Okk");
  };

  return (
    <header>
      <h1>{title}</h1>
      <Button onClick={onClick} color={"red"} text={"Close"} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
