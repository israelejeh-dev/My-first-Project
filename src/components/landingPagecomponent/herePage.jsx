export default function HerePage({ go }) {
  return (
    <section className="border-b border-white/10">
      <div className="max-w-6xl mx-auto px-5 py-20 md:py-32">
        <p className="font-mono text-sm text-[#C8F169]">Hi, I'm Israel Ejeh</p>
        <h1 className="mt-4 text-4xl md:text-7xl font-bold tracking-tight leading-[1.05] max-w-3xl">
          I build websites people enjoy using.
        </h1>
        <p className="mt-6 text-lg text-white/65 max-w-xl">
          Frontend developer working with React and Tailwind CSS. I turn ideas into simple,
          responsive websites.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <button
            onClick={() => go("service")}
            className="bg-[#C8F169] text-[#0B0F14] font-semibold rounded-full px-6 py-3"
          >
            See my work
          </button>
          <button
            onClick={() => go("contact")}
            className="border border-white/25 rounded-full px-6 py-3 font-medium hover:border-white/60"
          >
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
}
