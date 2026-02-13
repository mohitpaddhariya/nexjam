import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://nexjam.vercel.app",
            lastModified: new Date("2026-02-14"),
            changeFrequency: "weekly",
            priority: 1.0,
        },
    ];
}
