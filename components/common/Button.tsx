import Link from "next/link";

export default function Button({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="
      inline-flex
      items-center
      gap-3
      border
      border-[#C8A96A]
      px-8
      py-4
      text-white
      uppercase
      tracking-[4px]
      text-sm
      transition-all
      duration-500
      hover:bg-[#C8A96A]
      hover:text-black
      hover:scale-105
      "
    >
      {children}
    </Link>
  );
}