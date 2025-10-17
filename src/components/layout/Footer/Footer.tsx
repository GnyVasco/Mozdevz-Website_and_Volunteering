import { SOCIALS } from "@/constants/links";
import { Form } from "./Form";
import Link from "next/link";
import Image from "next/image";
import { mozdevz } from "@/constants/images";

export const Footer = () => {
    return (
        <footer className="bg-background-dark py-20 space-y-20">
            <div className="text-gray-80 container mx-auto px-4 flex flex-col md:flex-row justify-between md:space-x-28 space-y-12 md:space-y-0">
                {/*Formulário */}

                <div className="space-y-4">
                    <h3 className="font-mono font-medium text-2xl md:text-2xl/3 text-secondary">
                        TRANSFORME IDEIAS EM IMPACTO!
                    </h3>
                    <p className="text-gray-light">
                        Estamos buscando parceiros que desejam colaborar conosco
                        para criar projetos inovadores e gerar mudanças
                        significativas.
                    </p>
                    <Form />
                </div>

                {/*Contacto */}
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h3 className="font-mono font-medium text-2xl text-secondary">
                            CONTACTO
                        </h3>
                        <p>
                            CoWork Lab 7, Avenida Marginal, nº 9149A Maputo,
                            1102
                        </p>
                        <p>+258 85 696 1877</p>
                        <p>contacto@mozdevz.org</p>
                    </div>

                    <div className="space-x-3.5 md:flex hidden">
                        {SOCIALS.map(({ href, icon: Icon }) => (
                            <Link key={href} href={href}>
                                {Icon && <Icon />}
                            </Link>
                        ))}
                    </div>
                </div>

                {/*Comunidade */}
                <div className="flex flex-col justify-between">
                    <div className="space-y-2 flex flex-col">
                        <h3 className="font-mono font-medium text-2xl text-secondary">
                            CONTACTO
                        </h3>
                        {[
                            { href: "/events", label: "Eventos" },
                            { href: "/blog", label: "Blog" },
                            { href: "/trainings", label: "Treinamentos" },
                            { href: "/login", label: "Entrar" },
                        ].map(({ href, label }) => (
                            <Link key={href} href={href}>
                                {label}
                            </Link>
                        ))}
                    </div>

                    <span>PORTUGUÊS (PT)</span>
                </div>

                {/*Contribuir */}
                <div className="flex flex-col justify-between">
                    <div className="space-y-2 flex flex-col">
                        <h3 className="font-mono font-medium text-2xl text-secondary">
                            CONTRIBUIR
                        </h3>
                        {[
                            { href: "/events", label: "Seja Orador" },
                            { href: "/blog", label: "Seja Voluntário" },
                            {
                                href: "/trainings",
                                label: "Oportunidades de Emprego",
                            },
                            { href: "/login", label: "Doar" },
                        ].map(({ href, label }) => (
                            <Link key={href} href={href}>
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className="space-y-6 text-center">
                <Image
                    src={mozdevz.url}
                    alt={mozdevz.alt}
                    width={mozdevz!.metadata!.width}
                    height={mozdevz!.metadata!.height}
                    className="mx-auto"
                />
                <span className="text-sm text-gray-54">
                    ©2023 Mozdevz Community. All Rights Reserved
                </span>
            </div>
        </footer>
    );
};
