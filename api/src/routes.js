const express = require("express");
const routes = express.Router();

//IDENTIFICAÇÃO PARA O BACK-END
//GET: Busca uma informação
//POST: Cria uma informação
//PUT: Editar uma informação por completo
//PATCH: Modificar apena uma parte da informação

routes.get("/",(request,response)=> response.send("Hello World"));

module.exports = routes;