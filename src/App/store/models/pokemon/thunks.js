import axios from 'axios';
import { BASE_URL } from '../../../constants/pokeapi';

import { thunk } from 'easy-peasy';

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
};

export default thunks;
