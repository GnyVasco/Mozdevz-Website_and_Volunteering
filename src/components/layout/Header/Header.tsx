"use client";
import { mozdevz } from "@/constants/images";
import { HEADER_LINKS } from "@/constants/links";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header className="relative z-50">
            {/* Versão desktop e mobile */}
            <div className="container mx-auto flex items-center justify-between pt-4 sm:pt-6 md:pt-8 pb-4 sm:pb-6 px-4 md:px-0">
                <Image
                    src={mozdevz.url}
                    alt={mozdevz.alt}
                    width={mozdevz!.metadata!.width}
                    height={mozdevz!.metadata!.height}
                    className="h-8 w-auto sm:h-10 md:h-auto"
                />

                {/* Menu desktop */}
                <nav className="hidden md:flex items-center">
                    {HEADER_LINKS.map(({ href, label, icon: Icon }) => (
                        <Link
                            key={href}
                            href={href}
                            className="p-2.5 gap-2.5 flex items-center font-roboto font-semibold text-lg uppercase text-gray-80 hover:text-secondary transition-colors"
                        >
                            {label}
                            {Icon && <Icon />}
                        </Link>
                    ))}
                </nav>

                <Link
                    href={"/login"}
                    className="hidden md:block btn btn-text text-gray-80 border-secondary hover:bg-secondary/10 transition-colors"
                >
                    ENTRAR
                </Link>

                {/* Botão do menu mobile */}
                <button
                    className="md:hidden p-2 text-gray-80"
                    onClick={toggleMobileMenu}
                    aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Menu mobile */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-background-dark border-t border-gray-border">
                    <nav className="container mx-auto px-4 py-4 flex flex-col">
                        {HEADER_LINKS.map(({ href, label, icon: Icon }) => (
                            <Link
                                key={href}
                                href={href}
                                className="py-3 gap-2.5 flex items-center font-roboto font-semibold text-lg uppercase text-gray-80 hover:text-secondary transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {label}
                                {Icon && <Icon />}
                            </Link>
                        ))}
                        <Link
                            href={"/login"}
                            className="py-3 font-roboto font-semibold text-lg uppercase text-secondary"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            ENTRAR
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
