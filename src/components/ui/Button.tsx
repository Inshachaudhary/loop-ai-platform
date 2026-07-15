import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  href = "#",
  variant = "primary",
}: ButtonProps) {
  if (variant === "secondary") {
    return (
      <Link
        href={href}
        className="
          inline-flex
          h-14
          items-center
          justify-center
          gap-2
          rounded-2xl
          border
          border-slate-200
          bg-white
          px-7
          text-[16px]
          font-semibold
          text-slate-800
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:border-blue-500
          hover:shadow-lg
        "
      >
        <Play size={16} strokeWidth={2.2} />
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="
        inline-flex
        h-14
        items-center
        justify-center
        gap-2
        rounded-2xl
        bg-gradient-to-r
        from-blue-600
        to-blue-500
        px-8
        text-[16px]
        font-semibold
        text-white
        shadow-lg
        shadow-blue-500/20
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        hover:shadow-blue-500/30
      "
    >
      {children}
      <ArrowRight size={18} />
    </Link>
  );
}