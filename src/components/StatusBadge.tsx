type Status =
  | "Disponível"
  | "Em processo"
  | "Adotado"
  | "Lar Temporário"
  | "Em tratamento"
  | "Baixo"
  | "Crítico"
  | "Normal";

type StatusBadgeProps = {
  status: Status;
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const styles: Record<Status, string> = {
    "Disponível": "border-green-700 bg-green-100 text-green-800",
    "Em processo": "border-yellow-700 bg-yellow-100 text-yellow-800",
    "Adotado": "border-blue-700 bg-blue-100 text-blue-800",
    "Lar Temporário": "border-purple-700 bg-purple-100 text-purple-800",
    "Em tratamento": "border-orange-700 bg-orange-100 text-orange-800",
    "Baixo": "border-orange-700 bg-orange-100 text-orange-800",
    "Crítico": "border-red-700 bg-red-100 text-red-800",
    "Normal": "border-green-700 bg-green-100 text-green-800",
  };

  return (
    <span
      className={`
        inline-flex
        min-w-[115px]
        justify-center
        rounded-lg
        border-2
        px-3
        py-2
        text-sm
        font-semibold
        ${styles[status]}
      `}
    >
      {status}
    </span>
  );
}