import { SlickTestimonialCarousel } from "@/components/ui/SlickTestimonialCarousel";

import { TeamCard } from "@/components/ui/TeamCard/TeamCard";

import { PARTNERS } from "@/constants/partners";
import { TEAM } from "@/constants/team";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <div className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-[120px]">
            {/*Secção de introdução */}
            <section className="container mx-auto text-center space-y-8 md:space-y-12 mt-[60px] md:mt-[120px] px-4 md:px-0">
                <h1 className="font-primary font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[80px] xl:text-[100px] leading-[120%]">
                    Moldando o{" "}
                    <span className="bg-clip-text text-transparent accent-2">
                        Futuro
                    </span>{" "}
                    da Tecnologia em Moçambique
                </h1>
                <p className="text-gray-80 font-normal text-lg sm:text-xl md:text-2xl mx-0 sm:mx-[36px] md:mx-[72px]">
                    Desenvolva suas habilidades, participe de projetos e
                    compartilhe conhecimento em uma comunidade que valoriza o
                    crescimento contínuo. O próximo passo da sua carreira começa
                    aqui.
                </p>
                <div className="w-fit p-[4px] accent-1 h-fit rounded-xl mx-auto">
                    <Link
                        href="/community"
                        className="bg-background-dark px-6 sm:px-8 md:px-12 py-3 md:py-5 font-mono text-lg md:text-2xl font-bold inline-block rounded-xl"
                    >
                        JUNTE_SE A COMUNIDADE
                    </Link>
                </div>
            </section>

            {/*Imagem */}
            <div className="container h-[300px] sm:h-[400px] md:h-[500px] lg:h-[684px] rounded-t-[20px] border-gray-80 border-2 border-b-0 mx-auto px-4 md:px-6 lg:px-8" />

            <div className="w-full overflow-hidden">
                <SlickTestimonialCarousel />
            </div>

            {/*Membros da Team */}
            <div className="container mx-auto text-center space-y-6 md:space-y-8 px-4 md:px-0">
                <div className="space-y-2 md:space-y-3">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-extrabold text-gray-light">
                        MozDevz Core Team
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-80">
                        A team responsável por dirigir essa imensa comunidade de
                        devz do Rovuma ao Maputo
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-[29px]">
                    {TEAM.map((teamMember) => (
                        <TeamCard key={teamMember.id} teamMember={teamMember} />
                    ))}
                </div>
            </div>

            <div className="container mx-auto bg-gray-light py-12 sm:py-16 md:py-20 lg:py-[120px] rounded-[20px] gap-2.5 px-4 md:px-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold text-black text-center mb-8 md:mb-12">
                    Parceiros e Patrocinadores
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 max-w-[907px] items-center mx-auto px-4 sm:px-6 md:px-0">
                    {PARTNERS.map(({ id, asset }) => (
                        <Image
                            key={id}
                            src={asset.url}
                            alt={asset.alt}
                            width={asset!.metadata!.width}
                            height={asset!.metadata!.height}
                            className="w-full h-auto"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
