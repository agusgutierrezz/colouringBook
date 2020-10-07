import React, { useState, useEffect } from "react";
import Fireman from "./components/color/Fireman.js";
import ColorPallete from "./components/color/ColorPallete.js";
import ClearButton from "./components/color/ClearButton.js";
import "./App.css";
function App() {
  const [fillColors, setFillColors] = useState(Array(22).fill("white"));

  const [currentColor, setCurrentColor] = useState("blue");

  const onFillColor = (i) => {
    let newFillColors = fillColors.slice(0);
    newFillColors[i] = currentColor;
    setFillColors(newFillColors);
  };
  const clearState = () => {
    setFillColors(Array(22).fill("white"));
  };

  return (
    <div className="App">
      <Fireman fillColors={fillColors} onFill={onFillColor} />
      <ColorPallete setCurrentColor={setCurrentColor} />
      <ClearButton clearState={clearState} />
    </div>
  );
}

export default App;
