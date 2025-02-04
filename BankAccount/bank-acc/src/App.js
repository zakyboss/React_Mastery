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
  active:false
};
function reducer(state, action) {
  switch(action.type){
    case 'openAccount':
      return {...state,active :true , balance:state.balance + 500}
    default :
    throw new Error("Unknown Action")
  
    }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { balance, loan } = state;

  return (
    <div className="App">
      <Main>
        <Output balance={balance} loan={loan} />
        <OpenAccount dispatch={dispatch} />
        <Deposit dispatch={dispatch} />
        <Withdraw dispatch={dispatch} />
        <RequestLoan dispatch={dispatch} />
        <PayLoan dispatch={dispatch} />
      <CloseAccount dispatch={dispatch} />
      </Main>
    </div>
  );
}

export default App;
