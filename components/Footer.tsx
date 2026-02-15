"use client";

import Link from "next/link";
import { motion } from "motion/react";
import posthog from "posthog-js";

export default function Footer() {
    return (
        <footer aria-label="Site footer" className="relative border-t border-white/10 bg-black pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 overflow-hidden">

            {/* Massive Background Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03] select-none" aria-hidden="true">
                <div className="text-[15vw] font-serif font-black text-white leading-none tracking-tighter">
                    NEXJAM
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col md:flex-row justify-between items-center md:items-end gap-8 sm:gap-12">

                {/* Left Side: Brand & Vibe */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-4 sm:space-y-6 text-center md:text-left"
                >
                    <div className="relative inline-block">
                        <span className="font-serif text-3xl sm:text-4xl text-white font-bold tracking-tight">NEXJAM</span>
                        <motion.div
                            animate={{ rotate: [12, 0, 12] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-3 -right-6 bg-violet-600 text-[10px] font-mono font-bold px-2 py-0.5 transform rotate-12 border border-white/20"
                        >
                            🔥
                        </motion.div>
                    </div>

                    <p className="text-zinc-500 max-w-sm font-mono text-sm leading-relaxed">
                        The 10-hour hackathon where sleep is optional and shipping is mandatory.
                        <br />
                        <span className="text-violet-400">Department of Computer Science.</span>
                    </p>

                    <div className="flex gap-4 justify-center md:justify-start">
                        {['Instagram', 'Twitter', 'GitHub'].map((social) => (
                            <Link
                                key={social}
                                href="#"
                                className="relative block group"
                                onClick={() => {
                                    posthog.capture("social_link_clicked", {
                                        platform: social.toLowerCase(),
                                        location: "footer",
                                    });
                                }}
                            >
                                <motion.span
                                    whileHover={{ scale: 1.1, color: "#fff" }}
                                    className="block text-zinc-400 uppercase text-xs tracking-widest border-b border-transparent group-hover:border-violet-500 transition-colors font-mono"
                                >
                                    {social}
                                </motion.span>
                            </Link>
                        ))}
                    </div>
                </motion.div>

                {/* Right Side: Legal & "Scrappy" Credits */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center md:items-end gap-4"
                >

                    {/* Rotated "Made With" Badge - NOW USER CREDITS */}
                    <motion.div
                        whileHover={{ rotate: 0, scale: 1.05 }}
                        className="bg-white text-black font-mono text-xs px-4 py-2 transform -rotate-2 border-2 border-dashed border-zinc-400 shadow-[4px_4px_0px_0px_rgba(139,92,246,0.5)] text-right cursor-default"
                    >
                        <div className="font-bold uppercase tracking-wider mb-1">Designed & Built By</div>
                        <div className="text-violet-700 font-black text-sm tracking-tight">MOHIT PADDHARIYA</div>
                        <div className="text-[9px] text-zinc-600 font-bold tracking-widest mt-0.5">TECH HEAD & WEB DEV HEAD</div>
                        <div className="text-[9px] text-zinc-500 uppercase tracking-widest">NEXUS CLUB</div>
                    </motion.div>

                    <p className="text-zinc-600 text-xs font-mono">
                        © {new Date().getFullYear()} Nexus Club. <span className="text-zinc-500">Don't sue us.</span>
                    </p>
                </motion.div>

            </div>

            {/* Bottom Tape Decoration */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-violet-900 via-fuchsia-600 to-indigo-900 opacity-50"></div>
        </footer>
    );
}
