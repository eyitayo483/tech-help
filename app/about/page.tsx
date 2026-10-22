import Link from "next/link";
import { FaSearch, FaCommentDots, FaThumbsUp, FaCheckCircle } from "react-icons/fa";

const steps = [
  { icon: <FaCommentDots />, title: "Post a question", text: "Describe your problem and pick a category." },
  { icon: <FaSearch />, title: "Get found", text: "Others search, filter and spot questions they can answer." },
  { icon: <FaThumbsUp />, title: "Upvote answers", text: "The most helpful answers rise to the top." },
  { icon: <FaCheckCircle />, title: "Accept a solution", text: "Mark the answer that solved it for the next person." },
];

const values = [
  { title: "Helpful", text: "Every answer should leave someone better off." },
  { title: "Respectful", text: "Beginners and experts learn side by side." },
  { title: "Open", text: "Good solutions stay visible so nobody solves it twice." },
];

export default function About() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute -top-20 right-0 h-80 w-80 rounded-full bg-indigo-700/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-teal-700/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-5 py-20 text-center md:py-28">
          <h1 className="text-4xl font-bold md:text-5xl">
            About{" "}
            <span className="bg-gradient-to-r from-teal-300 to-indigo-300 bg-clip-text text-transparent">
              TechHelp
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
            A place where nobody has to struggle with a tech problem alone.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="mx-auto max-w-4xl px-5 py-16 text-center">
        <h2 className="text-3xl font-bold text-slate-900">Our mission</h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Everyone gets stuck sometimes. TechHelp brings people together so
          questions get answered quickly, and good solutions are easy to find
          for the next person with the same problem.
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-center text-3xl font-bold text-slate-900">How it works</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-xl text-teal-700">
                    {s.icon}
                  </div>
                  <span className="text-3xl font-bold text-slate-200">0{i + 1}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="mx-auto max-w-5xl px-5 py-16">
        <h2 className="text-center text-3xl font-bold text-slate-900">What we believe</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border-l-4 border-teal-700 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold text-slate-900">{v.title}</h3>
              <p className="mt-2 text-slate-600">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">Ready to get help?</h2>
        <p className="mt-3 text-slate-300">Join TechHelp and ask your first question.</p>
        <Link
          href="/signin"
          className="mt-7 inline-block rounded-xl bg-teal-700 px-8 py-3 font-semibold text-white transition hover:bg-teal-600"
        >
          Get started
        </Link>
      </section>
    </main>
  );
}