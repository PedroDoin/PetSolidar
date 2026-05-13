import { useState, type FormEvent } from "react";
import AuthLayout from "../layouts/AuthLayout";
import Input from "../components/Input";
import Button from "../components/Button";
import { supabase } from "../services/supabase";

export default function NovaSenha() {
  const [novaSenha, setNovaSenha] = useState("");
  const [repitaSenha, setRepitaSenha] = useState("");
  const [erro, setErro] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setErro("");
    setMensagem("");

    if (!novaSenha || !repitaSenha) {
      setErro("Preencha todos os campos.");
      return;
    }

    if (novaSenha !== repitaSenha) {
      setErro("As senhas não coincidem.");
      return;
    }

    if (novaSenha.length < 6) {
      setErro("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    setCarregando(true);

    const { error } = await supabase.auth.updateUser({
      password: novaSenha,
    });

    setCarregando(false);

    if (error) {
      setErro(error.message);
      return;
    }

    setMensagem("Senha alterada com sucesso.");
  }

  return (
    <AuthLayout title="Escolher nova senha">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          type="password"
          placeholder="Digite sua nova senha"
          value={novaSenha}
          onChange={(event) => setNovaSenha(event.target.value)}
        />

        <Input
          type="password"
          placeholder="Repita a nova senha"
          value={repitaSenha}
          onChange={(event) => setRepitaSenha(event.target.value)}
        />

        {erro && (
          <p className="rounded-md bg-red-100 px-4 py-3 text-sm font-medium text-red-700">
            {erro}
          </p>
        )}

        {mensagem && (
          <p className="rounded-md bg-green-100 px-4 py-3 text-sm font-medium text-green-700">
            {mensagem}
          </p>
        )}

        <Button type="submit" className="mt-2 w-full uppercase" disabled={carregando}>
          {carregando ? "Confirmando..." : "Confirmar"}
        </Button>
      </form>
    </AuthLayout>
  );
}