import axios from 'axios';
import { thunk } from 'easy-peasy';
import { BASE_URL, SPRITES_BASE_URL } from '../../../constants/pokeapi';

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

const thunks = {
  fetchPokemonByType: thunk(async (actions, payload) => {
    try {
      actions.startFetch();

      if (payload.name) {
        const url = `${BASE_URL}/type/${payload.name}`;

        const response = await axios.get(url);

        // get front_default image from sprites
        const pokemons = response.data.pokemon.map((item) => item.pokemon);
        const resultWithSprite = transformResult(pokemons);

        actions.setResult({
          ...response.data,
          results: resultWithSprite,
        });
      } else {
        throw new Error('Pokemon type name is must be provided');
      }
    } catch (error) {
      console.error(error);
      actions.setError(error.message || 'unhandled error');
    } finally {
      actions.stopFetch();
    }
  }),
  fetchPokemonThunk: thunk(async (actions, payload = {}) => {
    try {
      actions.startFetch();
      let url = `${BASE_URL}/pokemon/`;

      const config = {
        params: {
          offset: payload.offset,
          limit: payload.limit,
        },
      };

      if (payload.nextUrl) {
        url = payload.nextUrl;
      }

      const response = await axios.get(url, config);

      // get front_default image from sprites
      const resultWithSprite = transformResult(response.data.results);

      actions.setResult({
        ...response.data,
        results: resultWithSprite,
      });
    } catch (error) {
      console.error(error);
      actions.setError(error.message || 'unhandled error');
    } finally {
      actions.stopFetch();
    }
  }),
};

export default thunks;
