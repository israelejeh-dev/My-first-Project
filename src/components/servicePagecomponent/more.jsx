const tools = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Git & GitHub"];

export default function More() {
  return (
    <section className="max-w-6xl mx-auto px-5 py-14">
      <p className="font-mono text-sm text-[#C8F169]">Tools</p>
      <h2 className="mt-2 text-2xl md:text-3xl font-bold">Tools I work with</h2>
      <div className="mt-6 flex flex-wrap gap-3">
        {tools.map((t) => (
          <span key={t} className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80">
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}
