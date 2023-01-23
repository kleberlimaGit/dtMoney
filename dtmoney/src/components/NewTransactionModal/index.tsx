///@ts-check
import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { TransactionContext } from "../../contexts/TransactionContext";


const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(["income", "outcome"]),
});

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

interface NewTransactionProps{
  closeModal: () => void
}

export function NewTransactionModal({closeModal}: NewTransactionProps) {

  const { createTransaction } = useContext(TransactionContext);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: "income",
    },
  });

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    const { description, category, price, type } = data;

    await createTransaction({
      description,
      price,
      category,
      type,
    });
    reset();
    closeModal();
  }

  return (
    <Dialog.Portal>
      {/*faz com que um conteudo que possa ir para um ooutro lugar da aplicacao */}
      <Dialog.Overlay className="fixed w-screen h-screen inset-0 bg-black opacity-75" />
      <Dialog.Content
        className=" md:w-128 w-96 min-w-min rounded-md py-10 px-12 bg-neutral-800 fixed md:top-2/4 left-2/4 -bottom-56 md:bottom-0
      -translate-x-2/4 -translate-y-2/4"
      >
        <Dialog.Title className="mb-6">Nova Transação</Dialog.Title>
        <Dialog.Close className="absolute top-6 right-6">
          <X size={20} weight="fill" />
        </Dialog.Close>
        <form
          onSubmit={handleSubmit(handleCreateNewTransaction)}
          className="flex flex-col gap-4"
        >
          <input
            {...register("description")}
            type="text"
            placeholder="Descrição"
            required
            autoFocus
            className="rounded-md focus:border-green-700 focus:border outline-none
           bg-zinc-900 text-neutral-500 py-3 px-4"
          />
          <input
            {...register("price", { valueAsNumber: true })}
            type="number"
            placeholder="Preço"
            required
            className="rounded-md focus:border-green-700 focus:border outline-none
           bg-zinc-900 text-neutral-500 py-3 px-4"
          />
          <input
            {...register("category")}
            type="text"
            placeholder="Categoria"
            required
            className="rounded-md focus:border-green-700 focus:border outline-none
           bg-zinc-900 text-neutral-500 py-3 px-4 "
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <RadioGroup.Root
                  className="grid grid-cols-2 gap-4 mt-2"
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <RadioGroup.Item
                    className="bg-neutral-700 flex items-center justify-center gap-2 rounded-md text-green-600
                             hover:text-neutral-300 
                             hover:bg-green-600 hover:duration-200 p-4 font-bold income"
                    value="income"
                  >
                    <ArrowCircleUp size={20} />
                    Entrada
                  </RadioGroup.Item>

                  <RadioGroup.Item
                    className="bg-neutral-700 hover:bg-red-500 hover:duration-200 flex items-center
                              justify-center gap-2 rounded-md text-red-500 
                              hover:text-neutral-300 p-4 font-bold outcome"
                    value="outcome"
                  >
                    <ArrowCircleDown size={20} />
                    Saida
                  </RadioGroup.Item>
                </RadioGroup.Root>
              );
            }}
          ></Controller>
          <button
            disabled={isSubmitting}
            type="submit"
            className={`w-full bg-emerald-600  rounded py-3 font-bold ${
              isSubmitting
                ? "cursor-not-allowed opacity-75"
                : "hover:bg-emerald-800 hover:duration-200"
            }`}
          >
            Cadastrar
          </button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
