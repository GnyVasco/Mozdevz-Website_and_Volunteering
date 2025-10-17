import "./(styles)/globals.css";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { geist_mono, onest, roboto } from "@/fonts";
import { LayoutProvider } from "@/components/layout";

export const metadata: Metadata = {
    title: "MozDevz - Hoorah! 🎉",
    description:
        "Its a new era of development, where developers can create amazing applications with ease.",
    viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 5,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt" className="scroll-smooth">
            <body
                className={cn(
                    geist_mono.variable,
                    onest.variable,
                    roboto.variable,
                    "antialiased min-h-screen bg-background-dark text-gray-light",
                )}
            >
                <LayoutProvider>{children}</LayoutProvider>
            </body>
        </html>
    );
}
