const { listarPokemons, detalharPokemon } = require("utils-playground");

const todosPokemons = async (req, res) => {
  try {
    const pokemons = await listarPokemons();
    return res.status(200).json(pokemons);
  } catch (erro) {
    return res
      .status(400)
      .json({ message: `Erro ao tentar localizar pokemons ${erro}` });
  } finally {
    res.send();
  }
};

const detalhesPokemons = async (req, res) => {
  const { id } = req.params;
  try {
    const pokemon = await detalharPokemon(id);

    return res.status(200).json({
      id: pokemon.id,
      name: pokemon.name,
      height: pokemon.height,
      weight: pokemon.weight,
      base_experience: pokemon.base_experience,
      forms: pokemon.forms,
      abilities: pokemon.abilities,
      species: pokemon.species,
    });
  } catch (erro) {
    return res
      .status(400)
      .json({ message: `Erro com detalhes do pokemon ${erro}` });
  } finally{
    res.send();
  }
};

module.exports = { todosPokemons, detalhesPokemons };
