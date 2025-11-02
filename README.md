Desafio Proxy Reverso com NGINX, mais NodeJS e MySql

Objetivo:

Quando um usuário acessar o nginx pela 8080, o mesmo fará uma chamada em nossa aplicação node.js.
Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados, em ordem decrecesnte do ID.
Requisitos:

Espera-se que você tenha os seguintes requisitos para executar a imagem Docker:

    1. Ambiente Linux
    2. Acesso ao gitHub
    3. Docker instalado

Como validar o desafio:

    1. Após clonar este repositório, execute: 
        docker-compose up -d --build
    2. Feito isso, através de browser, acesse: 
        http://localhost:8080 
    3. A cada acesso e refresh na página, a lista com o ID e Nome do usuário deverá ser atualizada em ordem decrescente.

