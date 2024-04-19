import { useContext, useRef } from "react";
import React from "react";
import "./App.css";
import Authentication from "./Components/Authentication";
import Theme from "./Components/Theme";

function App() {
  return (
    <>
      <Theme />
      <Authentication />
    </>
  );
}

export default App;
