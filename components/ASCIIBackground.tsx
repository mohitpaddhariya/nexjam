"use client";

import { useEffect, useRef } from "react";

export default function ASCIIBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size
        const setSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setSize();
        window.addEventListener("resize", setSize);

        // Track mouse
        const handleMouseMove = (e: MouseEvent) => {
            mouse.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener("mousemove", handleMouseMove);

        // ASCII config
        const chars = "XYZ010101qwerty@#&!$?";
        const fontSize = 14;
        const columns = Math.ceil(window.innerWidth / fontSize);
        const drops: number[] = [];

        // Initialize drops
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -100; // Random start positions above screen
        }

        const draw = () => {
            // Semi-transparent black to create trail effect
            ctx.fillStyle = "rgba(10, 10, 12, 0.1)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                // Random character
                const text = chars[Math.floor(Math.random() * chars.length)];

                const x = i * fontSize;
                const y = drops[i] * fontSize;

                // Distance to mouse
                const dx = x - mouse.current.x;
                const dy = y - mouse.current.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Highlight if near mouse
                // Highlight if near mouse
                if (distance < 200) {
                    ctx.fillStyle = "#ffffff"; // Bright white highlight
                    ctx.shadowColor = "transparent"; // Ensure NO GLOW
                    ctx.shadowBlur = 0;
                } else {
                    ctx.fillStyle = "#333333"; // Dimmer grey
                    ctx.shadowColor = "transparent";
                    ctx.shadowBlur = 0;
                }

                // Draw character
                ctx.fillText(text, x, y);

                // Reset drop to top randomly or move down
                if (y > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 50);

        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", setSize);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 opacity-60 pointer-events-none mix-blend-screen"
        />
    );
}
