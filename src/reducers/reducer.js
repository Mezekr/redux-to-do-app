import * as actions from "../actionTypes/actionTypes";

console.log(actions.ADD_TODO);
export const reducer = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return [...state, { task: action.payload.task, complete: false }];
    default:
      return state;
  }
};
