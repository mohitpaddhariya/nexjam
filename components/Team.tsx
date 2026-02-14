"use client";

import Image from "next/image";
import { motion } from "motion/react";
import posthog from "posthog-js";

const team = [
    {
        name: "AHANA SHARAN",
        role: "CLUB HEAD",
        image: "ahana.jpg",
        tape: "bg-rose-500/30",
        rotation: "-rotate-1"
    },
    {
        name: "DENNIS PHILIP",
        role: "CLUB HEAD",
        image: "dennis.jpg",
        tape: "bg-fuchsia-500/30",
        rotation: "-rotate-2"
    },
    {
        name: "MOHIT PADDHARIYA",
        role: "WEB DEV HEAD",
        // image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mohit", // Placeholder
        image: "mohit.jpg", // Placeholder
        tape: "bg-violet-500/30",
        rotation: "rotate-1"
    },
    {
        name: "YATHARTHA AARUSH",
        role: "WEB DEV HEAD",
        image: "yathartha.jpg",
        tape: "bg-indigo-500/30",
        rotation: "rotate-2"
    },
    {
        name: "ADVAITH KUMAR",
        role: "AI & ML HEAD",
        image: "advaith.jpg",
        tape: "bg-fuchsia-500/30",
        rotation: "rotate-2"
    },
    {
        name: "MERULL SHAH",
        role: "CYBERSECURITY HEAD",
        image: "merull.jpg",
        tape: "bg-indigo-500/30",
        rotation: "-rotate-2"
    },
    {
        name: "YUTI NAHA",
        role: "CYBERSECURITY HEAD",
        image: "yuti.jpg",
        tape: "bg-rose-500/30",
        rotation: "rotate-1"
    }
];

export default function Team() {
    return (
        <section id="team" className="py-32 px-6 relative overflow-hidden bg-[#0a0a0a] border-t border-white/10">
            {/* Background Scribbles */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <span className="font-mono text-violet-400 text-sm tracking-widest uppercase mb-4 block">
                        // THE_CREW
                    </span>
                    <h2 className="font-serif text-5xl sm:text-7xl text-white tracking-widest uppercase mix-blend-exclusion">
                        ACCOMPLICES
                    </h2>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {team.map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={`group relative flex flex-col items-center ${member.rotation} hover:rotate-0 transition-transform duration-300 hover:z-10`}
                            onMouseEnter={() => {
                                posthog.capture("team_member_viewed", {
                                    member_name: member.name,
                                    member_role: member.role,
                                });
                            }}
                        >
                            {/* "Tape" */}
                            <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 ${member.tape} backdrop-blur-md -rotate-3 shadow-sm z-20`}></div>

                            {/* Photo Frame */}
                            <div className="relative w-full aspect-square bg-zinc-900 border-4 border-white p-2 shadow-xl mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                                <div className="w-full h-full bg-zinc-800 relative grayscale group-hover:grayscale-0 transition-all duration-500 overflow-hidden">
                                    {/* Image would go here. Using a placeholder div pattern for now if img fails */}
                                    <Image src={member.image.startsWith("http") ? member.image : `/${member.image}`} alt={`${member.name} — ${member.role} at NexJam`} width={400} height={400} className="w-full h-full object-cover opacity-80 group-hover:opacity-100" />

                                    {/* Glitch Overlay */}
                                    <div className="absolute inset-0 bg-violet-500/10 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity"></div>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="text-center">
                                <h3 className="font-serif text-xl text-white font-bold tracking-wide bg-black inline-block px-2 transform -skew-x-6 border border-white/20">
                                    {member.name}
                                </h3>
                                <p className="font-mono text-xs text-violet-400 mt-2 tracking-widest uppercase">
                                    {member.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
