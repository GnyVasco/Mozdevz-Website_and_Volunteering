"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import { TestimonialCard } from "../TestimonialCard";
import { Testimonial, TESTIMONIALS } from "@/constants/testimonials";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Importar os estilos CSS do react-slick
// Importar estilos customizados
import "./SlickCarousel.css";

interface SlickTestimonialCarouselProps {
    testimonials?: Testimonial[];
    autoplayInterval?: number;
}

// Componente de seta personalizada para o botão anterior
const PrevArrow = ({
    onClick,
}: {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => (
    <button
        onClick={onClick}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-0 z-10 size-10 sm:size-12 md:size-16 bg-[#111]/90 rounded-lg flex justify-center items-center hover:bg-[#111] transition-opacity duration-500"
        aria-label="Previous testimonials"
    >
        <ChevronLeft size={24} className="stroke-1 stroke-primary sm:size-32 md:size-42" />
    </button>
);

// Componente de seta personalizada para o botão seguinte
const NextArrow = ({
    onClick,
}: {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => (
    <button
        onClick={onClick}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-0 z-10 size-10 sm:size-12 md:size-16 bg-[#111]/90 rounded-lg flex justify-center items-center hover:bg-[#111] transition-opacity duration-500"
        aria-label="Next testimonials"
    >
        <ChevronRight size={24} className="stroke-1 stroke-primary sm:size-32 md:size-42" />
    </button>
);

export const SlickTestimonialCarousel = ({
    testimonials = TESTIMONIALS,
    autoplayInterval = 5000,
}: SlickTestimonialCarouselProps) => {
    const [slidesToShow, setSlidesToShow] = useState(3);
    const [isMobile, setIsMobile] = useState(false);

    // Ajustar o número de slides com base no tamanho da tela
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setIsMobile(width < 640);
            
            if (width < 640) {
                setSlidesToShow(1);
            } else if (width < 1024) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(3);
            }
        };

        // Definir valor inicial
        handleResize();

        // Adicionar listener de redimensionamento com debounce para melhor performance
        let resizeTimer: NodeJS.Timeout;
        const debouncedResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(handleResize, 100);
        };

        window.addEventListener("resize", debouncedResize);
        return () => window.removeEventListener("resize", debouncedResize);
    }, []);

    // Configurações do Slick Carousel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: autoplayInterval,
        pauseOnHover: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        lazyLoad: "ondemand" as const,
        swipeToSlide: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    centerMode: true,
                    centerPadding: "20px",
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    centerMode: true,
                    centerPadding: "10px",
                },
            },
        ],
        customPaging: (i: number) => (
            <div
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 bg-gradient-to-r from-[#8F79F6] to-[#E2363C] w-4 sm:w-6 md:w-8`}
                aria-label={`Go to slide ${i + 1}`}
            />
        ),
        dotsClass: "slick-dots custom-dots",
    };

    return (
        <section className="container mx-auto relative px-4 md:px-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-extrabold text-gray-80 text-center mb-10 md:mb-20">
                O que dizem sobre a comunidade
            </h2>

            {/* Carousel Container com React Slick */}
            <div className="relative px-0 sm:px-4 overflow-hidden">
                <Slider {...settings} className="testimonial-slider">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="outline-none focus:outline-none pb-4"
                        >
                            <div className="mx-1 sm:mx-2">
                                <TestimonialCard testimonial={testimonial} />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};
