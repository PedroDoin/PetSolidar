import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Input from "../components/Input";
import Button from "../components/Button";
import { supabase } from "../services/supabase";

export default function RecuperarSenha() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [codigo, setCodigo] = useState("");
  const [erro, setErro] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [carregandoCodigo, setCarregandoCodigo] = useState(false);

  async function handleEnviarCodigo() {
    setErro("");
    setMensagem("");

    if (!email.trim()) {
      setErro("Insira seu email.");
      return;
    }

    setCarregandoCodigo(true);

    const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
      redirectTo: `${window.location.origin}/nova-senha`,
    });

    setCarregandoCodigo(false);

    if (error) {
      setErro(error.message);
      return;
    }

    setMensagem("Enviamos as instruções de recuperação para seu email.");
  }

  function handleConfirmar(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setErro("");

    if (!email.trim()) {
      setErro("Insira seu email.");
      return;
    }

    if (!codigo.trim()) {
      setErro("Insira o código de recuperação.");
      return;
    }

    navigate("/nova-senha");
  }

  return (
    <AuthLayout title="Esqueci minha senha">
      <form onSubmit={handleConfirmar} className="flex flex-col gap-4">
        <p className="mb-2 text-center text-sm text-[#333333]">
          Insira seu email para o envio do código de recuperação
        </p>

        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
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
          type="button"
          variant="light"
          className="mt-2 w-full uppercase"
          onClick={handleEnviarCodigo}
          disabled={carregandoCodigo}
        >
          {carregandoCodigo ? "Enviando..." : "Enviar código"}
        </Button>
      </form>
    </AuthLayout>
  );
}