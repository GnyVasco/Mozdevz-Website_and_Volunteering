# Components

Este diretório contém todos os componentes reutilizáveis do projeto.

## Estrutura

Os componentes estão organizados da seguinte forma:

- `/ui` - Componentes de UI básicos (botões, inputs, cards, etc.)
- `/layout` - Componentes de estrutura de página (Header, Footer, Sidebar, etc.)
- `/features` - Componentes específicos de features da aplicação
- `/forms` - Componentes relacionados a formulários
- `/modals` - Componentes de janelas modais e diálogos

## Convenções

- Cada componente deve estar em seu próprio diretório
- O diretório do componente deve conter:
  - `index.tsx` - Exportação principal do componente
  - `Component.tsx` - Implementação do componente
  - `Component.module.css` - Estilos específicos (se necessário)

## Exemplo

```tsx
// Button/Button.tsx
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export function Button({ children, variant = 'primary', onClick }: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// Button/index.tsx
export { Button } from './Button';
```

## Melhores Práticas

1. Mantenha os componentes pequenos e focados em uma única responsabilidade
2. Use TypeScript para definir interfaces claras de props
3. Documente comportamentos complexos com comentários
4. Evite lógica de negócio nos componentes de UI
5. Utilize React Server Components quando apropriado
