import { addTodo, editTodo, rmTodo, toggleTodo } from "./feed.types";

export const todoReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case addTodo: {
      return {
        ...state,
        todos: action.payload,
      };
    }

    case rmTodo: {
      return {
        ...state,
        todos: action.payload,
      };
    }

    case editTodo: {
      return {
        ...state,
        todos: action.payload,
      };
    }

    case toggleTodo: {
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
};
