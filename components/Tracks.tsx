"use client";

import Image from "next/image";
import { motion } from "motion/react";
import posthog from "posthog-js";

const tracks = [
    {
        id: "01",
        title: "Forensic Analysis of Synthetic or Manipulated Media",
        description: "Design a system that assesses the authenticity or integrity of digital media, particularly when content may have been partially generated, edited, or manipulated.",
        tech: ["Computer Vision", "Deepfakes", "Cryptography"],
        color: "bg-red-500/10 border-red-500/20",
        tape: "bg-violet-500/30",
    },
    {
        id: "02",
        title: "Passwordless Authentication & Identity Systems",
        description: "Design a passwordless authentication system that verifies user identity without shared secrets, while remaining secure across real-world usage scenarios.",
        tech: ["FIDO2", "Biometrics", "Zero Knowledge"],
        color: "bg-green-500/10 border-green-500/20",
        tape: "bg-fuchsia-500/30",
    },
    {
        id: "03",
        title: "Secure Knowledge Access Systems",
        description: "Design a system that answers user queries over restricted or sensitive information while enforcing access boundaries under ambiguous queries and changing permissions.",
        tech: ["RAG", "RBAC", "Privacy Preserving AI"],
        color: "bg-blue-500/10 border-blue-500/20",
        tape: "bg-indigo-500/30",
    },
    {
        id: "04",
        title: "Machine Unlearning",
        description: "Design a system that enables deployed models to selectively remove or reduce the influence of specific data or behaviors over time, without full retraining.",
        tech: ["Model Editing", "Differential Privacy", "AI Safety"],
        color: "bg-purple-500/10 border-purple-500/20",
        tape: "bg-purple-500/30",
    },
    {
        id: "05",
        title: "Network & System Anomaly Detection",
        description: "Design a system that distinguishes expected versus problematic behavior in network or system activity, even as normal patterns evolve.",
        tech: ["Network Security", "Unsupervised Learning", "TimeSeries"],
        color: "bg-orange-500/10 border-orange-500/20",
        tape: "bg-white/10",
    },
    {
        id: "06",
        title: "Developer Pipeline Intelligence",
        description: "Design a system that improves visibility into software build, test, or deployment pipelines by surfacing failures, inefficiencies, or unexpected behavior.",
        tech: ["CI/CD", "DevOps", "Log Analysis"],
        color: "bg-zinc-800/50 border-white/10",
        tape: "bg-rose-500/30",
    },
];

export default function Tracks() {
    return (
        <section id="tracks" className="py-32 px-6 relative overflow-hidden bg-[#050505] selection:bg-violet-500/30 selection:text-white">
            {/* Background Scribbles/Noise */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-50 contrast-150"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header - Scrappy Style */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-24 relative"
                >
                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl"></div>

                    <span className="font-mono text-violet-400 text-sm tracking-widest uppercase mb-4 block rotate-[-2deg] inline-block bg-white/5 px-2 border border-violet-500/30 backdrop-blur-sm">
                        // THE_CHALLENGES
                    </span>

                    <h2 className="font-serif text-6xl sm:text-8xl text-white tracking-widest uppercase mb-6 mix-blend-exclusion">
                        Pick Your <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-fuchsia-400">Poison</span>
                    </h2>

                    <p className="text-zinc-400 max-w-xl text-xl font-mono leading-relaxed ml-2 border-l border-violet-500/40 pl-6">
                        Real problems. No syllabus. <br />
                        <span className="text-white">Figure it out or break trying.</span>
                    </p>

                    {/* Sticker Decor */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0, rotate: 45 }}
                        whileInView={{ opacity: 0.8, scale: 1, rotate: 12 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="absolute right-0 top-0 hidden md:block"
                    >
                        <div className="bg-white/5 text-violet-200 font-bold p-4 text-center shadow-xl transform rotate-3 border border-violet-500/20 backdrop-blur-md">
                            <div className="text-[10px] uppercase tracking-widest border-b border-violet-500/20 pb-1 mb-1">Notice</div>
                            <div className="text-xl font-serif">RTFM FIRST</div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Grid - Scrappy Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 gap-y-16">
                    {tracks.map((track, i) => (
                        <motion.div
                            key={track.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={`group relative p-8 h-full bg-[#111] border border-white/10 transition-all duration-300 hover:z-20 hover:scale-105 hover:rotate-0 hover:shadow-[10px_10px_0px_0px_rgba(139,92,246,0.15)] ${i % 2 === 0 ? 'rotate-1' : '-rotate-1'} ${i % 3 === 0 ? 'rotate-2' : ''}`}
                            onMouseEnter={() => {
                                posthog.capture("track_viewed", {
                                    track_id: track.id,
                                    track_title: track.title,
                                    track_technologies: track.tech,
                                });
                            }}
                        >
                            {/* "Tape" Effect */}
                            <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-8 ${track.tape} backdrop-blur-sm -rotate-2 opacity-80 shadow-sm`}></div>

                            {/* Massive Index */}
                            <div className="absolute -right-4 -bottom-10 font-serif text-[8rem] text-white/[0.03] pointer-events-none select-none group-hover:text-violet-500/[0.05] transition-colors">
                                {track.id}
                            </div>

                            {/* Card Content */}
                            <div className="relative z-10 flex flex-col h-full">
                                <h3 className="font-serif text-2xl sm:text-3xl text-white mb-4 leading-tight group-hover:text-violet-400 transition-colors">
                                    {track.title}
                                </h3>

                                <p className="text-sm font-mono text-zinc-400 leading-relaxed mb-8 flex-grow">
                                    {track.description}
                                </p>

                                {/* Tags - Cultural/Messy */}
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {track.tech.map((t) => (
                                        <span key={t} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-white text-black transform hover:-rotate-2 transition-transform cursor-default group-hover:bg-violet-200">
                                            #{t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* "Polaroid" Slot for Real Photo/Vibe */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="group relative p-4 bg-white shadow-xl h-full flex flex-col min-h-[300px] hover:rotate-0 transition-transform duration-300 transform rotate-3"
                    >
                        <div className="bg-zinc-900 w-full h-48 flex items-center justify-center overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500">
                            {/* Placeholder for real photo - keeping it CSS only for now */}
                            <div className="text-zinc-700 font-mono text-xs text-center p-4">
                                <Image src="/nexgen.jpg" alt="NexJam 2025 hackathon participants collaborating" width={500} height={500} />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>
                        <div className="pt-4 px-2 font-handwriting text-black text-center font-bold font-serif italic text-lg">
                            "Last year's survivors"
                        </div>
                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-violet-500 rounded-full flex items-center justify-center text-white font-bold text-xs rotate-12 shadow-md">
                            2025
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
