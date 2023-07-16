import React from "react";
import classes from "./calcScreen.module.css";

const CalcScreen = (props) => {
  return (
    <div className={classes.calcScreen} type="text" value={props.value}>
      {props.operacion}
    </div>
  );
};

export default CalcScreen;
