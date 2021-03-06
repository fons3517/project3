import { useReducer } from "react";
import {
  SAVE_TRAIL,
  REMOVE_TRAIL,
  ADD_HIKE,
} from "./actions";


export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_HIKE:
      return {
        ...state,
        user: [...action.trails],
      };


    case SAVE_TRAIL:
      return {
        ...state,
        trails: [...action.trails],
      };

    case REMOVE_TRAIL:
      let newState = state.user.filter((trail) => {
        return trail._id !== action._id;
      })
      return {
        ...state,
        trails: newState
      };
    default:
      return state;
  };
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}

