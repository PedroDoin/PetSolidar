import { useNavigate } from "react-router-dom";

const menuItems = [
  { label: "Dashboards", icon: "⌂", path: "/dashboard" },
  { label: "Animais", icon: "♘", path: "/animais" },
  { label: "Adoção", icon: "♡", path: "/adocao" },
  { label: "Voluntários", icon: "♙", path: "/voluntarios" },
  { label: "Doações", icon: "$", path: "/doacoes" },
  { label: "Relatórios", icon: "▤", path: "/relatorios" },
  { label: "Estoque", icon: "▧", path: "/estoque" },
  { label: "Configuração", icon: "⚙", path: "/configuracoes" },
];

type SidebarProps = {
  activeItem?: string;
};

export default function Sidebar({ activeItem = "Dashboards" }: SidebarProps) {
  const navigate = useNavigate();

  return (
    <aside className="min-h-screen w-[245px] border-r-2 border-black bg-white px-6 py-7">
      <div className="mb-10 flex items-center gap-3">
        <div className="text-5xl leading-none">🐾</div>

        <div>
          <h1 className="text-2xl font-bold leading-tight">PetSolidar</h1>
          <p className="text-sm">ONG</p>
        </div>
      </div>

      <nav className="flex flex-col gap-3">
        {menuItems.map((item) => {
          const isActive = item.label === activeItem;

          return (
            <button
              key={item.label}
              type="button"
              onClick={() => navigate(item.path)}
              className={`
                flex
                h-12
                items-center
                gap-4
                rounded-lg
                px-3
                text-left
                text-lg
                transition
                ${
                  isActive
                    ? "bg-[#d9d9d9] font-semibold text-black"
                    : "bg-white text-[#222222] hover:bg-gray-100"
                }
              `}
            >
              <span className="w-7 text-2xl">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}