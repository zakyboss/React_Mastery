import React from "react";
import "./index.css";
import { useState } from "react";
export default function Withdraw({ active, dispatch }) {
  const [amount, setAmount] = useState("");
  return (
    <div>
      <input
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="input"
        placeholder="Enter Amount"
      />
      <button
        onClick={(e) => {
          if (!active || !amount) e.preventDefault();
          dispatch({ type: "withdraw", payload: Number(amount) });
          setAmount("");
        }}
      >
        Withdraw
      </button>
    </div>
  );
}
