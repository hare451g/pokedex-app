import { createStore } from 'easy-peasy';

// models
import pokemon from './models/pokemon';
import types from './models/types';

const storeModel = {
  pokemon,
  types,
};

const store = createStore(storeModel);

export default store;
