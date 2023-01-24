import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContextSelector } from 'use-context-selector'
import { TransactionContext } from "../../../contexts/TransactionContext";

export function SearchForm() {
  const searchFormSchema = z.object({
    query: z.string(),
  });

  type SearchFormInputs = z.infer<typeof searchFormSchema>;

  const  getTransactions = useContextSelector(TransactionContext, (context) => {
    return context.getTransactions
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransactions(data: SearchFormInputs) {
    await getTransactions(data.query);
    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(handleSearchTransactions)}
      className="flex gap-4 max-w-3xl mx-auto md:px-0 px-6 mt-6 justify-center"
    >
      <input
        type="text"
        className="flex-1 rounded-md bg-zinc-900 p-4 text-neutral-500
         focus:border-green-700 focus:border outline-none"
        placeholder="Busque uma transação"
        {...register("query")}
      />
      <button
        disabled={isSubmitting}
        type="submit"
        className={`flex gap-3 items-center px-5 py-4 b-zinc-900 border ${
          isSubmitting
            ? "cursor-not-allowed"
            : "hover:bg-green-700 hover:text-white"
        }
       border-green-700 rounded-md text-green-700 disabled:opacity-60
        hover:duration-200 font-bold`}
      >
        <MagnifyingGlass size={20} weight="duotone" />
        Buscar
      </button>
    </form>
  );
}
