import React from "react";
import "./index.css";

export default function Deposit({ dispatch, active }) {
  return (
    <div>
      <button
        className="btn"
        onClick={() => dispatch({ type: "deposit" })}
        disabled={!active}
      >
        Deposit 150
      </button>
    </div>
  );
}
