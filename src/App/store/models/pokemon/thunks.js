import axios from 'axios';
import { thunk, action } from 'easy-peasy';

import { BASE_URL } from '../../../constants/pokeapi';
import { transformResult } from './utils';

const thunks = {
  fetchPokemonThunk: thunk(async (actions, payload = {}) => {
    try {
      actions.startFetch();
      let url = `${BASE_URL}/pokemon`;

      if (payload.id) {
        url = `${url}/${payload.id}/`;
      } else if (payload.name) {
        url = `${url}/${payload.name}/`;
      } else {
        throw new Error('Name or Id is required to fetch single pokemon');
      }

      const response = await axios.get(url);

      actions.setResult(response.data);
    } catch (error) {
      console.error(error);
      actions.setError(error.message || 'unhandled error');
    } finally {
      actions.stopFetch();
    }
  }),

  fetchPokemonListByType: thunk(async (actions, payload) => {
    try {
      actions.startFetch();
      actions.setEmptyList();

      if (payload.name) {
        const url = `${BASE_URL}/type/${payload.name}`;

        const response = await axios.get(url);

        // get front_default image from sprites
        const pokemons = response.data.pokemon.map((item) => item.pokemon);

        const resultWithSprite = transformResult(pokemons);

        actions.setListResult({
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

  fetchPokemonListThunk: thunk(async (actions, payload = {}) => {
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

      actions.setListResult({
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
