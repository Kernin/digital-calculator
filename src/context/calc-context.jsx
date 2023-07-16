import React from " react";

const CalcContext = React.createContext({
  userOperation: [],
  clearScreen: () => {},
  symbolOperation: [],
});

export default CalcContext;
