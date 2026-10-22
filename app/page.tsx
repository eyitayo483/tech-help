import Link from "next/link";
import {
  FaArrowRight,
  FaQuestionCircle,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";

const features = [
  {
    icon: <FaQuestionCircle />,
    title: "Ask anything",
    text: "Stuck on a bug, a setup or a gadget? Post your question with the right category.",
  },
  {
    icon: <FaLightbulb />,
    title: "Get real answers",
    text: "Other users share solutions, and the best answer gets marked as accepted.",
  },
  {
    icon: <FaUsers />,
    title: "Grow together",
    text: "Upvote helpful answers and build a profile people trust.",
  },
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        {/* grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* glowing shapes */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-cyan-500/30 blur-3xl" />
        <div className="absolute -bottom-32 -right-24 w-[28rem] h-[28rem] rounded-full bg-violet-600/30 blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-5 py-24 md:py-36 text-center">
          <p className="inline-block rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
            Tech help, from people who've been there
          </p>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
            Solve your tech problems{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              together
            </span>
          </h1>
          <p className="mt-5 text-slate-300 text-lg max-w-2xl mx-auto">
            Ask questions, share solutions and get help from a community that
            loves fixing things.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signin"
              className="flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-7 py-3 font-semibold text-slate-950 hover:bg-cyan-400 transition"
            >
              Get started <FaArrowRight />
            </Link>
            <Link
              href="/about"
              className="rounded-xl border border-white/20 px-7 py-3 font-semibold hover:bg-white/10 transition"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-5 py-16 md:py-24">
        <h2 className="text-3xl font-bold text-center text-slate-900">
          How TechHelp works
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-slate-200 p-7 shadow-sm hover:shadow-md transition"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-2xl text-cyan-700">
                {f.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">
                {f.title}
              </h3>
              <p className="mt-2 text-slate-600">{f.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}