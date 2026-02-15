"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import posthog from "posthog-js";

const navItems = [
    { name: "OVERVIEW", href: "#overview" },
    { name: "TRACKS", href: "#tracks" },
    { name: "PARTNERS", href: "#partners" },
    { name: "THE TEAM", href: "#team" }
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setMobileMenuOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "circOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled
                    ? "bg-black/95 backdrop-blur-xl border-white/10 py-3 sm:py-4"
                    : "bg-transparent border-transparent py-4 sm:py-8"
                    }`}
            >
                <div className="w-full px-4 sm:px-8 flex items-center justify-between">
                    {/* Left: Logo */}
                    <Link
                        href="/"
                        className="font-black text-xl sm:text-3xl tracking-tighter hover:scale-105 transition-all duration-300"
                    >
                        <span className="text-white hover:text-zinc-300 transition-colors duration-300 font-mono drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                            &lt;Nexus /&gt;
                        </span>
                    </Link>

                    {/* Middle: Desktop Nav Links */}
                    <nav className="hidden md:flex items-center gap-8 lg:gap-12 font-mono text-sm lg:text-base font-bold tracking-tight">
                        {navItems.map((item, i) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.2 + (i * 0.1) }}
                            >
                                <Link
                                    href={item.href}
                                    className="relative group text-zinc-400 hover:text-white transition-colors duration-200"
                                    onClick={() => {
                                        posthog.capture("navigation_link_clicked", {
                                            link_name: item.name,
                                            link_href: item.href,
                                            location: "header",
                                        });
                                    }}
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

                    <div className="flex items-center gap-3">
                        {/* Register Button */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
                        >
                            <Link
                                href="https://forms.gle/D21eZFngVmCzSnYb8"
                                target="_blank"
                                className="relative group inline-block focus:outline-none"
                                onClick={() => {
                                    posthog.capture("registration_cta_clicked", {
                                        location: "header",
                                        button_text: "REGISTER",
                                    });
                                }}
                            >
                                <span className="relative z-10 block px-4 py-2 sm:px-8 sm:py-3 overflow-hidden leading-tight font-black font-mono text-xs sm:text-base text-black bg-[#FFD700] border-2 border-white transform rotate-2 transition-transform duration-200 group-hover:-rotate-1 group-hover:scale-110 shadow-[4px_4px_0px_rgba(255,255,255,0.2)]">
                                    REGISTER
                                </span>
                                <span className="absolute bottom-0 right-0 w-full h-full -mb-1 -mr-1 bg-violet-600 border-2 border-transparent rotate-2 z-0 group-hover:rotate-[-1deg] transition-all duration-200"></span>
                            </Link>
                        </motion.div>

                        {/* Mobile Hamburger Button */}
                        <button
                            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-50"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <motion.span
                                animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                                className="w-6 h-0.5 bg-white block origin-center"
                            />
                            <motion.span
                                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                                className="w-6 h-0.5 bg-white block"
                            />
                            <motion.span
                                animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                                className="w-6 h-0.5 bg-white block origin-center"
                            />
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-black/98 backdrop-blur-xl md:hidden flex flex-col items-center justify-center"
                    >
                        <nav className="flex flex-col items-center gap-8">
                            {navItems.map((item, i) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3, delay: i * 0.08 }}
                                >
                                    <Link
                                        href={item.href}
                                        className="font-mono text-2xl font-bold text-zinc-300 hover:text-white transition-colors"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            posthog.capture("navigation_link_clicked", {
                                                link_name: item.name,
                                                link_href: item.href,
                                                location: "mobile_menu",
                                            });
                                        }}
                                    >
                                        <span className="text-violet-500 mr-2">&gt;</span>
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
