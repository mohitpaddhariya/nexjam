"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

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
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "circOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled
                ? "bg-black/95 backdrop-blur-xl border-white/10 py-4"
                : "bg-transparent border-transparent py-8"
                }`}
        >
            <div className="w-full px-8 flex items-center justify-between">
                {/* Left: Glitchy Logo - Always Visible */}
                <Link
                    href="/"
                    className="font-black text-3xl tracking-tighter hover:scale-105 transition-all duration-300"
                >
                    <span className="text-white hover:text-zinc-300 transition-colors duration-300 font-mono drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                        &lt;Nexus /&gt;
                    </span>
                </Link>

                {/* Middle: High Contrast Nav Links */}
                <nav className="hidden md:flex items-center gap-12 font-mono text-base font-bold tracking-tight">
                    {[
                        { name: "OVERVIEW", href: "#overview" },
                        { name: "TRACKS", href: "#tracks" },
                        { name: "PARTNERS", href: "#partners" },
                        { name: "THE TEAM", href: "#team" }
                    ].map((item, i) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 + (i * 0.1) }}
                        >
                            <Link
                                href={item.href}
                                className="relative group text-zinc-400 hover:text-white transition-colors duration-200"
                            >
                                <span className="absolute -left-4 opacity-0 group-hover:opacity-100 group-hover:-left-5 transition-all duration-200 text-violet-500 font-black">
                                    &gt;
                                </span>
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-violet-500 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        </motion.div>
                    ))}
                </nav>

                {/* Right: Tape Style Register Button - POPPING */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
                >
                    <Link
                        href="https://forms.gle/D21eZFngVmCzSnYb8"
                        target="_blank"
                        className="relative group inline-block focus:outline-none"
                    >
                        <span className="relative z-10 block px-8 py-3 overflow-hidden leading-tight font-black font-mono text-base text-black bg-[#FFD700] border-2 border-white transform rotate-2 transition-transform duration-200 group-hover:-rotate-1 group-hover:scale-110 shadow-[4px_4px_0px_rgba(255,255,255,0.2)]">
                            REGISTER
                        </span>
                        {/* Shadow Block */}
                        <span className="absolute bottom-0 right-0 w-full h-full -mb-1 -mr-1 bg-violet-600 border-2 border-transparent rotate-2 z-0 group-hover:rotate-[-1deg] transition-all duration-200"></span>
                    </Link>
                </motion.div>
            </div>
        </motion.header>
    );
}
