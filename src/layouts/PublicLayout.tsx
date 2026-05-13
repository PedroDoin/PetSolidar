import type { ReactNode } from "react";

type PublicLayoutProps = {
  children: ReactNode;
};

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <header className="flex h-24 items-center justify-between px-16">
        <div>
          <h1 className="text-2xl font-bold">PetSolidar</h1>
          <p className="text-sm text-gray-600">ONG</p>
        </div>

        <nav className="flex items-center gap-10 text-gray-800">
          <a href="#" className="hover:underline">
            Início
          </a>
          <a href="#" className="hover:underline">
            Sobre
          </a>
          <a href="#" className="hover:underline">
            Como adotar
          </a>
          <a href="#" className="hover:underline">
            Campanhas
          </a>
          <a href="#" className="hover:underline">
            Contato
          </a>
        </nav>

        <button className="text-3xl">♡</button>
      </header>

      <main>{children}</main>
    </div>
  );
}