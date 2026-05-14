import { useEffect, useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Card from "../components/Card";
import Input from "../components/Input";
import Button from "../components/Button";
import { supabase } from "../services/supabase";

type ConfiguracoesSistema = {
  nomeOng: string;
  emailOng: string;
  telefoneOng: string;
  cidade: string;
  estado: string;
  prazoProximaEtapa: string;
  limiteEstoqueBaixo: string;
  limiteEstoqueCritico: string;
  alertarEstoque: boolean;
  alertarAdocao: boolean;
  alertarPosAdocao: boolean;
};

const configuracoesIniciais: ConfiguracoesSistema = {
  nomeOng: "",
  emailOng: "",
  telefoneOng: "",
  cidade: "",
  estado: "",
  prazoProximaEtapa: "7",
  limiteEstoqueBaixo: "5",
  limiteEstoqueCritico: "2",
  alertarEstoque: true,
  alertarAdocao: true,
  alertarPosAdocao: true,
};

export default function Configuracoes() {
  const navigate = useNavigate();

  const [config, setConfig] = useState<ConfiguracoesSistema>(
    configuracoesIniciais
  );

  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    const dadosSalvos = localStorage.getItem("petsolidar_configuracoes");

    if (dadosSalvos) {
      setConfig(JSON.parse(dadosSalvos));
    }
  }, []);

  function atualizarCampo(
    campo: keyof ConfiguracoesSistema,
    valor: string | boolean
  ) {
    setConfig((estadoAnterior) => ({
      ...estadoAnterior,
      [campo]: valor,
    }));
  }

  function salvarConfiguracoes(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    localStorage.setItem("petsolidar_configuracoes", JSON.stringify(config));

    setMensagem("Configurações salvas com sucesso.");

    setTimeout(() => {
      setMensagem("");
    }, 2500);
  }

  async function sairDaConta() {
    await supabase.auth.signOut();
    navigate("/login");
  }

  return (
    <AdminLayout activeItem="Configuração">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Configurações</h1>
        <p className="mt-1 text-sm text-gray-600">
          Ajuste os dados principais da ONG e as regras usadas pelo sistema.
        </p>
      </div>

      <form onSubmit={salvarConfiguracoes} className="flex flex-col gap-6">
        <Card>
          <h2 className="mb-4 text-xl font-bold">Dados da ONG</h2>

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Nome da ONG"
              placeholder="Ex: PetSolidar"
              value={config.nomeOng}
              onChange={(event) =>
                atualizarCampo("nomeOng", event.target.value)
              }
            />

            <Input
              label="Email institucional"
              type="email"
              placeholder="contato@ong.com"
              value={config.emailOng}
              onChange={(event) =>
                atualizarCampo("emailOng", event.target.value)
              }
            />

            <Input
              label="Telefone"
              placeholder="(00) 00000-0000"
              value={config.telefoneOng}
              onChange={(event) =>
                atualizarCampo("telefoneOng", event.target.value)
              }
            />

            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Cidade"
                placeholder="Joinville"
                value={config.cidade}
                onChange={(event) =>
                  atualizarCampo("cidade", event.target.value)
                }
              />

              <Input
                label="Estado"
                placeholder="SC"
                value={config.estado}
                onChange={(event) =>
                  atualizarCampo("estado", event.target.value)
                }
              />
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="mb-4 text-xl font-bold">Adoção</h2>

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Prazo padrão para próxima etapa"
              type="number"
              min="1"
              placeholder="7"
              value={config.prazoProximaEtapa}
              onChange={(event) =>
                atualizarCampo("prazoProximaEtapa", event.target.value)
              }
            />

            <div className="rounded-md border border-[#b5b5b5] p-4">
              <p className="font-semibold">Etapas do processo</p>

              <ol className="mt-3 list-inside list-decimal text-sm text-gray-700">
                <li>Interesse</li>
                <li>Entrevista</li>
                <li>Aprovação</li>
                <li>Adoção concluída</li>
              </ol>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="mb-4 text-xl font-bold">Estoque</h2>

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Limite para status Baixo"
              type="number"
              min="0"
              value={config.limiteEstoqueBaixo}
              onChange={(event) =>
                atualizarCampo("limiteEstoqueBaixo", event.target.value)
              }
            />

            <Input
              label="Limite para status Crítico"
              type="number"
              min="0"
              value={config.limiteEstoqueCritico}
              onChange={(event) =>
                atualizarCampo("limiteEstoqueCritico", event.target.value)
              }
            />
          </div>

          <p className="mt-3 text-sm text-gray-600">
            Exemplo: se o item tiver quantidade menor ou igual ao limite crítico,
            ele aparece como “Crítico”. Se estiver acima do crítico e menor ou
            igual ao limite baixo, aparece como “Baixo”.
          </p>
        </Card>

        <Card>
          <h2 className="mb-4 text-xl font-bold">Notificações</h2>

          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-3 text-sm font-medium">
              <input
                type="checkbox"
                checked={config.alertarEstoque}
                onChange={(event) =>
                  atualizarCampo("alertarEstoque", event.target.checked)
                }
              />
              Alertar quando o estoque estiver baixo ou crítico
            </label>

            <label className="flex items-center gap-3 text-sm font-medium">
              <input
                type="checkbox"
                checked={config.alertarAdocao}
                onChange={(event) =>
                  atualizarCampo("alertarAdocao", event.target.checked)
                }
              />
              Alertar sobre próximas etapas de adoção
            </label>

            <label className="flex items-center gap-3 text-sm font-medium">
              <input
                type="checkbox"
                checked={config.alertarPosAdocao}
                onChange={(event) =>
                  atualizarCampo("alertarPosAdocao", event.target.checked)
                }
              />
              Alertar sobre check-ins pós-adoção
            </label>
          </div>
        </Card>

        <Card>
          <h2 className="mb-4 text-xl font-bold">Conta</h2>

          <div className="flex gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/nova-senha")}
            >
              Alterar senha
            </Button>

            <Button type="button" variant="danger" onClick={sairDaConta}>
              Sair da conta
            </Button>
          </div>
        </Card>

        {mensagem && (
          <p className="rounded-md bg-green-100 px-4 py-3 text-sm font-medium text-green-700">
            {mensagem}
          </p>
        )}

        <div className="flex justify-end">
          <Button type="submit">Salvar configurações</Button>
        </div>
      </form>
    </AdminLayout>
  );
}