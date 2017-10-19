# Teste Backend

## Para rodar o projeto:
- clone ou baixe o projeto
- pelo terminal execute o comando `npm install` na raiz do projeto
- em seguida execute `npm start`

## Requisitos
- instalar [nodejs](https://nodejs.org/en/download/)

## Rotas do Projeto
- Index (http://localhost:3000/)
    Rota inicial do projeto, tras todos os resultados de asks e bids, podendo tbm filtrar os outros parametros.

- Routes
    - (http://localhost:3000/asks) ou (http://localhost:3000/bids) para filtrar os Tipo de ordem.

- Query - Ex: (http://localhost:3000/asks?exchange=NEG&valor_end=17000)
    - exchange
        - Filtro dos nomes de Exchanges
        - Options: [`ARN`,`B2U`,`BAS`,`BIV`,`BSQ`,`FLW`,`FOX`,`LOC`,`MBT`,`NEG`,`PAX`]
    - valor_ini
        - Filtro de valor dos registros, trazendo tudo que é maior ou igual.
        - Valores inteiros ou decimais.
    - valor_end
        - Filtro de valor dos registros, trazendo tudo que é menor ou igual.
        - Valores inteiros ou decimais.
    - qtd_ini
        - Filtro de quantidade dos registros, trazendo tudo que é maior ou igual.
        - Valores inteiros ou decimais.
    - qtd_end
        - Filtro de quantidade dos registros, trazendo tudo que é menor ou igual.
        - Valores inteiros ou decimais.