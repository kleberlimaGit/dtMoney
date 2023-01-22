import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components";

import axios from "axios";
import { useEffect, useState } from "react";
import { formatterDate, formatterPrice } from "../../Utils/Utils";

interface Transaction {
  id: string;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

export function Transactions() {
  const [transcations, setTransactions] = useState<Transaction[]>([]);

  async function getTransactions() {
    await axios.get("http://localhost:3333/transactions").then((response) => {
      setTransactions(response.data);
    });
  }

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div>
      <Header />
      <Summary />
      <SearchForm />
      <main
        className="flex items-center max-w-3xl mx-auto flex-nowrap 
          md:px-0 px-6 text-xs mt-4 sm:overflow-auto overflow-x-scroll"
      >
        <table className="w-full border-separate border-spacing-y-2">
          <tbody className="bg-neutral-700">
            {transcations.map((transaction) => {
              return (
                <tr>
                  <td width="40%" className="py-5 px-8">
                    {transaction.description}
                  </td>
                  <td className={transaction.type === 'income' ? 'text-green-600' :'text-red-600' }>{formatterPrice.format(transaction.price)}</td>
                  <td>{transaction.category}</td>
                  <td>{formatterDate.format(new Date(transaction.createdAt)) }</td>
                </tr>
              );
            })}

            {/* <tr>
              <td width="50%" className="py-5 px-8">
                Pagamento da energia Coelba
              </td>
              <td className="text-red-600">R$ - 285,00</td>
              <td>Luz</td>
              <td>31/01/2023</td>
            </tr> */}
          </tbody>
        </table>
      </main>
    </div>
  );
}
