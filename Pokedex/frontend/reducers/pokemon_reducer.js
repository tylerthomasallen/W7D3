import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

export const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      let newState = Object.assign({}, state, action.pokemon);
      return newState;
    default:
      return state;
  }
};
