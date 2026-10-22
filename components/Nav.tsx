"use client";
import Link from "next/link";
import { useState } from "react";
import { FaLaptopCode, FaBars, FaTimes } from "react-icons/fa";

type NavItem = { label: string; href: string };

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 md:px-10 py-3">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-slate-900"
        >
          <FaLaptopCode className="text-3xl text-teal-700" />
          TechHelp
        </Link>

        {/* desktop menu */}
        <div className="hidden md:flex items-center gap-8 text-lg text-slate-700">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-teal-700 transition"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/signin"
            className="rounded-xl bg-teal-700 px-5 py-2 font-medium text-white hover:bg-teal-600 transition"
          >
            Sign in
          </Link>
        </div>

        {/* mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl text-slate-900 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="flex flex-col gap-5 border-t border-slate-200 bg-white px-4 py-5 text-lg md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-slate-700"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/signin"
            onClick={() => setOpen(false)}
            className="rounded-xl bg-teal-700 px-5 py-3 text-center font-medium text-white"
          >
            Sign in
          </Link>
        </div>
      )}
    </nav>
  );
}