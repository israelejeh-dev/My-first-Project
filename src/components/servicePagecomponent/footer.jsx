const pages = [
  ["home", "Home"],
  ["service", "Services"],
  ["contact", "Contact"],
  ["about", "About Us"],
];

export default function Footer({ go }) {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="max-w-6xl mx-auto px-5 py-10 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
        <p className="font-bold">
          Israel Ejeh <span className="text-[#C8F169]"></span>
          <span className="ml-3 text-sm font-normal text-white/50">Frontend developer</span>
        </p>
        <ul className="flex flex-wrap gap-6 text-sm text-white/70">
          {pages.map(([id, label]) => (
            <li key={id}>
              <button onClick={() => go(id)} className="hover:text-[#C8F169]">
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-center text-xs text-white/40 pb-6">
        © {new Date().getFullYear()} Israel. Built with React and Tailwind CSS.
      </p>
    </footer>
  );
}
