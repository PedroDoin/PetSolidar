import type { ReactNode } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

type AdminLayoutProps = {
  children: ReactNode;
  activeItem?: string;
};

export default function AdminLayout({
  children,
  activeItem = "Dashboards",
}: AdminLayoutProps) {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar activeItem={activeItem} />

      <div className="flex min-h-screen flex-1 flex-col">
        <Header />

        <main className="flex-1 px-7 py-7">
          {children}
        </main>
      </div>
    </div>
  );
}