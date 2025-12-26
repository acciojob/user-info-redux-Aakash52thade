import { createStore } from 'redux';
import userReducer from './reducer';

// Note: createStore might show as deprecated in editors, 
// but it is required for this specific 'Standard Redux' project structure.
const store = createStore(
  userReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Optional: For DevTools
);

export default store;