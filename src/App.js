import React from "react";

import Cabecalho from "./Components/Cabecalho";
import Wraper from "./Components/Container";
import { GlobalStyle}  from './Components/GlobalStyle';


function App() {
  return (
    <>
      <GlobalStyle/>
      <Cabecalho />
      <Wraper/>
    </>
  );
}

export default App;
