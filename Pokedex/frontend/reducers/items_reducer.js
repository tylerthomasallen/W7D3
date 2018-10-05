import { RECEIVE_POKEMON } from '../actions/pokemon_actions';

export const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POKEMON:
    debugger
      let newState = Object.assign({}, state, action.payload.items);
      return newState;
    default:
      return state;
  }
};
