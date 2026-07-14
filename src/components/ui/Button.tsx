import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200",
        variant === "primary"
          ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
          : "bg-white border border-gray-300 text-gray-800 hover:bg-gray-100",
        className
      )}
    >
      {children}
    </button>
  );
}