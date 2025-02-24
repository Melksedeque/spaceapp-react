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

- **React com Javascript**
  - Biblioteca principal para construção da interface
  - Utilização de Hooks (useState, useEffect) para gerenciamento de estado
  - Componentes funcionais com props para reusabilidade
  - Context API para gerenciamento de estado global

- **Styled Components**
  - Estilização baseada em componentes
  - Temas dinâmicos e estilos globais
  - CSS-in-JS com suporte a props
  - Estilização condicional baseada em estados

- **Vite**
  - Bundler e dev server com Hot Module Replacement (HMR)
  - Configuração zero para início rápido
  - Otimização de build para produção
  - Suporte nativo a ESModules

- **ESLint**
  - Configuração personalizada para React
  - Plugins para hooks e refresh
  - Regras de estilo consistentes
  - Integração com editor de código

- **LocalStorage API**
  - Persistência de dados do usuário
  - Armazenamento de favoritos
  - Cache de configurações
  - Gerenciamento de estado offline

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

1. **Gerenciamento de Favoritos**:
   - Clique no ícone de coração para marcar/desmarcar uma imagem como favorita
   - Os favoritos são automaticamente salvos no localStorage
   - Os favoritos persistem entre sessões do navegador
   - Visualize o status de favorito ao recarregar a página

2. **Visualização de Imagens**:
   - Clique na imagem para abrir em tamanho maior em um modal
   - Navegue entre imagens usando as setas do teclado
   - Feche o modal com a tecla ESC ou clicando fora da imagem

3. **Filtragem e Busca**:
   - Use as tags para filtrar imagens por categoria
   - Digite no campo de busca para encontrar imagens específicas
   - Combine filtros de tag com busca textual
   - As preferências de filtro são mantidas durante a sessão

### Solução de Problemas

#### Problema comum: componentes estilizados não funcionam

- Erro: "Não é possível encontrar o módulo 'styled-components'"
- Solução: Certifique-se de ter instalado as dependências com `npm install`. Se o problema persistir, tente remover a pasta `node_modules` e `package-lock.json` e execute `npm install` novamente.

#### Problema comum: favoritos não persistem

- Erro: "Favoritos desaparecem ao recarregar a página"
- Solução: 
  1. Verifique se o localStorage está habilitado no navegador
  2. Limpe o cache do navegador
  3. Verifique se há espaço disponível no localStorage
  4. Use o console do navegador para verificar erros de localStorage

#### Depuração:

- Use a extensão React Developer Tools para inspecionar o estado dos componentes
- Verifique o localStorage no console do navegador com:
  ```javascript
  localStorage.getItem('favorites')
  ```
- Para problemas de componentes React, use a extensão do navegador React Developer Tools
- Para permitir um registro mais detalhado, você pode adicionar instruções `console.log` em seus componentes ou usar as ferramentas de desenvolvedor do navegador para definir pontos de interrupção

## Projeto ao vivo

[Link do Projeto no Vercel](https://spaceapp-react-beige.vercel.app/)

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](https://github.com/Melksedeque/spaceapp-react?tab=MIT-1-ov-file) para mais detalhes.

## Autor

- GitHub - [Melksedeque Silva](https://github.com/Melksedeque/)
- FrontEndMentor - [@Melksedeque](https://www.frontendmentor.io/profile/Melksedeque)
- Twitter / X - [@SouzaMelk](https://x.com/SouzaMelk)
- LinkedIn - [Melksedeque Silva](https://www.linkedin.com/in/melksedeque-silva/)