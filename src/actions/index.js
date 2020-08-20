import { v4 } from 'node-uuid';

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  text: text,
  id: v4(),
});

export const setVisibilityFilter = (filter) =>  ({
  type: 'SET_VISIBILITY_FILTER',
  filter: filter
});

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
});

export default { addTodo, setVisibilityFilter, toggleTodo };