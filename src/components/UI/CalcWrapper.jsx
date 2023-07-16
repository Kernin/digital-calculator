import React from "react";
import classes from "./calcWrapper.module.css";

const CalcWrapper = (props) => {
  return <div className={classes.calcWrapper}>{props.children}</div>;
};

export default CalcWrapper;
