const facts = [
  { label: "Based in", value: "Nigeria" },
  { label: "Time zone", value: "WAT (UTC+1)" },
  { label: "Work style", value: "Remote or on-site" },
  { label: "Status", value: "Open to opportunities" },
];

export default function Location() {
  return (
    <section className="max-w-6xl mx-auto px-5 py-14">
      <p className="font-mono text-sm text-[#C8F169]">Where</p>
      <h2 className="mt-2 text-2xl md:text-3xl font-bold">Where to find me</h2>
      <div className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-4">
        {facts.map((f) => (
          <div key={f.label} className="rounded-2xl bg-[#131A22] border border-white/10 p-5">
            <p className="text-xs text-white/50">{f.label}</p>
            <p className="mt-1 font-semibold">{f.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
