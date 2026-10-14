const stats = [
  { n: "3+", l: "Projects built" },
  { n: "React", l: "Main focus" },
  { n: "100%", l: "Responsive" },
];

export default function AboutLanding({ go }) {
  return (
    <section className="max-w-6xl mx-auto px-5 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <p className="font-mono text-sm text-[#C8F169]">About</p>
        <h2 className="mt-2 text-3xl font-bold">A quick intro</h2>
        <p className="mt-4 text-white/65">
          I'm an Information Technology student who loves building for the web. I care about
          clean code, simple design and sites that load fast.
        </p>
        <button
          onClick={() => go("about")}
          className="mt-6 font-semibold text-[#C8F169] hover:underline underline-offset-4"
        >
          More about me →
        </button>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {stats.map((s) => (
          <div key={s.l} className="rounded-2xl bg-[#131A22] border border-white/10 p-5">
            <p className="text-2xl font-bold">{s.n}</p>
            <p className="mt-1 text-xs text-white/55">{s.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
