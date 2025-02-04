import React from "react";
import "./index.css";
export default function OpenAccount({ dispatch, active }) {
  return (
    <div>
      <button
        className="btn"
        onClick={() => dispatch({ type: "openAccount" })}
        disabled={active}
      >
        Open Account
      </button>
    </div>
  );
}
