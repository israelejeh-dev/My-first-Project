import { useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "service", label: "Services" },
  { id: "contact", label: "Contact" },
  { id: "about", label: "About Us" },
];

export default function Navbar({ page, go }) {
  const [open, setOpen] = useState(false);

  const pick = (id) => {
    go(id);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-20 bg-[#0B0F14]/90 backdrop-blur border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <span className="font-bold text-lg md:text-xl tracking-tight">
          <span className="text-[#C8F169]"></span>
        </span>

        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => pick(l.id)}
                className={`text-sm font-medium transition-colors ${
                  page === l.id ? "text-[#C8F169]" : "text-white/70 hover:text-white"
                }`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={() => pick("contact")}
            className="hidden sm:block text-sm font-semibold bg-[#C8F169] text-[#0B0F14] rounded-full px-4 py-2"
          >
            Hire me
          </button>
          <button
            className="md:hidden text-2xl leading-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? "×" : "☰"}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="md:hidden border-t border-white/10 px-5 py-3 space-y-1">
          {links.map((l) => (
            <li key={l.id}>
              <button onClick={() => pick(l.id)} className="w-full text-left py-2 font-medium">
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
