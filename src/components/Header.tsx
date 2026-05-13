import Input from "./Input";

export default function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-gray-300 bg-white px-8">
      <div className="w-80">
        <Input placeholder="Pesquisar..." />
      </div>

      <div className="flex items-center gap-5">
        <button className="text-2xl">🔔</button>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 font-bold">
          A
        </div>
      </div>
    </header>
  );
}