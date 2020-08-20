let nextTodoId = 0;
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  text: text,
  id: nextTodoId++
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