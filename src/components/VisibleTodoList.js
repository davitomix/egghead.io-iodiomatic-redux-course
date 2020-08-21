import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { toggleTodo } from "../actions/index";
import { getVisibleTodos } from "../reducers/index";
import TodoList from "../components/TodoList";

const mapStateToProps = (state, { match }) => ({
  todos: getVisibleTodos(state, match.params.filter || "all"),
});

// const mapDispatchToProps = (dispatch) => ({
//   onTodoClick(id) {
//     dispatch(toggleTodo(id));
//   },
// });

export const VisibleTodoList = withRouter(
  connect(mapStateToProps, { onTodoClick: toggleTodo })(TodoList)
);

export default VisibleTodoList;
