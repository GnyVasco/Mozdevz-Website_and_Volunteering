import { Asset } from "@/types";
import { melanie } from "./images";

export interface Testimonial {
    id: string;
    quote: string;
    person: {
        name: string;
        role: string;
        image: Asset;
    };
}

export const TESTIMONIALS: Testimonial[] = [
    {
        id: "testimonial-1",
        quote: "Através dos eventos organizados, pude aplicar o que aprendi e contribuir para soluções que beneficiam nossa sociedade.",
        person: {
            name: "Melanie Nhanzilo",
            role: "Especialista em Dados",
            image: melanie
        }
    },
    {
        id: "testimonial-2",
        quote: "A comunidade MozDevz abriu portas para networking com profissionais experientes que me orientaram no início da minha carreira.",
        person: {
            name: "Carlos Sitoe",
            role: "Frontend Developer",
            image: melanie // Usando a mesma imagem como placeholder
        }
    },
    {
        id: "testimonial-3",
        quote: "Participar dos hackathons da MozDevz me ajudou a desenvolver habilidades de trabalho em equipe e resolução de problemas reais.",
        person: {
            name: "Sofia Matsinhe",
            role: "Mobile Developer",
            image: melanie // Usando a mesma imagem como placeholder
        }
    },
    {
        id: "testimonial-4",
        quote: "Os workshops técnicos organizados pela MozDevz transformaram minha compreensão de desenvolvimento de software e boas práticas.",
        person: {
            name: "Paulo Machava",
            role: "DevOps Engineer",
            image: melanie // Usando a mesma imagem como placeholder
        }
    },
    {
        id: "testimonial-5",
        quote: "Graças à comunidade MozDevz, consegui me conectar com oportunidades internacionais e expandir minha visão de carreira.",
        person: {
            name: "Ana Mabjaia",
            role: "UX/UI Designer",
            image: melanie // Usando a mesma imagem como placeholder
        }
    }
];