import Link from "next/link";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Opportunities", href: "#deal-types" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-[#F5F1EB]/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#F5F1EB]/10 flex items-center justify-center">
            <span className="text-[#C8A040] text-[10px] font-black">UF</span>
          </span>
          <span className="text-[#F5F1EB]/60 text-sm font-semibold">UF Property Group</span>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs text-[#F5F1EB]/35 hover:text-[#C8A040] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Compliance */}
        <p className="text-xs text-[#F5F1EB]/25 text-center md:text-right max-w-xs leading-relaxed">
          © 2026 UF Property Group. Property sourcing is not regulated by the FCA.
        </p>
      </div>
    </footer>
  );
}
