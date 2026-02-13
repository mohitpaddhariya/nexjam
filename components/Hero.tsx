import Link from "next/link";
import ASCIIBackground from "./ASCIIBackground";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center p-6 sm:p-12 overflow-hidden border-b border-white/10 bg-black selection:bg-primary/20 selection:text-white">
            {/* Background Effects */}
            <ASCIIBackground />
            <div className="absolute inset-0 bg-scanlines z-10 pointer-events-none opacity-30"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/90 z-0"></div>

            <div className="relative z-20 text-center space-y-10 max-w-5xl mx-auto">

                {/* Top Badge */}
                <div className="flex flex-col items-center animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                    <div className="font-serif text-[10px] sm:text-xs text-violet-200/80 tracking-[0.2em] uppercase border border-violet-500/20 bg-violet-500/5 px-4 py-1.5 rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                        Department of Computer Science and Engineering
                    </div>
                </div>

                {/* Main Title */}
                <div className="relative inline-block my-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                    <h1 className="font-serif text-7xl sm:text-9xl md:text-[10rem] lg:text-[12rem] tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/60 drop-shadow-[0_0_40px_rgba(139,92,246,0.3)]">
                        NEXJAM
                    </h1>
                </div>

                {/* Mission Statement */}
                <div className="space-y-6 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight leading-tight">
                        Build systems that <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 font-serif italic">don't break</span>.
                    </h2>
                    <p className="text-lg sm:text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
                        A research-driven hackathon focused on <span className="text-white font-medium">correctness</span>, <span className="text-white font-medium">scalability</span>, and <span className="text-white font-medium">robustness</span>.
                    </p>
                </div>

                {/* CTA Section */}
                <div className="pt-8 flex flex-col items-center gap-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>

                    {/* GSAP-style Rounded Button */}
                    <Link
                        href="https://forms.gle/D21eZFngVmCzSnYb8"
                        target="_blank"
                        className="group relative inline-flex h-14 min-w-[220px] items-center justify-center overflow-hidden rounded-full bg-white text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(139,92,246,0.5)]"
                    >
                        <span className="relative z-10 mr-2 uppercase tracking-widest font-bold text-sm">Apply Now</span>
                        <span className="relative z-10 group-hover:translate-x-1 transition-transform font-bold">→</span>

                        {/* Hover Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>

                    {/* Event Context */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-[10px] sm:text-xs font-mono text-muted-foreground uppercase tracking-widest">
                        <span className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                            10 Hours
                        </span>
                        <span className="hidden sm:inline text-white/10">|</span>
                        <span className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5">
                            Teams of 4
                        </span>
                        <span className="hidden sm:inline text-white/10">|</span>
                        <span className="flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-300">
                            Limited Seats
                        </span>
                    </div>

                </div>
            </div>
        </section>
    );
}
