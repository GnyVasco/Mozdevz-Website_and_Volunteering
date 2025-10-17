# Documentação - Pasta `/public/docs`

## Visão Geral

Esta pasta `/public/docs` contém documentação e arquivos relacionados que precisam ser servidos estaticamente pela aplicação Next.js. Como parte do diretório `/public`, estes arquivos são acessíveis diretamente através da URL da aplicação.

## Objetivo

O objetivo desta pasta é armazenar:

- Documentação técnica em formato acessível (PDF, HTML, Markdown)
- Manuais de usuário
- Documentação da API
- Especificações técnicas
- Guias de instalação e configuração

## Como Utilizar

### Acessando Arquivos

Os arquivos nesta pasta podem ser acessados diretamente pela URL. Por exemplo:

- Um arquivo `api-docs.pdf` localizado em `/public/docs/api-docs.pdf` estará disponível em `https://seu-site.com/docs/api-docs.pdf`

### Adicionando Novos Documentos

1. Adicione seus arquivos de documentação a esta pasta
2. Não é necessário reiniciar o servidor - os arquivos estarão disponíveis imediatamente
3. Referencie os arquivos em seu código usando caminhos relativos à raiz:

```jsx
// Exemplo de link para um documento
<Link href="/docs/manual.pdf">
  <a>Manual do Usuário</a>
</Link>
```

## Boas Práticas

- Mantenha uma estrutura organizada com subpastas quando necessário (ex: `/public/docs/api/`, `/public/docs/guides/`)
- Use formatos universalmente acessíveis (PDF, HTML)
- Mantenha um índice ou página de navegação para facilitar o acesso à documentação
- Considere versionar documentos importantes (ex: `manual-v1.2.pdf`)
- Atualize esta documentação quando a estrutura da pasta for modificada

## Observações

- Arquivos muito grandes podem impactar o tempo de carregamento
- Considere usar sistemas dedicados de documentação para projetos maiores
- A documentação interna do código deve estar em seus respectivos arquivos, não nesta pasta
