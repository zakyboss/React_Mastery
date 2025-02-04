import React from "react";
import "./index.css";

export default function PayLoan({ active, dispatch }) {
  return (
    <div>
      <button className="btn" onClick={() => dispatch({ type: "payLoan" })}>
        Pay Loan
      </button>
    </div>
  );
}
