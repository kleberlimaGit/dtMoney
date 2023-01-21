import Logo from "../../assets/logo.svg";

export function Header() {
  return (
    <header className="bg-zinc-900 md:px-0 px-6 h-36 pt-4">
      <div className="flex justify-between max-w-3xl mx-auto">
        <div className="flex gap-2 items-center justify-center">
          <img src={Logo} alt="" />
          <span>DT Money</span>
        </div>
        <button className="bg-emerald-600 px-4 py-2 rounded hover:bg-emerald-800 hover:duration-200">
          Nova transação
        </button>
      </div>
    </header>
  );
}
