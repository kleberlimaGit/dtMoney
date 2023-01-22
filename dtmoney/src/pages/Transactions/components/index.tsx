import {MagnifyingGlass} from "phosphor-react";
export function SearchForm() {
  return (
    <form
      action=""
      className="flex gap-4 max-w-3xl mx-auto md:px-0 px-6 mt-6 justify-center"
    >
      <input
        type="text"
        className="flex-1 rounded-md bg-zinc-900 p-4 text-neutral-500
         focus:border-green-700 focus:border outline-none"
        placeholder="Busque uma transação"
      />
      <button
        type="submit"
        className="flex gap-3 items-center px-5 py-4 b-zinc-900 border
       border-green-700 rounded-md text-green-700 hover:bg-green-700 
       hover:text-white hover:duration-200 font-bold"
      >
        <MagnifyingGlass size={20} weight="duotone"/>
        Buscar
      </button>
    </form>
  );
}
