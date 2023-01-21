import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components";

export function Transaction() {
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
            <tr>
              <td width="40%" className="py-5 px-8">
                Analista de Sistemas Banco BMG
              </td>
              <td className="text-green-600">R$ 9.058,00</td>
              <td>Trabalho</td>
              <td>31/01/2023</td>
            </tr>
            <tr>
              <td width="50%" className="py-5 px-8">
                Pagamento da energia Coelba
              </td>
              <td className="text-red-600">R$ - 285,00</td>
              <td>Luz</td>
              <td>31/01/2023</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}
