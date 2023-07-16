import React from "react";
import classes from "./rowWrapper.module.css";

const RowWrapper = (props) => {
  return <div className={classes.rowWrapper}>{props.children}</div>;
};

export default RowWrapper;
