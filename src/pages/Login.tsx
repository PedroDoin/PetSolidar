import AuthLayout from "../layouts/AuthLayout";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Login() {
  return (
    <AuthLayout title="Login">
      <form className="flex flex-col gap-4">
        <Input
          label="Email"
          type="email"
          placeholder="Digite seu email"
        />

        <Input
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
        />

        <Button type="submit">
          Entrar
        </Button>

        <div className="mt-2 flex justify-between text-sm">
          <a href="#" className="text-gray-700 hover:underline">
            Esqueci minha senha
          </a>

          <a href="#" className="text-gray-700 hover:underline">
            Primeiro acesso
          </a>
        </div>
      </form>
    </AuthLayout>
  );
}