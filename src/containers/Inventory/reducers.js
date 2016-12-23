import { SELECT_POKEMON, UPDATE_INVENTORY, REMOVE_POKEMON } from './constants';
import pokemons from '../../data/pokemons.json';

// Fetch the mock up pokemons data
let currentId = 10;
const initialInventory = pokemons;

/**
 * Manage add/update/delete inventory operations
 */
function inventoryReducer(state = initialInventory, { type, payload }) {
  switch (type) {
    case UPDATE_INVENTORY:
      const indexInInventory = state.findIndex(pokemon => pokemon.id === payload.id);
      if (indexInInventory !== -1) {
        return [...state.slice(0, indexInInventory), payload, ...state.slice(indexInInventory + 1)];
      } else {
        payload.id = ++currentId;
        return [ ...state, payload];
      }
    case REMOVE_POKEMON:
      const removedIndex = state.findIndex(pokemon => pokemon.id === payload.id);
      return [...state.slice(0, removedIndex), ...state.slice(removedIndex + 1)];
    default:
      return state;
  }
}

const initialModal = {
  mode: null,
  isOpen: false,
  activePokemon: null
};

/**
 * Manage open/close a modal for adding/editing a pokemon
 */
function modalReducer(state = initialModal, { type, payload }) {
  switch (type) {
    case SELECT_POKEMON:
      return {
        mode: payload.mode,
        isOpen: payload.isOpen,
        activePokemon: payload.activePokemon
      };
    default:
      return state;
  }
}

export { inventoryReducer, modalReducer };
