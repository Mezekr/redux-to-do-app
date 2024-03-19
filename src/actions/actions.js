import * as actions from "../actionTypes/actionTypes";

export const addTodo = (task) => ({
  return {
    type: actions.ADD_TODO,  
    payload: { task },
  };
});
