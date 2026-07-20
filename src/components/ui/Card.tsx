import { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className,
  hover = false,
}: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm transition-all duration-200",
        hover && "hover:-translate-y-1 hover:shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
}