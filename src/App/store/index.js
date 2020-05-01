import { createStore } from 'easy-peasy';

// models
import pokemon from './models/pokemon';
import pokemonList from './models/pokemonList';

const storeModel = {
  pokemon,
  pokemonList,
};

const store = createStore(storeModel);

export default store;
