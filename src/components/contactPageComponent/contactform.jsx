import { useState } from "react";

const input =
  "w-full rounded-xl bg-[#131A22] border border-white/10 px-4 py-3 placeholder-white/35 focus:outline-none focus:border-[#C8F169]";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    // Connect this to a form service (Formspree, EmailJS) when you're ready
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  if (sent) {
    return (
      <div className="rounded-2xl bg-[#131A22] border border-[#C8F169]/40 p-8">
        <p className="text-xl font-bold text-[#C8F169]">Message sent</p>
        <p className="mt-2 text-sm text-white/70">Thanks for reaching out. I'll get back to you soon.</p>
        <button onClick={() => setSent(false)} className="mt-4 underline font-medium">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <input className={input} name="name" placeholder="Your name" value={form.name} onChange={change} required />
      <input className={input} type="email" name="email" placeholder="Email address" value={form.email} onChange={change} required />
      <textarea className={input} rows="5" name="message" placeholder="Tell me about your project" value={form.message} onChange={change} required />
      <button className="bg-[#C8F169] text-[#0B0F14] font-semibold rounded-full px-6 py-3">
        Send message
      </button>
    </form>
  );
}
