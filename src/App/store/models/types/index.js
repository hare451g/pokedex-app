import actions from './actions';
import thunks from './thunks';
import { initialState } from './constants';

const types = {
  // states
  ...initialState,

  // actions
  ...actions,

  // thunks
  ...thunks,
};

export default types;
