import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllPokemon } from './util/api/api_util';
import { receiveAllPokemon } from './actions/pokemon_actions';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});
