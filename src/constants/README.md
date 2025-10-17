# Pasta Constants

## Visão Geral

A pasta `constants` em um projeto contém valores constantes que são utilizados em toda a aplicação. Esta organização centralizada de constantes facilita a manutenção e atualização de valores que são referenciados em vários lugares do código.

## Estrutura

```
constants/
├── api.ts         # Endpoints da API, URLs base
├── config.ts      # Configurações da aplicação
├── routes.ts      # Rotas da aplicação
├── messages.ts    # Mensagens de erro/sucesso
└── enums.ts       # Enumerações e valores constantes
```

## Uso

Os arquivos nesta pasta devem exportar valores constantes que podem ser importados em qualquer lugar da aplicação:

```javascript
// Exemplo de constants/routes.ts
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
};

// Exemplo de uso em um componente
import { ROUTES } from '@/constants/routes';

function Navigation() {
  return (
    <nav>
      <Link href={ROUTES.HOME}>Home</Link>
      <Link href={ROUTES.ABOUT}>Sobre</Link>
    </nav>
  );
}
```

## Boas Práticas

1. Use nomes em UPPERCASE para constantes fixas
2. Agrupe constantes relacionadas em objetos
3. Documente o propósito das constantes quando necessário
4. Mantenha os arquivos organizados por domínio ou funcionalidade
5. Evite valores duplicados em diferentes arquivos de constantes

## Benefícios

- Manutenção facilitada - alterações em um único local
- Prevenção de erros de digitação em strings usadas múltiplas vezes
- Melhor legibilidade do código
- Facilita refatorações futuras
