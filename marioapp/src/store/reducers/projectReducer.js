import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from "../types";

const initialState = {
  projects: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_PROJECT:
      return {
        ...state,
        projects: [...state.projects, payload],
      };
    case CREATE_PROJECT_ERROR:
      return { ...state };
    default:
      return state;
  }
}
