import { combineReducers } from "redux";
import todos from "./todos";
// --------------------------> Reducers

export const todoApp = combineReducers({
  todos,
});

export default todoApp;
