# Pasta Types

Este diretório contém as definições de tipos TypeScript utilizadas em todo o projeto.

## Estrutura

- `index.ts` - Arquivo principal que exporta todos os tipos
- `/api` - Tipos relacionados às chamadas de API
- `/components` - Tipos para props de componentes
- `/models` - Interfaces e tipos para modelos de dados

## Uso

Para utilizar os tipos definidos aqui, importe-os da seguinte forma:

```typescript
import { MeuTipo } from '@/types';
// ou
import { MeuTipo } from '@/types/models';
```

## Convenções

- Prefixe interfaces para props de componentes com `I`, por exemplo: `IButtonProps`
- Use tipos para alias de união/interseção, por exemplo: `type UserRole = 'admin' | 'user'`
- Exporte todos os tipos no arquivo `index.ts` correspondente ao seu diretório
- Documente tipos complexos com comentários JSDoc

## Manutenção

Ao adicionar novos tipos:
1. Mantenha-os organizados em subpastas apropriadas
2. Adicione-os ao arquivo de exportação correspondente
3. Siga as convenções de nomenclatura do projeto
