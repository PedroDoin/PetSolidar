type PaginationProps = {
  currentPage?: number;
  totalPages?: number;
};

export default function Pagination({
  currentPage = 1,
  totalPages = 3,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="mt-6 flex items-center justify-center gap-2">
      <button className="rounded-xl border border-gray-300 px-4 py-2 hover:bg-gray-100">
        &lt;
      </button>

      {pages.map((page) => {
        const isActive = page === currentPage;

        return (
          <button
            key={page}
            className={`
              rounded-xl
              border
              px-4
              py-2
              ${
                isActive
                  ? "border-gray-600 bg-gray-500 text-white"
                  : "border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
              }
            `}
          >
            {page}
          </button>
        );
      })}

      <button className="rounded-xl border border-gray-300 px-4 py-2 hover:bg-gray-100">
        &gt;
      </button>
    </div>
  );
}