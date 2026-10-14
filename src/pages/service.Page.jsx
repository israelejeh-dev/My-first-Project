import ServiceHero from "../components/servicePagecomponent/serviceHero";
import More from "../components/servicePagecomponent/more";
import Testimonials from "../components/testimonials";
const services = [
  { icon: "🖥️", title: "Website development", text: "Multi-page sites built with React and Tailwind CSS." },
  { icon: "📱", title: "Responsive design", text: "Layouts that look right on phones, tablets and desktops." },
  { icon: "⚡", title: "Landing pages", text: "Fast, focused pages that turn visitors into customers." },
];

// Replace these with your real projects
const projects = [
  { name: "Savanna Supply", tag: "E-commerce", text: "A 4-page online store with a product filter and cart counter.", stack: "React · Tailwind" },
  { name: "Israel's Portfolio", tag: "Portfolio", text: "My personal site with home, services, about and contact pages.", stack: "React · Tailwind" },
  { name: "Project three", tag: "Landing page", text: "Add a short line about what this project does.", stack: "HTML · Tailwind" },
];

export default function ServicePage({ go }) {
  return (
    <>
      <ServiceHero />

      <section className="max-w-6xl mx-auto px-5 py-14">
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl bg-[#131A22] border border-white/10 p-6">
              <p className="text-3xl">{s.icon}</p>
              <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-white/60">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 pb-6">
        <p className="font-mono text-sm text-[#C8F169]"> Projects</p>
        <h2 className="mt-2 text-2xl md:text-3xl font-bold">Selected work</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.name}
              className="group rounded-2xl border border-white/10 overflow-hidden hover:border-[#C8F169]/60 transition-colors"
            >
              <div className="h-40 bg-linear-to-br from-[#1B2733] to-[#131A22] flex items-end p-4">
                <span className="text-xs font-mono rounded-full bg-[#C8F169] text-[#0B0F14] px-3 py-1">
                  {p.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg">{p.name}</h3>
                <p className="mt-2 text-sm text-white/60">{p.text}</p>
                <p className="mt-4 text-xs font-mono text-white/40">{p.stack}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <button
            onClick={() => go("contact")}
            className="bg-[#C8F169] text-[#0B0F14] font-semibold rounded-full px-6 py-3"
          >
            Start a project
          </button>
        </div>
      </section>
      <Testimonials />
      <More />
    </>
  );
}
