"use client";

import Link from "next/link";
import { FaLaptopCode } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
import { useState } from "react";

export default function Nav() {
    const [navOpen, setNavOpen] = useState(false);

    const navStuff: { label: string; href: string }[] = [
        { label: "Home", href: "/" },
        { label: "About us", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Sign in", href: "/signin" },
    ];

    return (
        <nav className="flex items-center justify-between px-10 py-3 shadow-sm sticky top-0 bg-white z-50">
            <Link href="/" className="flex items-center gap-2">
                <FaLaptopCode className="text-3xl text-blue-600" />
                <p className="text-lg font-semibold max-md:hidden">TechHelp</p>
            </Link>

            <div className="flex items-center text-lg gap-5 max-md:hidden">
                {navStuff.map((item) => (
                    <Link key={item.href} href={item.href}>
                        {item.label}
                    </Link>
                ))}
            </div>

            <button
                className="text-2xl md:hidden relative z-10"
                onClick={() => setNavOpen(!navOpen)}
            >
                {navOpen ? <IoCloseOutline /> : <RiMenu3Line />}
            </button>

            {navOpen && (
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
            )}
        </nav>
    );
}