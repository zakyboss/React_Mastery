import React from "react";
import "./index.css";
import { useState } from "react";
export default function Withdraw({ active, dispatch }) {
  const [amount, setAmount] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!active || !amount) return;
          dispatch({ type: "withdraw", payload: Number(amount) });
          setAmount("");
        }}
      >
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="input"
          placeholder="Enter Amount"
        />
        <button type="submit">Withdraw</button>
      </form>
    </div>
  );
}
