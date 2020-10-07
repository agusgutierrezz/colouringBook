import React, { useState, useEffect } from "react";

export default function ColorPalette(props) {
  // useEffect(() => {

  // });

  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "turquoise",
    "purple",
    "pink",
    "deeppink",
  ];

  return (
    <div className="color-palette">
      {colors.map((id, color) => {
        return (
          <div key={id}>
            <div
              style={{ backgroundColor: id }}
              className="box"
              onClick={() => {
                props.setCurrentColor(id);
              }}
            ></div>
          </div>
        );
      })}
    </div>
  );
}
