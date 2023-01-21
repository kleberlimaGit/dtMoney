import { ArrowCircleUp, ArrowCircleDown, CurrencyDollarSimple } from "phosphor-react";
export function Summary() {
  return (
    <div className="flex gap-9 max-w-3xl mx-auto flex-nowrap md:px-0 px-6 sm:overflow-auto overflow-x-scroll -mt-14">
      <div className="bg-neutral-700 flex gap-4 flex-col w-60 p-4 rounded-md flex-nowrap ">
        <div className="flex justify-between items-center gap">
          <small>Entradas</small>
          <ArrowCircleUp size={20} className="text-emerald-600"/>
        </div>
        <strong className="text-2xl">R$ 17.400,00</strong>
      </div>
      <div className="bg-neutral-700 flex gap-4 flex-col w-60 p-4 rounded-md flex-nowrap ">
        <div className="flex justify-between items-center gap flex-nowrap ">
          <small>Saidas</small>
          <ArrowCircleDown size={20} className="text-red-500"/>
        </div>
        <strong className="text-2xl">R$ 17.400,00</strong>
      </div>
      <div className="bg-emerald-600 flex gap-4 flex-col w-60 p-4 rounded-md flex-nowrap ">
        <div className="flex justify-between items-center gap flex-nowrap ">
          <small>Total</small>
          <CurrencyDollarSimple size={20} />
        </div>
        <strong className="text-2xl">R$ 17.400,00</strong>
      </div>
    </div>
  );
}
