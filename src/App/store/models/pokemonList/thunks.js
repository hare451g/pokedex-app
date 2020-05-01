import axios from 'axios';
import { thunk } from 'easy-peasy';
import { BASE_URL, SPRITES_BASE_URL } from '../../../constants/pokeapi';

const thunks = {
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
      const resultWithSprite = response.data.results.map(({ name, url }) => {
        const id = url.slice(url.length - 2, -1);
        const sprite = `${SPRITES_BASE_URL}/pokemon/${id}.png`;

        return { name, url, sprite };
      });

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
