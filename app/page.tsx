import Hero from "@/components/Hero";
import Tracks from "@/components/Tracks";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/30">
      <Header />
      {/* Global Noise Texture */}
      <div className="fixed inset-0 opacity-[0.03] z-[100] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: 'url("/noise.png")' }}>
        {/* Fallback to CSS noise if image missing, or just keep as subtle texture overlay placeholder */}
      </div>

      <Hero />
      <Tracks />
      <Team />
      <Footer />
    </main>
  );
}
