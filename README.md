# ⚡ NexJam — Research-Driven Hackathon

🌐 **Live:** [nexjam.vercel.app](https://nexjam.vercel.app)

> **10 Hours. 4 Friends. Infinite Fun.**
> Build something that doesn't crash — or crash it *spectacularly*.

NexJam is a 10-hour research-driven hackathon organized by **Nexus Club** (Department of Computer Science). This is the official event website.

---

## 🧪 Hackathon Tracks

| # | Track | Technologies |
|---|-------|-------------|
| 01 | Forensic Analysis of Synthetic or Manipulated Media | Computer Vision, Deepfakes, Cryptography |
| 02 | Passwordless Authentication & Identity Systems | FIDO2, Biometrics, Zero Knowledge |
| 03 | Secure Knowledge Access Systems | RAG, RBAC, Privacy Preserving AI |
| 04 | Machine Unlearning | Model Editing, Differential Privacy, AI Safety |
| 05 | Network & System Anomaly Detection | Network Security, Unsupervised Learning, TimeSeries |
| 06 | Developer Pipeline Intelligence | CI/CD, DevOps, Log Analysis |

---

## 🛠 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Motion](https://motion.dev/) (Framer Motion)
- **Fonts:** Inter, Cinzel, JetBrains Mono (via `next/font`)
- **SEO:** Open Graph, Twitter Cards, JSON-LD (Event schema), sitemap, robots.txt

---

## 🚀 Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
pnpm build
pnpm start
```

---

## 📁 Project Structure

```
app/
├── layout.tsx        # Root layout — metadata, fonts, JSON-LD
├── page.tsx          # Homepage (Server Component)
├── globals.css       # Design tokens, animations, utilities
├── robots.ts         # /robots.txt generation
├── sitemap.ts        # /sitemap.xml generation
├── favicon.ico       # Favicon (multi-size)
└── apple-icon.png    # Apple Touch Icon
components/
├── Header.tsx        # Sticky nav with register CTA
├── Hero.tsx          # Hero section with ASCII background
├── Tracks.tsx        # Hackathon challenge tracks grid
├── Team.tsx          # Organizer team polaroid gallery
├── Footer.tsx        # Footer with socials & credits
└── ASCIIBackground.tsx  # Animated ASCII art background
public/
├── og-image.png      # Open Graph preview image (1200×630)
└── *.jpg             # Team member photos
```

---

## 👥 The Team

| Name | Role |
|------|------|
| Aahana | Club Head |
| Dennis Philip | Club Head |
| Mohit Paddhariya | Web Dev Head |
| Yathartha Aarush | Web Dev Head |
| Advaith Kumar | AI & ML Head |
| Merull Shah | Cybersecurity Head |
| Yuti Naha | Cybersecurity Head |

---

## ✨ Credits

Designed & Developed by **[Mohit Paddhariya](https://github.com/mohitpaddhariya)**
Tech Head & Web Dev Head — Nexus Club

---

## 📝 License

© Nexus Club. All rights reserved.
