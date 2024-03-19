import * as actions from "../actionTypes/actionTypes";

export const reducer = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return [...state, { task: action.payload.task, complete: false }];
    case actions.TOGGLE_TODO:
      return state.map((todo, id) =>
        id === action.payload.id ? { ...todo, complete: !todo.complete } : todo,
      );
    case actions.DELETE_TODO:
      return state.filter((todo, id) => id !== action.payload.id);
    default:
      return state;
  }
};
