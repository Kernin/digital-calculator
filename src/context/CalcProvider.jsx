import CalcContext from "./calc-context";

//manage the data to then provide it

const calcContext = {
  userOperation: [],
  clearScreen: () => {},
  symbolOperation: [],
};
const CalcProvider = (props) => {
  return <CalcContext.Provider value={calcContext}>{props.children}</CalcContext.Provider>;
};

export default CalcProvider;
