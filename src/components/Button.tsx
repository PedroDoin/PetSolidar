import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "dark" | "light" | "outline" | "danger";
};

export default function Button({
  children,
  variant = "dark",
  className = "",
  ...props
}: ButtonProps) {
  const variants = {
    dark: "bg-[#555555] text-white hover:bg-[#333333]",
    light: "bg-[#d9d9d9] text-[#333333] hover:bg-[#c9c9c9]",
    outline: "bg-white text-[#333333] border border-[#b5b5b5] hover:bg-gray-100",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      className={`
        rounded-lg
        px-6
        py-3
        text-sm
        font-semibold
        transition
        disabled:cursor-not-allowed
        disabled:opacity-60
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}