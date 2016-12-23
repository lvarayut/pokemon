import { combineReducers } from 'redux';
import { inventoryReducer, modalReducer }from './containers/Inventory/reducers' ;

// Combine all reducers
const rootReducer = combineReducers({
  inventories: inventoryReducer,
  modal: modalReducer
});

export default rootReducer;