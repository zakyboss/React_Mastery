import React, { useState } from "react";
import "./index.css";

export default function Deposit({ dispatch, active }) {
  const [amount, setAmount] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!active || !amount) return;
          dispatch({ type: "deposit", payload: Number(amount) });
          setAmount("");
        }}
      >
        <input
          className="input"
          type="number"
          value={amount}
          onChange={(e) => setAmount(() => e.target.value)}
          placeholder="Enter Amount"
        />
        <button type="submit">Deposit</button>
      </form>
    </div>
  );
}
