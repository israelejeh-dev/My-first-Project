import profile from "../../assets/my pic.jpg";

export default function HeroAbout() {
  return (
    <section className="border-b border-white/10">
      <div className="max-w-6xl mx-auto px-5 py-16 md:py-24 grid md:grid-cols-3 gap-10 items-start">
        <img
          src={profile}
          alt="Israel"
          className="aspect-square w-full rounded-2xl object-cover md:col-span-1"
        />

        <div className="md:col-span-2">
          <p className="font-mono text-sm text-[#C8F169]">About</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
            Hi, I'm Israel Ejeh, a frontend developer and blockchain enthusiast.
          </h1>
          <p className="mt-5 text-white/70 max-w-xl">
            I'm an Information Technology student at the University of Ilorin and I'm training
            as a frontend developer at Malhub. I like building clean interfaces and learning
            something new with every project.
          </p>
          <p className="mt-4 text-white/70 max-w-xl">
            My goal is to grow from frontend work into blockchain development. For now, I focus
            on writing code that is simple to read and sites that feel good on every device.
          </p>
        </div>
      </div>
    </section>
  );
}
