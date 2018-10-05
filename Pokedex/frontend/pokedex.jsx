import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllPokemon, fetchPokemon } from './util/api/api_util';
import { receiveAllPokemon, requestAllPokemon, requestSinglePokemon } from './actions/pokemon_actions';
import configureStore from './store/store';
import { selectAllPokemon } from './reducers/selectors';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.receiveAllPokemon = receiveAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.selectAllPokemon = selectAllPokemon;
  window.requestSinglePokemon = requestSinglePokemon;


  ReactDOM.render(<Root store={store}/>, rootEl);
});
