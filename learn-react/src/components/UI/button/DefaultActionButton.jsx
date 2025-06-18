import React from "react";
import classes from "./DefaultActionButton.module.css";

const DefaultActionButton = ({ children, ...props }) => {
  return (
    <button {...props} className={classes.defActionButton}>
      {children}
    </button>
  );
};

export default DefaultActionButton;
