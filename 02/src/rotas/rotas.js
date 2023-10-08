const express = require('express');
const { todosPokemons, detalhesPokemons } = require('../controladores/pokemons');
const rotas = express();

rotas.get('/pokemon', todosPokemons);
rotas.get('/pokemon/:id', detalhesPokemons);
module.exports = {rotas};