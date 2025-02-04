import React from "react";
import "./index.css";

export default function CloseAccount({dispatch, active}) {
  return (
    <div>
      <button className="btn" onClick={()=> dispatch({type:'closeAccount'})}>Close Account</button>
    </div>
  );
}
