import type { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
  title: string;
};

export default function AuthLayout({ children, title }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-10 shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">PetSolidar</h1>
          <p className="text-sm text-gray-600">ONG</p>
        </div>

        <h2 className="mb-6 text-center text-2xl font-semibold">
          {title}
        </h2>

        {children}
      </div>
    </div>
  );
}