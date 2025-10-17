# Fonts

Este diretório contém todas as fontes utilizadas no projeto.

## Estrutura

```
fonts/
├── [nome-da-fonte-1]/
│   ├── fonte-regular.woff2
│   ├── fonte-bold.woff2
│   └── fonte-italic.woff2
├── [nome-da-fonte-2]/
│   └── ...
└── index.ts
```

## Como adicionar novas fontes

1. Crie uma nova pasta com o nome da fonte
2. Adicione os arquivos de fonte nos formatos suportados (preferencialmente .woff2 para melhor performance)
3. Importe e configure a fonte no arquivo `index.ts`

## Usando as fontes no Next.js

As fontes são importadas e configuradas no arquivo `index.ts` e podem ser utilizadas em qualquer componente do projeto.

### Exemplo de configuração no Next.js 13+

```typescript
// fonts/index.ts
import { Inter, Roboto_Mono } from 'next/font/google'
import localFont from 'next/font/local'

// Google Fonts
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

// Fonte Local
export const minha_fonte = localFont({
  src: './minha-fonte/minha-fonte.woff2',
  display: 'swap',
})
```

## Observações

- Prefira utilizar formatos modernos como .woff2 para melhor performance
- Considere incluir apenas os pesos e estilos necessários para reduzir o tamanho do bundle
- Para fontes do Google, utilize o sistema de importação do Next.js para otimização automática
