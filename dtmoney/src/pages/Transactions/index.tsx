import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components";

import { useContextSelector } from "use-context-selector";
import { formatterDate, formatterPrice } from "../../Utils/Utils";
import { TransactionContext } from "../../contexts/TransactionContext";
import { Trash } from "phosphor-react";

export function Transactions() {
  const { transactions, deleteTransaction } = useContextSelector(TransactionContext, (context) => {
    return {
      transactions: context.transactions,
      deleteTransaction: context.deleteTransaction
    }
  });
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
            {transactions.length > 0 ? (
              transactions.map((transaction) => {
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
                    <td>
                      <button
                        className="bg-neutral-300 flex gap-1 items-center justify-center text-red-700 px-2 py-1 rounded hover:bg-red-700 hover:text-neutral-300 hover:duration-200"
                        title="Excluir"
                        onClick={() => deleteTransaction(transaction.id)}
                      >
                        Excluir
                        <Trash size={15} weight="duotone" />
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td width="100%" className="py-5 px-8 text-base">
                  Não existem transações cadastradas.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </main>
    </div>
  );
}
