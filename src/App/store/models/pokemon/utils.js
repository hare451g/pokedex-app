import { SPRITES_BASE_URL } from '../../../constants/pokeapi';

function transformResult(pokemonArray = []) {
  return pokemonArray.map((pokemon) => {
    const id = pokemon.url.slice(0, -1).split('/').pop();
    const sprite = `${SPRITES_BASE_URL}/pokemon/${id}.png`;

    return {
      name: pokemon.name,
      id,
      url: pokemon.url,
      sprite,
    };
  });
}

export { transformResult };
