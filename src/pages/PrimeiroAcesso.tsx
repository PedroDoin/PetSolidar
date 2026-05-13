import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Input from "../components/Input";
import Button from "../components/Button";
import { supabase } from "../services/supabase";

export default function PrimeiroAcesso() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [repitaSenha, setRepitaSenha] = useState("");

  const [erro, setErro] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setErro("");
    setMensagem("");

    const nomeFormatado = nome.trim();
    const emailFormatado = email.trim();

    if (!nomeFormatado || !emailFormatado || !senha || !repitaSenha) {
      setErro("Preencha todos os campos.");
      return;
    }

    if (senha !== repitaSenha) {
      setErro("As senhas não coincidem.");
      return;
    }

    if (senha.length < 6) {
      setErro("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    setCarregando(true);

    const { error } = await supabase.auth.signUp({
      email: emailFormatado,
      password: senha,
      options: {
        data: {
          nome: nomeFormatado,
          tipo_usuario: "ong",
        },
        emailRedirectTo: `${window.location.origin}/login`,
      },
    });

    setCarregando(false);

    if (error) {
      setErro(error.message);
      return;
    }

    setMensagem("Cadastro realizado. Retornando para o login...");

    setNome("");
    setEmail("");
    setSenha("");
    setRepitaSenha("");

    setTimeout(() => {
      navigate("/login");
    }, 1500);
  }

  return (
    <AuthLayout title="Primeiro acesso">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          placeholder="Nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />

        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <Input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
        />

        <Input
          type="password"
          placeholder="Repita a senha"
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

        <Button
          type="submit"
          className="mt-2 w-full uppercase"
          disabled={carregando}
        >
          {carregando ? "Confirmando..." : "Confirmar"}
        </Button>

        <button
          type="button"
          onClick={() => navigate("/login")}
          className="text-sm text-[#333333] hover:underline"
        >
          Voltar para login
        </button>
      </form>
    </AuthLayout>
  );
}