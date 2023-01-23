import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components";

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { formatterDate, formatterPrice } from "../../Utils/Utils";
import { TransactionContext } from "../../contexts/TransactionContext";

export function Transactions() {
  const { transactions } = useContext(TransactionContext);

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
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="40%" className="py-5 px-8">
                    {transaction.description}
                  </td>
                  <td
                    className={
                      transaction.type === "income"
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  >
                    {formatterPrice.format(transaction.price)}
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {formatterDate.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </div>
  );
}
