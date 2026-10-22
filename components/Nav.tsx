"use client";
import Image from "next/image";
import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

type NavItem = { label: string; href: string };

const navStuff: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Sign In", href: "/signin" },
];

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-3 md:px-10 py-3 shadow-sm sticky top-0 bg-white z-50">
      <Link href="/" className="flex items-center gap-1 z-50">
        <Image
          src="/logo.png"
          alt="Naija Venture Hub Logo"
          width={500}
          height={500}
          className="w-10 h-10"
        />
        <p className="text-lg font-semibold max-md:hidden">Naija Venture Hub</p>
      </Link>

      <div className="flex items-center text-lg gap-5 max-md:hidden">
        {navStuff.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>

      <button
        onClick={() => setNavOpen(!navOpen)}
        className="text-2xl md:hidden z-50"
      >
        {navOpen ? <IoCloseOutline /> : <RiMenu3Line />}
      </button>

      {/* mobile navbar display */}
      {navOpen ? (
        <div className="bg-white h-dvh absolute w-full top-0 left-0 flex justify-center md:hidden">
          <div className="flex flex-col items-center text-lg gap-10 pt-20">
            {navStuff.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setNavOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
}