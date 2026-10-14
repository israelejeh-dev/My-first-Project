// Replace these with your real details
const items = [
  { label: "Email", value: "email@gmail.com", href: "mailto:email@gmail.com" },
  { label: "GitHub", value: "https://github.com/israelejeh-dev", href: "https://github.com/israelejeh-dev" },
  { label: "LinkedIn", value: "https://linkedin.com/in/israel-ejeh-0b40171a1", href: "https://linkedin.com/in/israel-ejeh-0b40171a1" },
];

export default function ContactInfo() {
  return (
    <div className="space-y-4">
      {items.map((i) => (
        <a
          key={i.label}
          href={i.href}
          className="block rounded-2xl bg-[#131A22] border border-white/10 p-5 hover:border-[#C8F169]/60 transition-colors"
        >
          <p className="text-xs text-white/50">{i.label}</p>
          <p className="mt-1 font-medium">{i.value}</p>
        </a>
      ))}
    </div>
  );
}
