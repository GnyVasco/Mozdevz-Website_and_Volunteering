"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { TestimonialCard } from "../TestimonialCard";
import { Testimonial, TESTIMONIALS } from "@/constants/testimonials";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TestimonialCarouselProps {
    testimonials?: Testimonial[];
    autoplayInterval?: number;
}

export const TestimonialCarousel = ({
    testimonials = TESTIMONIALS,
    autoplayInterval = 5000,
}: TestimonialCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(3);
    const autoplayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const maxIndexRef = useRef(0);

    const totalSlides = testimonials.length;
    const maxIndex = Math.max(0, Math.ceil(totalSlides / itemsPerView) - 1);

    console.log(currentIndex);

    // Keep maxIndexRef updated
    useEffect(() => {
        maxIndexRef.current = maxIndex;
    }, [maxIndex]);

    // Handle responsive behavior
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setItemsPerView(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerView(2);
            } else {
                setItemsPerView(3);
            }
        };

        // Set initial value
        handleResize();

        // Add resize listener
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Use useCallback to avoid recreating functions on each render
    const handleNext = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex >= maxIndexRef.current ? 0 : prevIndex + 1,
        );
    }, []);

    const handlePrev = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex <= 0 ? maxIndexRef.current : prevIndex - 1,
        );
    }, []);

    // Reset autoplay timer when index changes
    useEffect(() => {
        if (autoplayTimeoutRef.current) {
            clearTimeout(autoplayTimeoutRef.current);
        }

        autoplayTimeoutRef.current = setTimeout(() => {
            handleNext();
        }, autoplayInterval);

        return () => {
            if (autoplayTimeoutRef.current) {
                clearTimeout(autoplayTimeoutRef.current);
            }
        };
    }, [currentIndex, autoplayInterval, handleNext]);

    // We don't need to slice testimonials anymore since we're using CSS transform
    // to control which items are visible

    return (
        <section className="container mx-auto relative">
            <h2 className="text-[64px] font-extrabold text-gray-80 text-center mb-20">
                O que dizem sobre a comunidade
            </h2>

            {/* Carousel Container */}
            <div className="relative px-4 overflow-hidden">
                <div
                    ref={carouselRef}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    style={{
                        transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
                        transition: "transform 0.5s ease-in-out",
                        display: "flex",
                        flexWrap: "nowrap",
                    }}
                >
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="transition-all duration-500 flex-shrink-0 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]"
                        >
                            <TestimonialCard testimonial={testimonial} />
                        </div>
                    ))}
                </div>

                {/* Side Navigation Arrows - Only visible on larger screens */}
                <button
                    onClick={handlePrev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-0 z-10 size-16 bg-[#111]/90 rounded-lg flex justify-center items-center hover:bg-[#111] transition-opacity duration-500"
                    aria-label="Previous testimonials"
                >
                    <ChevronLeft
                        size={42}
                        className="stroke-1 stroke-primary"
                    />
                </button>

                <button
                    onClick={handleNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-0 z-10 size-16 bg-[#111]/90 rounded-lg flex justify-center items-center hover:bg-[#111] transition-opacity duration-500"
                    aria-label="Next testimonials"
                >
                    <ChevronRight
                        size={42}
                        className="stroke-1 stroke-primary"
                    />
                </button>
            </div>

            {/* Bottom Navigation Controls - Visible on all screens */}
            <div className="flex justify-center gap-4 mt-12">
                <button
                    onClick={handlePrev}
                    className="p-2 rounded-full border border-gray-54 text-gray-54 hover:bg-gray-800 hover:border-secondary transition-colors lg:hidden"
                    aria-label="Previous testimonials"
                >
                    <ChevronLeft size={20} />
                </button>

                {/* Pagination Indicators */}
                <div className="flex gap-2 items-center">
                    {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                idx === currentIndex
                                    ? "bg-gradient-to-r from-[#8F79F6] to-[#E2363C] w-8"
                                    : "bg-gray-54 w-2 hover:bg-gray-80"
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>

                <button
                    onClick={handleNext}
                    className="p-2 rounded-full border border-gray-54 text-gray-54 hover:bg-gray-800 hover:border-secondary transition-colors lg:hidden"
                    aria-label="Next testimonials"
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </section>
    );
};
