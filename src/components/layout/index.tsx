"use client";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { useEffect, useState } from "react";

export function LayoutProvider({ children }: { children: React.ReactNode }) {
    const [isMounted, setIsMounted] = useState(false);

    // Prevenir animações durante o carregamento inicial
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Adicionar classe para viewport em dispositivos móveis
    useEffect(() => {
        // Ajustar altura do viewport para dispositivos móveis
        const setViewportHeight = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty("--vh", `${vh}px`);
        };

        setViewportHeight();
        window.addEventListener("resize", setViewportHeight);
        return () => window.removeEventListener("resize", setViewportHeight);
    }, []);

    return (
        <div
            className={`flex min-h-screen flex-col transition-opacity duration-300 ${isMounted ? "opacity-100" : "opacity-0"}`}
        >
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    );
}
