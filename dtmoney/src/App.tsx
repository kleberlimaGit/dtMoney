import { TransactionProvider } from "./contexts/TransactionContext";
import { Transactions } from "./pages/Transactions";
import "./styles/global.css";
export function App() {
  return (
        <TransactionProvider>
          <Transactions/>
        </TransactionProvider>
  )
}
