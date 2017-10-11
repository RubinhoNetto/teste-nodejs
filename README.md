# Teste Backend

## Para rodar o projeto:
- clone ou baixe o projeto
- pelo terminal execute o comando `npm install` na raiz do projeto
- em seguida execute `npm start`

## Requisitos
- instalar [nodejs](https://nodejs.org/en/download/)

## Rotas do Projeto
- Index (http://localhost:3000/)
    Rota inicial do projeto, com instruções.

- Compras (http://localhost:3000/compras)
    Rota para listar os OrderBooks de `bids`.
    Com o filtro de 
    - `Exchange`
    - `Valor unitário`
    - `Quantidade`

- Vendas (http://localhost:3000/vendas)
    Rota para listar os OrderBooks de `asks`.
    Com o filtro de 
    - `Exchange`
    - `Valor unitário`
    - `Quantidade`