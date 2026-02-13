import Hero from "@/components/Hero";
import Tracks from "@/components/Tracks";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/30">
      <div className="relative">
        <Header />
        {/* Global Noise Texture */}
        <div
          className="fixed inset-0 opacity-[0.03] z-[100] pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: 'url("/noise.png")' }}
        />

        <Hero />
        <Tracks />
        <Team />
        <Footer />
      </div>

      {/* SEO: Fallback content for crawlers/noscript */}
      <noscript>
        <div style={{ padding: "2rem", color: "#fff", background: "#050505" }}>
          <h1>NexJam — Research-Driven Hackathon</h1>
          <p>
            10 hours. 4 friends. Infinite fun. Build something that doesn&apos;t
            crash — or crash it spectacularly.
          </p>
          <h2>Hackathon Tracks</h2>
          <ul>
            <li>Forensic Analysis of Synthetic or Manipulated Media</li>
            <li>Passwordless Authentication &amp; Identity Systems</li>
            <li>Secure Knowledge Access Systems</li>
            <li>Machine Unlearning</li>
            <li>Network &amp; System Anomaly Detection</li>
            <li>Developer Pipeline Intelligence</li>
          </ul>
          <p>
            <a href="https://forms.gle/D21eZFngVmCzSnYb8">
              Apply Now — Register for NexJam
            </a>
          </p>
        </div>
      </noscript>
    </main>
  );
}
