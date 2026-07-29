import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  href = "#",
  children,
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full border border-[var(--accent)] px-7 py-3 text-sm uppercase tracking-[0.18em] transition-all duration-300",
        "hover:-translate-y-0.5 hover:bg-[var(--accent)] hover:text-white",
        className
      )}
    >
      {children}
    </Link>
  );
}