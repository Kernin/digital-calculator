import React from "react";
import classes from "./btnCalc.module.css";

const BtnCalc = (props) => {
  const clickHandler = () => {
    props.calcPress(props.value);
    // console.log(props.value + " from BtnCalc");
  };

  return (
    <button className={` ${classes.btnCalc} ${props.className}`} onClick={clickHandler}>
      {props.children}
    </button>
  );
};

export default BtnCalc;
