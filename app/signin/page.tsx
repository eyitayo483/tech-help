"use client";
import { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowLeft,
} from "react-icons/fa";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // backend comes later
    console.log("Signing in with:", { email, password, remember });
  }

  function handleGoogle() {
    // Google sign-in comes later
    console.log("Google sign-in clicked");
  }

  return (
    <main className="relative flex min-h-[calc(100vh-64px)] items-center justify-center overflow-hidden bg-slate-950 px-4 py-12">
      {/* background image + dark layer */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-slate-950/85" />

      {/* soft glowing shapes */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-teal-700/20 blur-3xl" />
      <div className="absolute -bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-indigo-700/20 blur-3xl" />

      {/* card */}
      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-slate-900/70 p-8 text-white shadow-2xl backdrop-blur-md">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
        >
          <FaArrowLeft /> Back to Home
        </Link>

        <h1 className="mt-6 text-center text-3xl font-bold">
          Welcome{" "}
          <span className="bg-gradient-to-r from-teal-300 to-indigo-300 bg-clip-text text-transparent">
            back
          </span>
        </h1>
        <p className="mt-2 text-center text-sm text-slate-400">
          Sign in to ask questions, share answers and help others.
        </p>

        {/* Google */}
        <button
          type="button"
          onClick={handleGoogle}
          className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-white px-5 py-3 font-medium text-slate-900 transition hover:bg-slate-100"
        >
          <FcGoogle className="text-2xl" /> Continue with Google
        </button>

        {/* divider */}
        <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-wider text-slate-500">
          <div className="h-px flex-1 bg-white/10" />
          or sign in with email
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* email form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Email address
            </label>
            <div className="mt-2 flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950/60 px-4 focus-within:border-teal-500">
              <FaEnvelope className="text-slate-500" />
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-slate-600"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Password
              </label>
              <Link
                href="#"
                className="text-xs font-medium text-teal-300 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <div className="mt-2 flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950/60 px-4 focus-within:border-teal-500">
              <FaLock className="text-slate-500" />
              <input
                required
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-slate-600"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-slate-500 hover:text-white"
                aria-label="Show or hide password"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <label className="flex items-center gap-2 text-sm text-slate-400">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="h-4 w-4 accent-teal-600"
            />
            Keep me signed in on this device
          </label>

          <button
            type="submit"
            className="w-full rounded-xl bg-teal-700 px-6 py-3 font-semibold text-white transition hover:bg-teal-600"
          >
            Sign in
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-400">
          New to TechHelp?{" "}
          <Link href="#" className="font-medium text-teal-300 hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </main>
  );
}