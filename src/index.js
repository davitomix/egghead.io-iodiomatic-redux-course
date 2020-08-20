import './index.css';
import * as serviceWorker from './serviceWorker';

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { addTodo, toggleTodo } from './actions';
import { createStore, combineReducers } from 'redux'
import visibilityFilter from './reducers/visibilityFilter';
import todos from './reducers/todos';
import FilterLink from './reducers/FilterLink';
import TodoList from './reducers/TodoList';

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink
      filter='SHOW_ALL'
    >
      All
    </FilterLink>
    {', '}
    <FilterLink
      filter='SHOW_ACTIVE'
    >
      Active
    </FilterLink>
    {', '}
    <FilterLink
      filter='SHOW_COMPLETED'
    >
      Completed
    </FilterLink>
  </p>
)

const getVisibleTodos = (
  todos,
  filter
) => {
switch (filter) {
  case 'SHOW_ALL':
    return todos;
  case 'SHOW_COMPLETED':
    return todos.filter(
      t => t.completed
    );
  case 'SHOW_ACTIVE':
    return todos.filter(
      t => !t.completed
    );
  default:
    return todos;
}
};
const mapStateToTodoListProps = (state) => ({
    todos: getVisibleTodos(
      state.todos,
      state.visibilityFilter
    )
});
const mapDispatchToTodoListProps = (dispatch) => ({
    onTodoClick(id) {
      dispatch(toggleTodo(id));
    }
});
const VisibleTodoList = connect(
  mapStateToTodoListProps,
  mapDispatchToTodoListProps
)(TodoList);

let AddTodo = ({ dispatch }) => {
  let input;
  
  return (
    <div>
      <input ref={ node => {
          input = node
        }}/>
        <button onClick={() => {
          dispatch(addTodo(input.value))
          input.value = '';
        }}>
        Add Todo
        </button>
    </div>
  );
};
AddTodo = connect()(AddTodo);

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

const persistance = {
  todos: [{
    id: '0',
    text: 'Welcome back!',
    completed: false,
  }],
};

const store = createStore(todoApp, persistance);
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
