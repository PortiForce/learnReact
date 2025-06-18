import React from "react";
import classes from "./DefaultActionInput.module.css";

const DefaultActionInput = React.forwardRef((props, ref) => {
  return (
    <input
      type="text"
      ref={ref}
      {...props}
      className={classes.defActionInput}
    ></input>
  );
});

export default DefaultActionInput;
