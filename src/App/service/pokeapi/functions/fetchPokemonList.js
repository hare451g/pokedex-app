import axios from 'axios';

import { BASE_URL, SPRITES_BASE_URL } from '../constants';

async function fetchPokemonList({ offset = 0, limit = 20, nextUrl = null }) {
  try {
    let url = `${BASE_URL}/pokemon/`;

    const config = {
      params: {
        offset,
        limit,
      },
    };

    if (nextUrl) {
      url = nextUrl;
    }

    const response = await axios.get(url, config);

    // get front_default image from sprites
    const resultWithSprite = response.data.results.map(({ name, url }) => {
      const id = url.slice(url.length - 2, -1);
      const sprite = `${SPRITES_BASE_URL}/pokemon/${id}.png`;

      return { name, url, sprite };
    });

    return {
      ...response.data,
      results: resultWithSprite,
    };
  } catch (error) {
    return error.response;
  }
}

export default fetchPokemonList;
