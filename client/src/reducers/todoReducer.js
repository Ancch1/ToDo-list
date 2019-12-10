import { ADD_TODO } from "../actions/types";

const initialState = {
  todos: []
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos]
      };
    default:
      return state;
  }
};

export default todoReducer;
