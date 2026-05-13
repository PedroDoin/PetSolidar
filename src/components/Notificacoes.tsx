type TipoNotificacao = "sucesso" | "erro" | "aviso" | "info";

export type Notificacao = {
  id: number;
  titulo: string;
  mensagem: string;
  tipo?: TipoNotificacao;
};

type NotificacoesProps = {
  notificacoes: Notificacao[];
  onFechar: (id: number) => void;
  cobrirSidebar?: boolean;
};

export default function Notificacoes({
  notificacoes,
  onFechar,
  cobrirSidebar = true,
}: NotificacoesProps) {
  if (notificacoes.length === 0) {
    return null;
  }

  const estilos = {
    sucesso: "border-green-700 bg-green-100 text-green-900",
    erro: "border-red-700 bg-red-100 text-red-900",
    aviso: "border-yellow-700 bg-yellow-100 text-yellow-900",
    info: "border-blue-700 bg-blue-100 text-blue-900",
  };

  const icones = {
    sucesso: "✓",
    erro: "!",
    aviso: "⚠",
    info: "i",
  };

  return (
    <div
      className={`
        fixed
        bottom-6
        z-50
        flex
        w-[360px]
        flex-col
        gap-3
        ${cobrirSidebar ? "left-6" : "left-[270px]"}
      `}
    >
      {notificacoes.map((notificacao) => {
        const tipo = notificacao.tipo || "info";

        return (
          <div
            key={notificacao.id}
            className={`
              flex
              gap-3
              rounded-xl
              border-2
              p-4
              shadow-lg
              ${estilos[tipo]}
            `}
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-current font-bold">
              {icones[tipo]}
            </div>

            <div className="flex-1">
              <h3 className="font-bold">{notificacao.titulo}</h3>
              <p className="mt-1 text-sm">{notificacao.mensagem}</p>
            </div>

            <button
              type="button"
              onClick={() => onFechar(notificacao.id)}
              className="h-6 w-6 shrink-0 rounded-full text-lg font-bold leading-none hover:bg-black/10"
            >
              ×
            </button>
          </div>
        );
      })}
    </div>
  );
}