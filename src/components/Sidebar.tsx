const menuItems = [
  "Dashboards",
  "Animais",
  "Adoção",
  "Voluntários",
  "Doações",
  "Relatórios",
  "Estoque",
  "Configuração",
];

type SidebarProps = {
  activeItem?: string;
};

export default function Sidebar({ activeItem = "Dashboards" }: SidebarProps) {
  return (
    <aside className="min-h-screen w-64 border-r border-gray-300 bg-white px-6 py-8">
      <div className="mb-10">
        <h1 className="text-2xl font-bold">PetSolidar</h1>
        <p className="text-sm text-gray-600">ONG</p>
      </div>

      <nav className="flex flex-col gap-3">
        {menuItems.map((item) => {
          const isActive = item === activeItem;

          return (
            <button
              key={item}
              className={`
                rounded-xl
                px-4
                py-3
                text-left
                font-medium
                transition
                ${
                  isActive
                    ? "bg-gray-200 text-black"
                    : "text-gray-700 hover:bg-gray-100"
                }
              `}
            >
              {item}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}