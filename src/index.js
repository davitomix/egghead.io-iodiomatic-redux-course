import './index.css';
import * as serviceWorker from './serviceWorker';
import './examples/extractingActionCreators.js'

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { addTodo } from './actions';
import { createStore } from 'redux'
import todoApp from './reducers/index'
import FilterLink from './reducers/FilterLink'
import VisibleTodoList from './reducers/VisibleTodoList'
// --------------------------> Components  

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

const store = createStore(todoApp);

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
