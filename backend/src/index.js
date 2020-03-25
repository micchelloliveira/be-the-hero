const express = require('express');
const cors = require('cors'); 
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use (routes);

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/listas uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query parms: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * Tipos de Bancos de Dados
    * SQL: MySql, Sqlite, PostgreSQL, Oracle
    * NoSQL: MongoDB, CouchDB, etc
    */

    /**
     * Iremos utilizar o SQLite que já vem no mongodb por padrão
     * Driver: SELECT * FROM users
     * Query Bulder: table('users').select('*').where()
     * Iremos utilizar o KNEX.JS
     */

app.listen(3333);