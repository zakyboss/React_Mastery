import React, { useState } from "react";
import "./index.css";

export default function Deposit({ dispatch, active }) {
  const [amount, setAmount] = useState("");

  return (
    <div>
      <input
        className="input"
        type="number"
        value={amount}
        onChange={(e) => setAmount(() => e.target.value)}
        placeholder="Enter Amount"
      />
      <button
        onClick={(e) => {
          // e.preventDefault();
          if (!amount || !active) {
            return;
          }
          dispatch({ type: "deposit", payload: Number(amount) });
          setAmount("");
        }}
      >
        Deposit
      </button>
    </div>
  );
}
