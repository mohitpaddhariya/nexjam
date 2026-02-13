"use client";

import Link from "next/link";
import ASCIIBackground from "./ASCIIBackground";
import { motion } from "motion/react";
import posthog from "posthog-js";

export default function Hero() {

    return (
        <section aria-label="Hero — NexJam Research-Driven Hackathon" className="relative h-screen flex flex-col justify-center px-6 sm:px-12 overflow-hidden border-b border-white/10 bg-[#050505] selection:bg-violet-500/30 selection:text-white">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 contrast-150 pointer-events-none z-10"></div>
            <ASCIIBackground />
            <div className="absolute inset-0 bg-scanlines z-10 pointer-events-none opacity-20"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/90 z-0"></div>

            {/* Floating Code Snippets (Decor) */}
            <motion.div
                animate={{ y: [0, -10, 0], rotate: [12, 10, 12] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-32 right-10 hidden lg:block font-mono text-xs text-green-500/40 rotate-12 blur-[0.5px]"
            >
                &lt;sudo mode="chaos" /&gt;
            </motion.div>
            <motion.div
                animate={{ y: [0, 10, 0], rotate: [-6, -4, -6] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 left-10 hidden lg:block font-mono text-xs text-violet-500/40 -rotate-6 blur-[0.5px]"
            >
                npm install insomnia
            </motion.div>

            <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col justify-between h-[calc(100vh-6rem)] pt-20">

                {/* CENTER STACK: Title > Tagline > Desc */}
                <div className="flex flex-col items-center text-center justify-center flex-grow">

                    {/* 1. BRAND - THE STAR */}
                    <div className="relative">
                        <motion.h1
                            initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
                            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                            transition={{ duration: 0.8, ease: "circOut" }}
                            className="font-serif text-[clamp(4rem,13vw,12rem)] leading-[0.85] tracking-tighter text-white transform -rotate-1 hover:rotate-0 transition-transform duration-500 cursor-default"
                        >
                            NEXJAM
                        </motion.h1>
                        {/* Glitch Shadow */}
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0, 1, 0], x: [0, 5, -5, 0] }}
                            transition={{ duration: 0.5, delay: 0.5, times: [0, 0.2, 0.4, 0.6, 1] }}
                            className="absolute top-0 left-1 font-serif text-[clamp(4rem,13vw,12rem)] leading-[0.85] tracking-tighter text-violet-600/20 z-[-1] blur-[2px] pointer-events-none transform -rotate-1"
                            aria-hidden="true"
                        >
                            NEXJAM
                        </motion.h1>
                    </div>

                    {/* 2. TAGLINE - THE HOOK */}
                    <div className="mt-6 sm:mt-8 space-y-1 overflow-hidden">
                        <motion.h2
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-3xl sm:text-5xl md:text-6xl font-bold text-zinc-300 tracking-tight leading-none"
                        >
                            10 HOURS. 4 FRIENDS.
                        </motion.h2>
                        <motion.h2
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-3xl sm:text-5xl md:text-6xl font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-white relative inline-block"
                        >
                            INFINITE FUN.
                            <motion.svg
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 0.6 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                className="absolute w-full h-3 -bottom-1 left-0 text-violet-600"
                                viewBox="0 0 200 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M2.00026 6.99997C28.5636 3.49122 84.7702 -1.45899 198 3.49997" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                            </motion.svg>
                        </motion.h2>
                    </div>

                    {/* 3. DESC */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="mt-4 sm:mt-6 text-base sm:text-lg text-zinc-400 font-mono max-w-xl mx-auto leading-relaxed"
                    >
                        Build something that doesn't crash. <br />
                        Or crash it <span className="text-white border-b border-fuchsia-500/50">spectacularly</span>.
                    </motion.p>

                </div>

                {/* BOTTOM ROW: Split Layout */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="grid lg:grid-cols-2 gap-8 items-end pb-6"
                >

                    {/* Bottom Left: Code & Hashtags */}
                    <div className="flex flex-col gap-3 items-start">
                        <div className="font-mono text-sm text-violet-400/80 bg-black/50 px-4 py-2 border border-violet-500/30 rounded backdrop-blur-sm">
                            while(alive) &#123; code(); &#125;
                        </div>

                        <div className="flex flex-wrap gap-3 text-xs font-mono text-zinc-500 uppercase tracking-widest">
                            <span className="hover:text-fuchsia-400 transition-colors cursor-default">#NoSleep</span>
                            <span className="text-zinc-700">//</span>
                            <span className="hover:text-fuchsia-400 transition-colors cursor-default">#FreeSwags</span>
                            <span className="text-zinc-700">//</span>
                            <span className="hover:text-fuchsia-400 transition-colors cursor-default">#GitPushForce</span>
                        </div>
                    </div>

                    {/* Bottom Right: Action & Urgency */}
                    <div className="flex flex-col items-center lg:items-end gap-4 relative">

                        {/* Sticker Pointing at Button */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0, rotate: 0 }}
                            animate={{ opacity: 1, scale: 1, rotate: 15 }}
                            transition={{ type: "spring", stiffness: 200, delay: 1.2 }}
                            className="absolute top-10 -left-10 lg:left-auto lg:right-[300px] z-20 pointer-events-none hidden md:block"
                        >
                            <div className="bg-yellow-400 text-black font-mono font-bold px-3 py-1.5 text-xs shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black">
                                CLICK IT →
                            </div>
                        </motion.div>

                        {/* Urgency Bar */}
                        <div className="w-full max-w-xs transform rotate-1">
                            <div className="flex justify-between text-[10px] font-mono uppercase text-zinc-400 mb-1">
                                <span className="text-fuchsia-400 font-bold">Spots Filling Fast</span>
                                <span className="text-white">82% Full</span>
                            </div>
                            <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden border border-white/5">
                                <motion.div
                                    initial={{ width: "0%" }}
                                    animate={{ width: "82%" }}
                                    transition={{ duration: 1.5, delay: 1, ease: "circOut" }}
                                    className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
                                ></motion.div>
                            </div>
                            <div className="mt-1 text-[10px] font-mono text-right text-zinc-500">
                                <span className="text-white font-bold">17 SPOTS LEFT</span> // DON'T WAIT
                            </div>
                        </div>

                        {/* CTA Button - TAPE STYLE */}
                        <Link
                            href="https://forms.gle/D21eZFngVmCzSnYb8"
                            target="_blank"
                            className="relative group inline-block focus:outline-none min-w-[280px]"
                            onClick={() => {
                                posthog.capture("apply_cta_clicked", {
                                    location: "hero",
                                    button_text: "APPLY NOW",
                                    spots_remaining: 17,
                                });
                            }}
                        >
                            <motion.span
                                whileHover={{ scale: 1.02, rotate: 1 }}
                                whileTap={{ scale: 0.98, rotate: -1 }}
                                className="relative z-10 block w-full px-8 py-5 overflow-hidden leading-tight font-black text-2xl italic uppercase text-center text-white bg-violet-600 border-2 border-white/20 transform -rotate-1 shadow-[6px_6px_0px_rgba(0,0,0,1)]"
                            >
                                APPLY NOW →
                            </motion.span>
                        </Link>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
