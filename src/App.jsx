import { useState } from "react";
import "./App.css";

import CalcWrapper from "./components/UI/CalcWrapper";
import CalcScreen from "./components/UI/CalcScreen";
import NumPad from "./components/UI/NumPad";
//import BtnCalc from "./components/UI/BtnCalc";

const App = () => {
  //result para guardar las operacion y la respuesta para mostrar en pantalla
  const [result, setResult] = useState("");

  //btnPressHandler recibe cada click de la app y la trabaja para mostrar resultado
  const btnPressHandler = (btnVal) => {
    
   //this if filters when the button is a number or a symbol or the equal sign
   //when the equal is pressed all the numbers and signs collected are fed to eval()
   if (btnVal === "="){
      // navegar string y sacar los numeros y las operaciones 
      //set the result state with the answer from eval()
      setResult(eval(result.toString()) ) ;

    //clears the display and clears the result state
    } else if( btnVal === "ce"){
      setResult([]);

    //reads the button as a number and sets it to result  AS A STRING
    }else{
      setResult( (prevState) =>  `${prevState}${btnVal}`)
    }

  };

  return (
    //wrapper for the whole calculator; contains :
    // the calculator screen and as sibling,
    // the numbpad with contains each button
    <CalcWrapper>
      <CalcScreen operacion={result}></CalcScreen>
      <NumPad btnPressHandler={btnPressHandler}></NumPad>
    </CalcWrapper>
  );
};

export default App;
