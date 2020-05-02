import axios from 'axios';
import { thunk } from 'easy-peasy';

import { BASE_URL } from '../../../constants/pokeapi';
import { transformResult } from './utils';

const thunks = {
  fetchTypeById: thunk(async (actions, payload = {}) => {
    try {
      actions.startFetch();
      let url = `${BASE_URL}/type`;

      if (payload.id) {
        url = `${url}/${payload.id}/`;
      } else if (payload.name) {
        url = `${url}/${payload.name}/`;
      } else {
        throw new Error('Name or Id is required to fetch single type');
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

  fetchTypeList: thunk(async (actions, payload = {}) => {
    try {
      actions.startFetch();
      let url = `${BASE_URL}/type/`;

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
      const transformedResult = transformResult(response.data.results);

      actions.setResult({
        ...response.data,
        results: transformedResult,
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
