import * as actions from "../actionTypes/actionTypes";

export const addTodo = (task) => ({
  type: actions.ADD_TODO,
  payload: { task },
});
