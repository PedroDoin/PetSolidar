import type { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
  title: string;
};

export default function AuthLayout({ children, title }: AuthLayoutProps) {
  return (
    <div className="relative flex min-h-screen overflow-hidden bg-white px-4">
      {/* Formas coloridas parecidas com o protótipo */}
      <div className="pointer-events-none absolute -right-28 -top-24 h-[360px] w-[420px] rotate-[-18deg] rounded-[45%_55%_60%_40%] bg-[#7ED8AB]" />

      <div className="pointer-events-none absolute right-[-80px] top-[190px] h-[210px] w-[260px] rotate-[18deg] rounded-[60%_40%_45%_55%] bg-[#BFE7D0]" />

      <div className="pointer-events-none absolute -bottom-32 -left-28 h-[390px] w-[470px] rotate-[12deg] rounded-[55%_45%_40%_60%] bg-[#7EC4F9]" />

      <div className="pointer-events-none absolute bottom-[70px] left-[210px] h-[150px] w-[190px] rotate-[-20deg] rounded-[45%_55%_50%_50%] bg-[#ACD0EC]" />

      <div className="pointer-events-none absolute bottom-[-70px] right-[120px] h-[230px] w-[260px] rotate-[22deg] rounded-[40%_60%_55%_45%] bg-[#7ED8C9]" />

      {/* Logo no canto superior esquerdo */}
      <header className="absolute left-10 top-8 z-10 flex items-center gap-4">
        <div className="text-7xl leading-none">🐾</div>

        <div>
          <h1 className="text-4xl font-bold leading-tight">PetSolidar</h1>
            <p className="text-lg font-medium">ONG</p>
        </div>
      </header>

      {/* Formulário centralizado */}
      <main className="relative z-10 flex flex-1 items-center justify-center">
        <div className="w-full max-w-[420px]">
          <h2 className="mb-8 text-center text-2xl font-bold">
            {title}
          </h2>

          {children}
        </div>
      </main>
    </div>
  );
}