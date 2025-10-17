"use client";

import { TESTIMONIALS } from "@/constants/testimonials";
import { SlickTestimonialCarousel } from "./SlickTestimonialCarousel";

/**
 * Exemplo de uso do componente SlickTestimonialCarousel
 * 
 * Este componente demonstra como usar o SlickTestimonialCarousel
 * com diferentes configurações.
 */
export default function SlickTestimonialCarouselExample() {
  return (
    <div className="space-y-16">
      {/* Exemplo com configuração padrão */}
      <div>
        <h3 className="text-2xl font-bold mb-4 text-gray-80">Exemplo com configuração padrão:</h3>
        <SlickTestimonialCarousel />
      </div>
      
      {/* Exemplo com intervalo de autoplay personalizado */}
      <div>
        <h3 className="text-2xl font-bold mb-4 text-gray-80">Exemplo com intervalo de autoplay personalizado (8 segundos):</h3>
        <SlickTestimonialCarousel autoplayInterval={8000} />
      </div>
      
      {/* Exemplo com conjunto de depoimentos limitado */}
      <div>
        <h3 className="text-2xl font-bold mb-4 text-gray-80">Exemplo com conjunto de depoimentos limitado (3 primeiros):</h3>
        <SlickTestimonialCarousel testimonials={TESTIMONIALS.slice(0, 3)} />
      </div>
    </div>
  );
}