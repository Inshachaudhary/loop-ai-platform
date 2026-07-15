import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({
  children,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1280px] px-8 xl:px-0",
        className
      )}
    >
      {children}
    </div>
  );
}