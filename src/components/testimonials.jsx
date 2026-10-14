import { testimonials } from "../Data/data";

export default function Testimonials() {
  return (
    <section className="max-w-6xl mx-auto px-5 py-14">
      <p className="font-mono text-sm text-[#C8F169]">Testimonials</p>
      <h2 className="mt-2 text-2xl md:text-3xl font-bold">What people say</h2>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-white/80">"{t.text}"</p>
            <p className="mt-4 font-semibold">{t.name}</p>
            <p className="text-sm text-white/50">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}