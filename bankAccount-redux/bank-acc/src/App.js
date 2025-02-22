import Customer from "./features/customer/Customer";
import AccountOperations from "./features/account/AccountOperations";
import BalanceDisplay from "./features/account/BalanceDisplay";
import CreateCustomer from "./features/customer/CreateCustomer";
import { useSelector } from "react-redux";

export default function App() {
  const customer = useSelector((state) => state.customer); // Fixed parameter name

  console.log(customer);

  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {customer.fullName === "" ? (
        <CreateCustomer />
      ) : (
        <div>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </div>
      )}
    </div>
  );
}
