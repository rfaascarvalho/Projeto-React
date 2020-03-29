// Importar funcionalidades para dentro da variavel express
const express = require('express');

const cors = require('cors');
const { errors } = require('celebrate');
// Importar as rotas
const routes = require('./routes');

// Variavel que vai armazenar minha aplicaçao.
const app = express();

// Antes de todas as requisaçoes estou falando para .
// o express ir no corpo da minha requisao e converter
// o JSON em objeto javascript
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

// Metodo HTTP:

// GET: Buscar uma informaçao do back-end 
// POST: Criar uma informaçao no back-end
// PUT: Alterar uma informaçao no back-end 
// DELETE: Deletar uma informaçao no back-end

// Tipos de Parametros:

// Query Parms: Parametros nomeados que enviamos dentro da rota após o 
// simbolo de ?, (servem para: filtros, paginaçoes).
// Route Parms: Parametros utilizados para identificar recursos.
// Request Body: Corpo da requisiçao, utilizado para criar 
// ou alterar recursos.

// Banco de dados:

// SQL: MySQL SQLlite, PostgreSQL, Oracle 
// NoSQL: MongoDB, etc

// Instalar o Knex, nele que vai ficar todas as configuraçoes
// de acesso de dados, estamos utilizando o SQLlite



// Mandar a aplicaçao de cima ouvir a porta http://localhost:3333/
module.exports = app;