import type { ReactNode } from "react";

type TableProps = {
  headers: string[];
  children: ReactNode;
};

export default function Table({ headers, children }: TableProps) {
  return (
    <div className="overflow-hidden rounded-md border-2 border-[#b5b5b5] bg-white">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#eeeeee]">
            {headers.map((header) => (
              <th
                key={header}
                className="h-16 px-4 text-center text-base font-semibold text-[#222222]"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>{children}</tbody>
      </table>
    </div>
  );
}