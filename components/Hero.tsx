import Link from "next/link";
import ASCIIBackground from "./ASCIIBackground";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center p-6 sm:p-12 overflow-hidden border-b border-white/10 bg-[#050505] selection:bg-violet-500/30 selection:text-white">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 contrast-150 pointer-events-none z-10"></div>
            <ASCIIBackground />
            <div className="absolute inset-0 bg-scanlines z-10 pointer-events-none opacity-20"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/90 z-0"></div>

            {/* Top "Taped" Element */}
            <div className="absolute top-24 right-4 sm:right-10 hidden lg:block rotate-6 z-20">
                <div className="bg-violet-600 text-white font-mono font-bold px-4 py-2 text-sm shadow-[0_0_15px_rgba(139,92,246,0.5)] transform rotate-3 border-2 border-white/20">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-4 bg-white/40 rotate-12 backdrop-blur-sm -rotate-45"></div>
                    REGISTER UP THERE ↗
                </div>
            </div>

            <div className="relative z-20 text-center space-y-8 max-w-5xl mx-auto">

                {/* Top Badge - Scrappy Style
                <div className="flex flex-col items-center animate-fade-in-up transform -rotate-2" style={{ animationDelay: "0.1s" }}>
                    <div className="font-mono text-xs text-violet-300 bg-white/5 px-3 py-1 font-bold uppercase tracking-widest border border-violet-500/50 rotate-2 shadow-[4px_4px_0px_0px_rgba(139,92,246,0.3)] backdrop-blur-sm">
                        EST. 2024 // V2.0 // BETA
                    </div>
                </div> */}

                {/* Main Title - Rotated & "Stamped" */}
                <div className="relative inline-block my-4 animate-fade-in-up transform rotate-1" style={{ animationDelay: "0.2s" }}>
                    <h1 className="font-serif text-7xl sm:text-9xl md:text-[11rem] lg:text-[13rem] tracking-tighter text-white mix-blend-exclusion relative z-10">
                        NEXJAM
                    </h1>
                    {/* Glitch Shadow */}
                    <h1 className="absolute top-1 left-1 font-serif text-7xl sm:text-9xl md:text-[11rem] lg:text-[13rem] tracking-tighter text-violet-600/50 mix-blend-screen z-0 blur-[1px] select-none">
                        NEXJAM
                    </h1>
                </div>

                {/* Mission Statement - Punchier */}
                <div className="space-y-6 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight leading-none rotate-[-1deg]">
                        10 Hours. 4 Friends. <span className="bg-violet-600/20 border border-violet-500/50 text-violet-200 px-2 italic font-serif inline-block transform rotate-1">Infinite Fun.</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-zinc-400 font-mono max-w-2xl mx-auto leading-relaxed border-l-2 border-violet-500/50 pl-4 text-left ml-auto mr-auto md:ml-20">
                        Build something that doesn't crash. <br />
                        <span className="text-white">Or crash it spectacularly.</span> Just ship it.
                    </p>
                </div>

                {/* CTA Section */}
                <div className="pt-10 flex flex-col items-center gap-6 animate-fade-in-up relative" style={{ animationDelay: "0.4s" }}>

                    {/* "Hand-drawn" Arrow */}
                    <div className="absolute -left-24 top-6 hidden sm:block text-violet-400/80 font-handwriting rotate-[-5deg] text-lg font-bold">
                        Push this button ↘
                    </div>

                    {/* Button - Scrappy */}
                    <Link
                        href="https://forms.gle/D21eZFngVmCzSnYb8"
                        target="_blank"
                        className="group relative inline-flex h-16 min-w-[240px] items-center justify-center overflow-hidden bg-white text-black transition-all duration-300 hover:scale-105 hover:rotate-1 hover:shadow-[8px_8px_0px_0px_#8b5cf6] border-2 border-black"
                    >
                        <span className="relative z-10 mr-2 uppercase tracking-widest font-bold text-lg">Apply Now</span>
                        <span className="relative z-10 group-hover:translate-x-1 transition-transform font-bold text-xl">→</span>

                        {/* Scrappy Tape on Button */}
                        <div className="absolute -top-3 -right-8 w-16 h-6 bg-fuchsia-400/80 rotate-45 mix-blend-multiply"></div>
                    </Link>

                    {/* Event Context - Tags */}
                    <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 text-xs font-mono text-white/60 uppercase tracking-widest mt-4">
                        <span className="px-2 py-1 border border-white/20 bg-black rotate-1 hover:text-violet-400 transition-colors">#NoSleep</span>
                        <span className="px-2 py-1 border border-white/20 bg-black -rotate-2 hover:text-violet-400 transition-colors">#FreePizza</span>
                        <span className="px-2 py-1 border border-white/20 bg-black rotate-2 hover:text-violet-400 transition-colors">#GitPushForce</span>
                    </div>

                </div>
            </div>
        </section>
    );
}
