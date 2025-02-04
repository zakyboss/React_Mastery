import React from "react";
import "./index.css";

export default function RequestLoan({ dispatch, active, activeLoan }) {
  return (
    <div>
      <button
        className="btn"
        onClick={() => dispatch({ type: "requestLoan" })}
        disabled={!active || activeLoan}
      >
        Request Loan of 5000
      </button>
    </div>
  );
}
