export default function Header() {
  return (
    <header className="flex h-[80px] items-center justify-between border-b-2 border-black bg-white px-8">
      <div className="flex flex-1 justify-center">
        <div className="flex h-11 w-[320px] items-center rounded border-2 border-black px-4">
          <span className="mr-3 text-xl">⌕</span>
          <input
            placeholder="Pesquisar..."
            className="w-full border-none bg-transparent text-sm outline-none placeholder:text-[#aaaaaa]"
          />
        </div>
      </div>

      <div className="flex items-center gap-8">
        <button className="text-3xl leading-none">♟</button>

        <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-white text-2xl">
          ●
        </div>
      </div>
    </header>
  );
}