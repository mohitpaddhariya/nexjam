"use client";

import { useEffect, useRef } from "react";

export default function ASCIIGlobe() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = canvas.width = canvas.parentElement?.offsetWidth || 600;
        let height = canvas.height = canvas.parentElement?.offsetHeight || 600;

        const globeRadius = Math.min(width, height) * 0.4;

        // Globe points
        interface Point3D {
            x: number;
            y: number;
            z: number;
            char: string;
        }

        const points: Point3D[] = [];
        const sphereResolution = 40; // Increase for denser globe
        const chars = "01XY+-.";

        // Alternative: Lat/Long grid for that "Globe" look
        for (let lat = -90; lat <= 90; lat += 10) {
            const r = globeRadius * Math.cos(lat * Math.PI / 180);
            const y = globeRadius * Math.sin(lat * Math.PI / 180);
            for (let lon = 0; lon <= 360; lon += 10) {
                const x = r * Math.sin(lon * Math.PI / 180);
                const z = r * Math.cos(lon * Math.PI / 180);
                points.push({ x, y, z, char: chars[Math.floor(Math.random() * chars.length)] });
            }
        }

        let rotation = 0;
        const PROJECTION_CENTER_X = width / 2;
        const PROJECTION_CENTER_Y = height / 2;
        const FIELD_OF_VIEW = width * 0.8;

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            rotation += 0.005;

            // Sort by Z for proper occlusion (painters algorithm)
            // But for ASCII we might just let them overlap or handle distinct colors.

            ctx.fillStyle = "#8b5cf6"; // Violet base
            ctx.font = "12px monospace";
            ctx.textAlign = "center";

            points.forEach(point => {
                // Rotate around Y axis
                const x1 = point.x * Math.cos(rotation) - point.z * Math.sin(rotation);
                const z1 = point.z * Math.cos(rotation) + point.x * Math.sin(rotation);
                // Rotate around X axis (tilt)
                const y1 = point.y; // Keep it upright for now

                const scale = FIELD_OF_VIEW / (FIELD_OF_VIEW + z1 + globeRadius + 200);
                const x2d = (x1 * scale) + PROJECTION_CENTER_X;
                const y2d = (y1 * scale) + PROJECTION_CENTER_Y;

                // Opacity based on Z (depth fog)
                const alpha = (z1 + globeRadius) / (2 * globeRadius);

                // Back face culling-ish (dimmer)
                if (z1 < 0) {
                    ctx.fillStyle = `rgba(139, 92, 246, ${Math.max(0.1, alpha * 0.3)})`; // Dim back
                } else {
                    ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.2, alpha)})`; // Bright front
                }

                ctx.font = `${Math.max(8, 16 * scale)}px monospace`;
                ctx.fillText(point.char, x2d, y2d);
            });

            requestAnimationFrame(render);
        };

        const animId = requestAnimationFrame(render);

        const handleResize = () => {
            width = canvas.width = canvas.parentElement?.offsetWidth || 600;
            height = canvas.height = canvas.parentElement?.offsetHeight || 600;
        };
        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="w-full h-full min-h-[400px] flex items-center justify-center relative overflow-hidden">
            <canvas ref={canvasRef} className="absolute inset-0 z-10" />
            {/* Glow behind globe */}
            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full transform scale-50 z-0 animate-pulse-slow"></div>
        </div>
    );
}
