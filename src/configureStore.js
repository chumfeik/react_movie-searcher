import { createStore } from 'redux';
import reducers from './reducers';
import { loadState, saveState } from './localStorage';

const presistedState = loadState();

export const store = createStore(reducers, presistedState);

store.subscribe(() => {
  saveState(store.getState());
});
