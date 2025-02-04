import React from "react";
import "./index.css";

export default function Withdraw({ active, dispatch }) {
  return (
    <div>
      <button
        className="btn"
        onClick={() => dispatch({ type: "withdraw" })}
        disabled={!active}
      >
        Withdraw 50
      </button>
    </div>
  );
}
