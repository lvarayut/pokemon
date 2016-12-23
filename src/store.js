import reducer from './reducers';
import { createStore } from 'redux';

// Create a Redux store and enable Redux devtools in development environment
export default (initialState = {}) => {
  if (process.env.NODE_ENV === 'development') {
    return createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  } else {
    return createStore(reducer);
  }
};
