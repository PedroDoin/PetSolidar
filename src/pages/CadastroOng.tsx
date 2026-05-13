import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Input from "../components/Input";
import Button from "../components/Button";
import { supabase } from "../services/supabase";

export default function CadastroOng() {
  const navigate = useNavigate();

  const [nomeOng, setNomeOng] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [descricao, setDescricao] = useState("");

  const [senha, setSenha] = useState("");
  const [repitaSenha, setRepitaSenha] = useState("");

  const [erro, setErro] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setErro("");
    setMensagem("");

    const nomeFormatado = nomeOng.trim();
    const emailFormatado = email.trim();

    if (!nomeFormatado || !emailFormatado || !senha || !repitaSenha) {
      setErro("Preencha nome da ONG, email e senha.");
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

    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: emailFormatado,
      password: senha,
      options: {
        data: {
          nome_ong: nomeFormatado,
          tipo_conta: "ong",
        },
        emailRedirectTo: `${window.location.origin}/login`,
      },
    });

    if (authError) {
      setCarregando(false);
      setErro(authError.message);
      return;
    }

    const { error: ongError } = await supabase.from("ongs").insert({
      nome: nomeFormatado,
      cnpj: cnpj.trim() || null,
      email: emailFormatado,
      telefone: telefone.trim() || null,
      endereco: endereco.trim() || null,
      cidade: cidade.trim() || null,
      estado: estado.trim() || null,
      descricao: descricao.trim() || null,
      auth_user_id: authData.user?.id || null,
    });

    setCarregando(false);

    if (ongError) {
      setErro(ongError.message);
      return;
    }

    setMensagem("ONG cadastrada com sucesso. Retornando para o login...");

    setNomeOng("");
    setCnpj("");
    setEmail("");
    setTelefone("");
    setEndereco("");
    setCidade("");
    setEstado("");
    setDescricao("");
    setSenha("");
    setRepitaSenha("");

    setTimeout(() => {
      navigate("/login");
    }, 1500);
  }

  return (
    <AuthLayout title="Cadastro da ONG">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          placeholder="Nome da ONG"
          value={nomeOng}
          onChange={(event) => setNomeOng(event.target.value)}
        />

        <Input
          placeholder="CNPJ"
          value={cnpj}
          onChange={(event) => setCnpj(event.target.value)}
        />

        <Input
          type="email"
          placeholder="Email de login da ONG"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <Input
          placeholder="Telefone"
          value={telefone}
          onChange={(event) => setTelefone(event.target.value)}
        />

        <Input
          placeholder="Endereço"
          value={endereco}
          onChange={(event) => setEndereco(event.target.value)}
        />

        <div className="grid grid-cols-2 gap-4">
          <Input
            placeholder="Cidade"
            value={cidade}
            onChange={(event) => setCidade(event.target.value)}
          />

          <Input
            placeholder="Estado"
            value={estado}
            onChange={(event) => setEstado(event.target.value)}
          />
        </div>

        <textarea
          placeholder="Descrição da ONG"
          value={descricao}
          onChange={(event) => setDescricao(event.target.value)}
          className="
            min-h-[100px]
            w-full
            resize-none
            rounded-md
            border
            border-[#b5b5b5]
            bg-white
            px-4
            py-3
            text-sm
            text-[#111111]
            outline-none
            placeholder:text-[#aaaaaa]
            focus:border-[#555555]
          "
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
          {carregando ? "Cadastrando..." : "Cadastrar ONG"}
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