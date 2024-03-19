import * as actions from "../actionTypes/actionTypes";

export const addTodo = (task) => ({
  type: actions.ADD_TODO,
  payload: { task },
});

export const toggleTodo = (id) => ({
  type: actions.TOGGLE_TODO,
  payload: { id },
});

export const deleteTodo = (id) => ({
  type: actions.DELETE_TODO,
  payload: { id },
});
