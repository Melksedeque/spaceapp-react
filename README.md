# SpaceApp - SPA em React + Vite

![Tela Principal](./screenshot/tela-principal.png)

## Menu

- [Layout](#layout)
- [Descrição](#descrição)
  - [Principais recursos incluem](#principais-recursos-incluem)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura de Pastas](#estrutura-de-pastas)
  - [Arquivos Principais](#arquivos-principais)
- [Como Instalar e Rodar o Projeto](#como-instalar-e-rodar-o-projeto)
  - [Pré-requisitos](#pré-requisitos)
  - [Configuração](#configuração)
  - [Casos de Uso Comuns](#casos-de-uso-comuns)
  - [Solução de Problemas](#solução-de-problemas)
    - [Problema comum: componentes estilizados não funcionam](#problema-comum-componentese-stilizados-não-funcionam)
    - [Depuração](#depuração)
- [Projeto ao vivo](#projeto-ao-vivo)
- [Licença](#licença)
- [Autor](#autor)

## Layout

[Link do Figma](https://shorturl.at/rFmNH)

## Descrição

Este projeto é um aplicativo da web baseado em React que apresenta uma galeria de imagens relacionadas ao espaço com recursos de filtragem e pesquisa.

O aplicativo Space Gallery React foi projetado para fornecer aos usuários uma maneira interativa e visualmente atraente de explorar uma coleção de imagens com tema espacial. Ele apresenta um layout responsivo com navegação na barra lateral, funcionalidade de pesquisa e uma área de galeria principal que exibe imagens populares e filtradas.

Os principais recursos do aplicativo incluem:

- Um layout responsivo com uma barra lateral para facilitar a navegação
- Um campo de pesquisa para encontrar imagens específicas
- Uma galeria principal apresentando imagens relacionadas ao espaço
- Uma seção de galeria popular destacando as imagens em destaque
- Filtragem baseada em tags para categorizar e classificar imagens
- Estilo global para aparência consistente em todo o aplicativo

### Principais recursos incluem

## Tecnologias Utilizadas

- React 19
- Styled Components
- Vite
- ESLint para linting
- Node.js e npm para gerenciamento de dependências

## Estrutura de Pastas

```
src/
├── components/
│   ├── Banner/
│   ├── Footer/
│   ├── Galleries/
│   ├── GlobalStyles/
│   ├── Header/
│   ├── SearchField/
│   ├── Sidebar/
│   ├── Title/
│   └── ZoomModal/
├── utils/
│   └── galleryUtils.jsx
├── App.jsx
└── main.jsx
```

### Arquivos Principais:

- `src/App.jsx`: Componente principal da aplicação
- `src/main.jsx`: Ponto de entrada da aplicação
- `src/components/`: Pasta contendo todos os componentes reutilizáveis
- `src/utils/`: Utilitários e funções auxiliares

## Como Instalar e Rodar o Projeto

### Pré-requisitos:

- Node.js (versão 14 or superior)
- npm (normalmente vem com o Node.js)

Para instalar as dependências do projeto, rode o seguinte comando no diretório raiz:

```bash
npm install
```

### Configuração

O projeto usa Vite como ferramenta de construção. Você pode modificar a configuração do Vite em `vite.config.js` se necessário. Por exemplo, para alterar a porta do servidor de desenvolvimento:

```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
});
```

Rode o comando abaixo para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

Isso iniciará o servidor de desenvolvimento Vite e você poderá visualizar o aplicativo navegando até `http://localhost:5173` (ou a porta que você alterou no arquivo de configurações do Vite) em seu navegador.

### Casos de Uso Comuns

### Solução de Problemas

#### Problema comum: componentes estilizados não funcionam

- Erro: "Não é possível encontrar o módulo 'styled-components'"
- Solução: Certifique-se de ter instalado as dependências com `npm install`. Se o problema persistir, tente remover a pasta `node_modules` e `package-lock.json` e execute `npm install` novamente.

#### Depuração:

- Para problemas de componentes React, use a extensão do navegador React Developer Tools.
- Para permitir um registro mais detalhado, você pode adicionar instruções `console.log` em seus componentes ou usar as ferramentas de desenvolvedor do navegador para definir pontos de interrupção.

## Projeto ao vivo

[Link do Projeto no Vercel]()

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](https://github.com/Melksedeque/spaceapp-react?tab=MIT-1-ov-file) para mais detalhes.

## Autor

- GitHub - [Melksedeque Silva](https://github.com/Melksedeque/)
- FrontEndMentor - [@Melksedeque](https://www.frontendmentor.io/profile/Melksedeque)
- Twitter / X - [@SouzaMelk](https://x.com/SouzaMelk)
- LinkedIn - [Melksedeque Silva](https://www.linkedin.com/in/melksedeque-silva/)