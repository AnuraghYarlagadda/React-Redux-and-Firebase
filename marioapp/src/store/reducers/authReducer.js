import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from "../types";

const initialState = {
  authError: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_ERROR:
    case SIGNUP_FAIL:
    case LOGOUT_FAIL:
      return {
        ...state,
        authError: payload,
      };
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      return { ...state, authError: null };
    case LOGOUT_SUCCESS:
      return state;
    default:
      return state;
  }
}
