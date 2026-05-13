import { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import { supabase } from "../services/supabase";

export default function Dashboard() {
  const [nome, setNome] = useState("");

  useEffect(() => {
    async function carregarUsuario() {
      const { data } = await supabase.auth.getUser();

      if (data.user) {
        setNome(data.user.user_metadata?.nome || data.user.email || "");
      }
    }

    carregarUsuario();
  }, []);

  return (
    <AdminLayout activeItem="Dashboards">
      <h1 className="text-3xl font-bold">
        Olá, {nome || "Administrador"}!
      </h1>

      <p className="mt-2 text-lg">
        Bem-vindo(a) de volta!
      </p>
    </AdminLayout>
  );
}