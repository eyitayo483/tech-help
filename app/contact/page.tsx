"use client";
import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaClock, FaPaperPlane } from "react-icons/fa";

const info = [
  { icon: <FaEnvelope />, label: "Email", value: "support@techhelp.com" },
  { icon: <FaPhoneAlt />, label: "Phone", value: "+234 800 000 0000" },
  { icon: <FaClock />, label: "Support hours", value: "Mon - Fri, 9am - 5pm" },
];

const faqs = [
  { q: "Is TechHelp free?", a: "Yes, asking and answering questions is free." },
  { q: "How fast will I get an answer?", a: "Most questions get a reply within a day, depending on the topic." },
  { q: "Can I report a wrong answer?", a: "Yes, send us the link through this form and we'll look at it." },
];

const inputClass =
  "mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-teal-700/20 blur-3xl" />
        <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-indigo-700/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-5 py-20 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Get in touch</h1>
          <p className="mt-5 text-lg text-slate-300">
            Questions, ideas or feedback? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* INFO + FORM */}
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          {info.map((i) => (
            <div key={i.label} className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-xl text-teal-700">
                {i.icon}
              </div>
              <div>
                <p className="text-sm text-slate-500">{i.label}</p>
                <p className="font-semibold text-slate-900">{i.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-200 p-6 shadow-sm md:p-8 lg:col-span-3">
          {sent ? (
            <div className="py-10 text-center">
              <h2 className="text-2xl font-bold text-slate-900">Thank you!</h2>
              <p className="mt-2 text-slate-600">We got your message and will reply soon.</p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 rounded-xl border border-slate-300 px-5 py-2 text-slate-700 hover:bg-slate-50"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-slate-700">Name</label>
                  <input required type="text" className={inputClass} />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Email</label>
                  <input required type="email" className={inputClass} />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Topic</label>
                <select className={inputClass} defaultValue="general">
                  <option value="general">General question</option>
                  <option value="bug">Report a problem</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Something else</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Message</label>
                <textarea required rows={5} className={inputClass} />
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal-700 px-6 py-3 font-semibold text-white transition hover:bg-teal-600"
              >
                <FaPaperPlane /> Send message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-center text-3xl font-bold text-slate-900">Quick answers</h2>
          <div className="mt-8 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-xl border border-slate-200 bg-white p-5">
                <summary className="cursor-pointer font-semibold text-slate-900">{f.q}</summary>
                <p className="mt-2 text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}