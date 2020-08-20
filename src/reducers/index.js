import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter';
import todos from './todos';
// --------------------------> Reducers  

export const todoApp = combineReducers({
  todos,
  visibilityFilter
});

export default todoApp;