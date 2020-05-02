import { createStore } from 'easy-peasy';

// models
import pokemon from './models/pokemon';

const storeModel = {
  pokemon,
};

const store = createStore(storeModel);

export default store;
