import React from "react";
import { BrowserRouter } from "react-router-dom";
import Rout from "./Route/Rout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Rout />
      </BrowserRouter>
    </>
  );
};

export default App;
