import React from "react";

function ClearButton(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.clearState();
        }}
      >
        Clear
      </button>
    </div>
  );
}

export default ClearButton;
