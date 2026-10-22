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
        {/* background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />
        {/* dark layer so the text is easy to read */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950/90" />

        {/* soft glowing shapes */}
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-teal-700/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-indigo-700/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-5 py-24 text-center md:py-36">
          <p className="inline-block rounded-full border border-teal-300/30 bg-teal-300/10 px-4 py-1 text-sm text-teal-200">
            Tech help, from people who've been there
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            Solve your tech problems{" "}
            <span className="bg-gradient-to-r from-teal-300 to-indigo-300 bg-clip-text text-transparent">
              together
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
            Ask questions, share solutions and get help from a community that
            loves fixing things.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/signin"
              className="flex items-center justify-center gap-2 rounded-xl bg-teal-700 px-7 py-3 font-semibold text-white transition hover:bg-teal-600"
            >
              Get started <FaArrowRight />
            </Link>
            <Link
              href="/about"
              className="rounded-xl border border-white/20 px-7 py-3 font-semibold transition hover:bg-white/10"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <h2 className="text-center text-3xl font-bold text-slate-900">
          How TechHelp works
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-slate-200 p-7 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-2xl text-teal-700">
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