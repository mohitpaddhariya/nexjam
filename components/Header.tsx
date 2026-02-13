"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled
                ? "bg-black/60 backdrop-blur-xl border-white/5 py-4"
                : "bg-transparent border-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Left: Serif Logo (Matches Hero) */}
                <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-white hover:text-white/80 transition-colors">
                    NEXJAM
                </Link>

                {/* Middle: Nav Links */}
                <nav className="hidden md:flex items-center gap-8 font-mono text-sm text-muted-foreground">
                    {["OVERVIEW", "TRACKS", "PARTNERS", "The Team"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase().replace(" ", "-")}`}
                            className="hover:text-white transition-all duration-300 relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white/50 transition-all duration-300 group-hover:w-full shadow-[0_0_10px_white]"></span>
                        </Link>
                    ))}
                </nav>

                {/* Right: Register Button (Pill Shape, Hero Match) */}
                <Link
                    href="https://forms.gle/D21eZFngVmCzSnYb8"
                    target="_blank"
                    className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full bg-white px-6 font-medium text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                >
                    <span className="relative z-10 text-xs font-bold uppercase tracking-widest">Register</span>

                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
            </div>
        </header>
    );
}
