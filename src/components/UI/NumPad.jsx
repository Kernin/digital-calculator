import React from "react";
import BtnCalc from "./BtnCalc";
import classes from "./numPad.module.css";
import btnClasses from "./btnCalc.module.css";

const NumPad = (props) => {
  return (
    <div className={classes.numPad} alt="sometext">
      

      <BtnCalc value="7" calcPress={props.btnPressHandler}>
        7
      </BtnCalc>
      <BtnCalc value="8" calcPress={props.btnPressHandler}>
        8
      </BtnCalc>
      <BtnCalc value="9" calcPress={props.btnPressHandler}>
        9
      </BtnCalc>
      <BtnCalc value="+" className={btnClasses.operands} calcPress={props.btnPressHandler}>
        +
      </BtnCalc>

      
      <BtnCalc value="4" calcPress={props.btnPressHandler}>
        4
      </BtnCalc>
      <BtnCalc value="5" calcPress={props.btnPressHandler}>
        5
      </BtnCalc>
      <BtnCalc value="6" calcPress={props.btnPressHandler}>
        6
      </BtnCalc>
      <BtnCalc value="-" className={btnClasses.operands} calcPress={props.btnPressHandler}>
        -
      </BtnCalc>


      <BtnCalc value="1" calcPress={props.btnPressHandler}>
        1
      </BtnCalc>
      <BtnCalc value="2" calcPress={props.btnPressHandler}>
        2
      </BtnCalc>
      <BtnCalc value="3" calcPress={props.btnPressHandler}>
        3
      </BtnCalc>
      <BtnCalc value="*" className={btnClasses.operands} calcPress={props.btnPressHandler}>
        x
      </BtnCalc>
     

      <BtnCalc value="ce" className={btnClasses.equals} calcPress={props.btnPressHandler}>
        ce
      </BtnCalc>
      <BtnCalc value="0" calcPress={props.btnPressHandler}>
        0
      </BtnCalc>
     
      <BtnCalc value="=" className={btnClasses.equals} calcPress={props.btnPressHandler}>
        =
      </BtnCalc>
      
      <BtnCalc value="/" className={btnClasses.operands} calcPress={props.btnPressHandler}>
        /
      </BtnCalc>
      
      
    </div>
  );
};

export default NumPad;
