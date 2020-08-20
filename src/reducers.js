import { combineReducers } from 'redux'
import visibilityFilter from './reducers/visibilityFilter';
import todos from './reducers/todos';
// --------------------------> Reducers  

export const todoApp = combineReducers({
  todos,
  visibilityFilter
});

export default todoApp;