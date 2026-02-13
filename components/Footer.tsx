export default function Footer() {
    return (
        <footer className="border-t border-white/10 py-12 bg-black text-center relative z-10 glass">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-4">
                <p className="text-white/40 font-serif tracking-widest text-sm">
                    DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING
                </p>
                <div className="h-px w-24 bg-primary/30"></div>
                <p className="text-muted-foreground text-xs font-mono">
                    © {new Date().getFullYear()} Nexus Club. PES University.
                </p>
            </div>
        </footer>
    );
}
