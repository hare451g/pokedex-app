import { action } from 'easy-peasy';

const actions = {
  startFetch: action((state, payload) => {
    state.isLoading = true;
    state.error = null;
  }),

  stopFetch: action((state, payload) => {
    state.isLoading = false;
  }),

  setError: action((state, payload) => {
    state.error = payload;
  }),

  setResult: action((state, payload) => {
    state.count = payload.count;
    state.next = payload.next;
    state.previous = payload.previous;
    state.results = [...state.results, ...payload.results];
    state.error = null;
  }),
};

export default actions;
