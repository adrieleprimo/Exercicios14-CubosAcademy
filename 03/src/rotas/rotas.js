const express = require('express');
const { gerenciamentoEnderecos } = require('../controladores/localizacao');
const rotas = express();

rotas.get('/enderecos/:cep', gerenciamentoEnderecos);

module.exports = rotas;