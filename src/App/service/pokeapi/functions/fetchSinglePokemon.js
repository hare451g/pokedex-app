import axios from 'axios';

import { BASE_URL } from '../constants';

async function fetchSinglePokemon({ id = 0, name = '' }) {
  try {
    let url = `${BASE_URL}/pokemon`;

    if (id) {
      url = `${url}/${id}/`;
    } else if (name) {
      url = `${url}/${name}/`;
    } else {
      throw new Error('Name or Id is required to fetch single pokemon');
    }

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error.response || error.message || error;
  }
}

export default fetchSinglePokemon;
