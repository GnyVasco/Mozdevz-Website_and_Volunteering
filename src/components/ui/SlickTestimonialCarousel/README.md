# SlickTestimonialCarousel

Um componente de carousel de testemunhos usando a biblioteca React Slick.

## Características

- Carousel responsivo que se adapta a diferentes tamanhos de tela
- Navegação com botões e indicadores
- Autoplay com intervalo configurável
- Suporte para personalização de estilos
- Setas de navegação e indicadores de página personalizados

## Requisitos

Certifique-se que seu projeto tem as seguintes dependências instaladas:

```bash
npm install react-slick slick-carousel
```

## Uso

```tsx
import { SlickTestimonialCarousel } from '@/components/ui/SlickTestimonialCarousel';
import { TESTIMONIALS } from '@/constants/testimonials';

export default function TestimonialsSection() {
  return (
    <div>
      {/* Uso básico com configurações padrão */}
      <SlickTestimonialCarousel />
      
      {/* Personalizado com intervalo de autoplay e testemunhos específicos */}
      <SlickTestimonialCarousel 
        testimonials={TESTIMONIALS.slice(0, 3)} 
        autoplayInterval={8000} 
      />
    </div>
  );
}
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `testimonials` | `Testimonial[]` | `TESTIMONIALS` | Array de objetos de testemunho a serem exibidos |
| `autoplayInterval` | `number` | `5000` | Intervalo de autoplay em milissegundos |

## Estrutura de Dados

O componente espera que cada testemunho tenha a seguinte estrutura:

```typescript
interface Testimonial {
    id: string;
    quote: string;
    person: {
        name: string;
        role: string;
        image: Asset;
    };
}
```

## Estilização

O componente utiliza três arquivos CSS:
- `slick.css` e `slick-theme.css` da biblioteca react-slick
- `SlickCarousel.css` personalizado para ajustar o estilo do carousel

## Responsividade

O carousel se adapta automaticamente aos diferentes tamanhos de tela:
- Desktop (>1024px): Exibe 3 slides por vez
- Tablet (640px-1024px): Exibe 2 slides por vez 
- Mobile (<640px): Exibe 1 slide por vez, esconde as setas laterais

## Melhorias em Relação ao Carousel Anterior

- Código mais limpo e conciso, aproveitando as funcionalidades do react-slick
- Melhor performance devido à otimização interna do react-slick
- Animações mais suaves entre os slides
- Melhor suporte para responsividade
- Menos código personalizado para manutenção