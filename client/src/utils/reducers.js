import { useReducer } from "react";
import {
  SAVE_TRAIL,
  REMOVE_TRAIL,
  UPDATE_USER,

} from "./actions";


export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        user: [...action.trails],
      };

    case SAVE_TRAIL:
      return {
        ...state,
        trails: [...action.trail],
      };

    case REMOVE_TRAIL:
      let newState = state.user.filter((trail) => {
        return trail._id !== action._id;
      })
      return {
        ...state,
        trail: newState
      };
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}

