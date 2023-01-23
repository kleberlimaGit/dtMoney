import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import Logo from "../../assets/logo.svg";
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
  const [open, setOpen] = useState(false)

  function handleOnOpenChange(){
    let isOpen: boolean;
    if(open === false ){
      isOpen = true
    }else{
      isOpen = false
    }
    setOpen(isOpen)
  }

  return (
    <header className="bg-zinc-900 md:px-0 px-6 h-36 pt-4">
      <div className="flex justify-between max-w-3xl mx-auto">
        <div className="flex gap-2 items-center justify-center">
          <img src={Logo} alt="" />
          <span>DT Money</span>
        </div>
        <Dialog.Root open={open} onOpenChange={handleOnOpenChange}>
          <Dialog.Trigger className="bg-emerald-600 px-4 py-2 rounded hover:bg-emerald-800 hover:duration-200">
            Nova transação
          </Dialog.Trigger>
          <NewTransactionModal closeModal={handleOnOpenChange}/>
        </Dialog.Root>
      </div>
    </header>
  );
}
