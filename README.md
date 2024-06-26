# React News!

## 🖥️ Olhe este projeto na web

- [react-news](https://react-news-lilac.vercel.app/)

## 🚀 Tecnologias

Esse projeto está usando:

- [ReactJS](https://reactjs.org)
- [typescript](https://www.typescriptlang.org)

Libs:

- [sass](https://sass-lang.com)
- [React Helmet Async](https://www.npmjs.com/package/react-helmet-async)
- [React Router Dom](https://reactrouter.com/en/main)
- [axios](https://axios-http.com/ptbr/docs/intro)

## 💻 Sobre o projeto

Esse projeto é um desafio da empresa Icount Plus com intenção de testar minhas habilidades em ReactJS.
A aplicação tem a ideia de mostrar notícias para o usuário usando a api do New York Times, na tela inicial temos uma lista de notícias populares e um input para o usuário conseguir pesquisar qualquer notícia.

## 🧮 Sobre o código

- A aplicação está em ReactJS com typescript e usando sass;
- Os componentes possuem testes unitários, para garantir a renderização de forma certa;
- As funções utils também possuem testes unitários;
- Os estados estão sendo gerenciados por contextApi, assim evitando o Prop drilling;
- Estrutura de pasta padrão de React;
- Na pasta **mocks**, está sendo simulado o retorno da api para as notícias populares e para as notícias pesquisadas;
- O uso de Helmet é para conseguir passar os títulos de forma adequada para as páginas;
- Uso de lazy imports e suspense para loading na página de search;
- Url da página de search com parâmetro;
- Eslint e prettier para organização de código.

## 📜 Scripts

Neste projeto você pode rodar

- `yarn install` para instalar as dependências
- `yarn start` para abrir o projeto local
- `yarn test` para rodar os testes unitários
