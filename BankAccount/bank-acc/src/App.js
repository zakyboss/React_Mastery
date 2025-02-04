import Main from "./Main";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import PayLoan from "./PayLoan";
import OpenAccount from "./OpenAccount";
import RequestLoan from "./RequestLoan";
import Output from "./Output";
import CloseAccount from "./CloseAccount";
import { useReducer } from "react";
const initialState = {
  balance: 0,
  loan: 0,
  active: false,
  activeLoan: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "openAccount":
      return { ...state, active: true, balance: state.balance + 500 };
    case "deposit":
      return { ...state, balance: state.balance + 150 };
    case "withdraw":
      return { ...state, balance: state.balance > 0 ? state.balance - 50 : 0 };
    case "requestLoan":
      if (!state.active || state.activeLoan) return state;
      return {
        ...state,
        loan: state.loan + 5000,
        state,
        activeLoan: true,
        balance: state.balance + 5000,
      };
    case "payLoan":
      if (!state.active || !state.activeLoan) return state;
      return {
        ...state,
        loan: 0,
        activeLoan: false,
        balance: state.balance - 5000,
      };
    case "closeAccount":
      if (state.balance > 0 || state.loan > 0 || !state.active) return state;
      return { ...state, balance: 0, active: false };
    default:
      throw new Error("Unknown Action");
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { balance, loan, active, activeLoan } = state;

  return (
    <div className="App">
      <Main>
        <Output balance={balance} loan={loan} active={active} />
        <OpenAccount dispatch={dispatch} active={active} />
        <Deposit dispatch={dispatch} active={active} />
        <Withdraw dispatch={dispatch} active={active} />
        <RequestLoan
          dispatch={dispatch}
          active={active}
          activeLoan={activeLoan}
        />
        <PayLoan dispatch={dispatch} active={active} />
        <CloseAccount dispatch={dispatch} active={active} />
      </Main>
    </div>
  );
}

export default App;
