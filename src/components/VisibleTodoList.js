import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { toggleTodo } from "../actions/index";
import TodoList from "../components/TodoList";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "all":
      return todos;
    case "completed":
      return todos.filter((t) => t.completed);
    case "active":
      return todos.filter((t) => !t.completed);
    default:
      throw new Error(`Unknown filter: ${filter}.`);
  }
};

const mapStateToTodoProps = (state, { match }) => ({
  todos: getVisibleTodos(state.todos, match.params.filter || "all"),
});
const mapDispatchToTodoProps = (dispatch) => ({
  onTodoClick(id) {
    dispatch(toggleTodo(id));
  },
});
export const VisibleTodoList = withRouter(
  connect(mapStateToTodoProps, mapDispatchToTodoProps)(TodoList)
);

export default VisibleTodoList;
