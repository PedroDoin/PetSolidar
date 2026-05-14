import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export default function Input({ label, className = "", ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-2 block text-sm font-semibold text-[#333333]">
          {label}
        </label>
      )}

      <input
        className={`
          h-12
          w-full
          rounded-md
          border
          border-[#b5b5b5]
          bg-white
          px-4
          text-sm
          text-[#111111]
          outline-none
          placeholder:text-[#aaaaaa]
          focus:border-[#555555]
          ${className}
        `}
        {...props}
      />
    </div>
  );
}