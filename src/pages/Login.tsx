import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Input from "../components/Input";
import Button from "../components/Button";
import { supabase } from "../services/supabase";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setErro("");

    const emailFormatado = email.trim();

    if (!emailFormatado || !senha) {
      setErro("Preencha email e senha.");
      return;
    }

    setCarregando(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: emailFormatado,
      password: senha,
    });

    setCarregando(false);

    if (error) {
      setErro("Email ou senha inválidos.");
      return;
    }

    if (!data.user) {
      setErro("Não foi possível autenticar o usuário.");
      return;
    }

    navigate("/dashboard");
  }

  return (
    <AuthLayout title="LOGIN">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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

        {erro && (
          <p className="rounded-md bg-red-100 px-4 py-3 text-sm font-medium text-red-700">
            {erro}
          </p>
        )}

        <Button
          type="submit"
          className="mt-2 w-full uppercase"
          disabled={carregando}
        >
          {carregando ? "Entrando..." : "Entrar"}
        </Button>

          <div className="mt-2 flex justify-between text-sm">
  <button
    type="button"
    onClick={() => navigate("/recuperar-senha")}
    className="text-[#333333] hover:underline"
  >
    Esqueci minha senha
  </button>

  <button
    type="button"
    onClick={() => navigate("/cadastro-ong")}
    className="text-[#333333] hover:underline"
  >
    Cadastrar ONG
  </button>
</div>
      </form>
    </AuthLayout>
  );
}