const tracks = [
    {
        id: "01",
        title: "Forensic Analysis of Synthetic Media",
        description: "Design a system that assesses the authenticity or integrity of digital media, particularly when content may have been partially generated, edited, or manipulated.",
        tech: ["Computer Vision", "Deepfakes", "Cryptography"],
        status: "High Priority",
    },
    {
        id: "02",
        title: "Passwordless Auth & Identity Systems",
        description: "Design a passwordless authentication system that verifies user identity without shared secrets, while remaining secure across real-world usage scenarios.",
        tech: ["FIDO2", "Biometrics", "Zero Knowledge"],
        status: "Security Critical",
    },
    {
        id: "03",
        title: "Secure Knowledge Access Systems",
        description: "Design a system that answers user queries over restricted or sensitive information while enforcing access boundaries under ambiguous queries.",
        tech: ["RAG", "RBAC", "Privacy Preserving AI"],
        status: "Active Research",
    },
    {
        id: "04",
        title: "Machine Unlearning",
        description: "Design a system that enables deployed models to selectively remove or reduce the influence of specific data or behaviors over time, without full retraining.",
        tech: ["Model Editing", "Differential Privacy", "AI Safety"],
        status: "Experimental",
    },
    {
        id: "05",
        title: "Network & System Anomaly Detection",
        description: "Design a system that distinguishes expected versus problematic behavior in network or system activity, even as normal patterns evolve.",
        tech: ["Network Security", "Unsupervised Learning", "TimeSeries"],
        status: "Infrastructure",
    },
    {
        id: "06",
        title: "Developer Pipeline Intelligence",
        description: "Design a system that improves visibility into software build, test, or deployment pipelines by surfacing failures, inefficiencies, or unexpected behavior.",
        tech: ["CI/CD", "DevOps", "Log Analysis"],
        status: "Optimization",
    },
];

export default function Tracks() {
    return (
        <section id="tracks" className="py-32 px-6 relative overflow-hidden bg-black selection:bg-violet-500/30">
            {/* Ambient Background Glow */}
            <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-violet-900/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="mb-20 space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="h-px w-10 bg-violet-500/50"></div>
                        <span className="font-mono text-violet-400 text-sm tracking-[0.2em] uppercase">
                            System Modules
                        </span>
                    </div>
                    <h2 className="font-serif text-5xl sm:text-7xl text-white tracking-tight">
                        Research Tracks
                    </h2>
                    <p className="text-muted-foreground/80 max-w-2xl text-lg font-light leading-relaxed border-l-2 border-white/10 pl-6">
                        Teams will be presented with new constraints and restrictions that reflect real-world pressures. <span className="text-white">Adaptability is key.</span>
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tracks.map((track) => (
                        <div
                            key={track.id}
                            className="group relative p-8 h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-violet-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(139,92,246,0.15)] flex flex-col"
                        >
                            {/* Giant Background Number */}
                            <span className="absolute -right-4 -top-8 font-serif text-[12rem] text-white/[0.02] group-hover:text-violet-500/[0.05] transition-colors duration-500 pointer-events-none select-none">
                                {track.id}
                            </span>

                            {/* Card Header: Status & ID */}
                            <div className="flex justify-between items-start mb-6 relative z-10">
                                <div className="flex items-center gap-2">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                                    </span>
                                    <span className="font-mono text-[10px] text-violet-300 uppercase tracking-wider">
                                        {track.status}
                                    </span>
                                </div>
                                <span className="font-mono text-xs text-white/20 group-hover:text-white/40 transition-colors">
                                    MSG_ID_{track.id}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="font-serif text-2xl text-white mb-4 leading-tight group-hover:text-violet-100 transition-colors relative z-10">
                                {track.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-grow relative z-10 opacity-80 group-hover:opacity-100 transition-opacity">
                                {track.description}
                            </p>

                            {/* Tech Tags */}
                            <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                                {track.tech.map((t) => (
                                    <span key={t} className="text-[10px] uppercase tracking-wider font-mono px-2 py-1 rounded-md bg-black/20 border border-white/10 text-white/50 group-hover:border-violet-500/30 group-hover:text-violet-200 transition-colors">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            {/* Bottom aesthetic line */}
                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
