# Pasta `public/images`

## Descrição
Esta pasta contém todas as imagens estáticas utilizadas no projeto. O diretório `public` é acessível diretamente pelo navegador, permitindo que as imagens sejam facilmente referenciadas em componentes e páginas.

## Estrutura Recomendada
Para melhor organização, considere seguir esta estrutura:

```
public/
  └── images/
      ├── brand/          # Logotipos da aplicação
      ├── icons/          # Ícones gerais
      ├── backgrounds/    # Imagens de fundo
      ├── banners/        # Banners promocionais
      ├── products/       # Imagens de produtos (se aplicável)
      └── users/          # Avatares ou imagens de usuário (se aplicável)
```

## Como Usar

Em componentes ou páginas, referencie as imagens assim:

```jsx
// Exemplo em um componente React
<img src="/images/logos/logo.png" alt="Logo da aplicação" />
```

## Boas Práticas

1. **Otimização**: Compacte as imagens antes de adicioná-las
2. **Formatos**: Use WebP quando possível para melhor performance
3. **Nomeação**: Use nomes descritivos e com kebab-case (ex: `hero-banner.jpg`)
4. **Dimensões**: Inclua dimensões nos nomes de arquivo quando relevante (ex: `avatar-48x48.png`)
5. **Responsividade**: Considere múltiplas versões para diferentes tamanhos de tela

## Nota
Considere usar o Image Component do Next.js para imagens que requerem otimização automática:

```jsx
import Image from 'next/image'

// Em seu componente
<Image
  src="/images/banners/hero.jpg"
  alt="Banner principal"
  width={1200}
  height={600}
/>
```

Mantenha esta pasta organizada e remova imagens não utilizadas regularmente!
