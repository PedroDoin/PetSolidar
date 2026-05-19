import AdminLayout from "../layouts/AdminLayout";
import Card from "../components/Card";
import Button from "../components/Button";
import Input from "../components/Input";
import StatusBadge from "../components/StatusBadge";
import Table from "../components/Table";

export default function Adocao() {
  return (
    <AdminLayout activeItem="Adoção">
      <div className="flex flex-col gap-6">

        {/* Título da minha parte */}
        <div>
          <h1 className="text-3xl font-bold text-[#222222]">
            Processo de Adoção
          </h1>

          <p className="mt-2 text-gray-500">
            Gerenciamento completo da adoção e acompanhamento do pet.
          </p>
        </div>

        {/* Processo de adoção  */}
        <Card>
          <div className="flex items-center justify-between">

            <div>
              <h2 className="text-2xl font-bold">

        {/* Nome do PET exemplo  */}

                Thor
              </h2>

              <p className="text-gray-500">

        {/* Raça do PET + IDADE */}

                Labrador idade 2 anos
              </p>
            </div>

            <StatusBadge status="Em processo" />
          </div>

          {/* ETAPAS DA ADOÇÃO */}
          <div className="mt-6">

            <h3 className="mb-4 text-lg font-semibold">
              Etapas da adoção
            </h3>

            <div className="flex flex-wrap gap-3">

              <StatusBadge status="Disponível" />

              <StatusBadge status="Em processo" />

              <StatusBadge status="Adotado" />

            </div>
          </div>
        </Card>

        {/* DADOS DO ADOTANTE */}
        <Card>

          <h3 className="mb-6 text-xl font-bold">
            Dados do adotante
          </h3>

          <div className="grid grid-cols-2 gap-4">

            <Input
              label="Nome completo"
              placeholder="Digite o nome completo"
            />

            <Input
              label="Telefone para contato"
              placeholder="(00) 00000-0000"
            />

            <Input
              label="CPF"
              placeholder="000.000.000-00"
            />

            <Input
              label="Cidade"
              placeholder="Digite a cidade"
            />

            <Input
              label="CEP"
              placeholder="00000-000"
            />

          </div>
        </Card>

        {/* Histórico médico do PET */}
        <Card>

          <div className="flex items-center justify-between">

            <h3 className="text-xl font-bold">
              Histórico médico
            </h3>

            <Button variant="outline">
              Adicionar registro
            </Button>
          </div>

          <div className="mt-6">

            <Table
              headers={[
                "Data",
                "Tipo",
                "Descrição",
              ]}
            >

              <tr className="border-t">
                <td className="px-4 py-4 text-center">
                  10/05/2026
                </td>

                <td className="px-4 py-4 text-center">
                  Vacina
                </td>

                <td className="px-4 py-4 text-center">
                  Vacina X aplicada
                </td>
              </tr>

              <tr className="border-t">
                <td className="px-4 py-4 text-center">
                  15/05/2026
                </td>

                <td className="px-4 py-4 text-center">
                  Consulta
                </td>

                <td className="px-4 py-4 text-center">
                  Consulta veterinária X
                </td>
              </tr>

              <tr className="border-t">
                <td className="px-4 py-4 text-center">
                  20/05/2026
                </td>

                <td className="px-4 py-4 text-center">
                  Tratamento
                </td>

                <td className="px-4 py-4 text-center">
                  Tratamento X
                </td>
              </tr>

            </Table>

          </div>
        </Card>

        {/* TIMELINE */}
        <Card>

          <h3 className="mb-6 text-xl font-bold">
            Timeline do pet
          </h3>

          <div className="flex flex-col gap-4">

            <div className="rounded-xl border border-gray-200 p-4">
                Data do Resgate do pet
            </div>

            <div className="rounded-xl border border-gray-200 p-4">
                 Vacinação realizada
            </div>

            <div className="rounded-xl border border-gray-200 p-4">
                Entrevista com adotante
            </div>

            <div className="rounded-xl border border-gray-200 p-4">
                Processo de adoção iniciado
            </div>

          </div>

          <div className="mt-6 flex gap-4">

            <Button>
              Aprovar adoção
            </Button>

            <Button variant="outline">
              Agendar visita
            </Button>

          </div>

        </Card>

      </div>
    </AdminLayout>
  );
}
