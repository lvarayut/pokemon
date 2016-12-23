import {
  SELECT_POKEMON,
  UPDATE_INVENTORY,
  REMOVE_POKEMON
} from './constants';

/**
 * Control open/close an adding/editing pokemon modal
 * @param pokemonId
 */
function toggleModal(pokemonId) {
  return {
    type: SELECT_POKEMON,
    payload: pokemonId
  };
}

/**
 * Update or Add a pokemon
 * @param pokemon
 */
function updateInventory(pokemon) {
  return {
    type: UPDATE_INVENTORY,
    payload: pokemon
  }
}

/**
 * Remove a pokemon
 * @param pokemon
 */
function removePokemon(pokemon) {
  return {
    type: REMOVE_POKEMON,
    payload: pokemon
  }
}

export { toggleModal, updateInventory, removePokemon };
