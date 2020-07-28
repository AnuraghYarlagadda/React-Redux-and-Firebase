import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from "../types";

export const signIn = (credentials) => async (
  dispatch,
  getState,
  { getFirestore, getFirebase }
) => {
  const { email, password } = credentials;
  const firebase = getFirebase();
  try {
    const res = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    console.log(res);
    dispatch({ type: LOGIN_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGIN_ERROR, payload: error });
  }
};

export const signOut = () => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  try {
    await firebase.auth().signOut();
    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL });
  }
};

export const signUp = (newUser) => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const fireStore = getFirestore();

  try {
    var res = await firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password);
    res = await fireStore
      .collection("users")
      .doc(res.user.uid)
      .set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0] + newUser.lastName[0],
      });
    dispatch({ type: SIGNUP_SUCCESS, payload: res });
  } catch (error) {
    console.log(error);
    dispatch({ type: SIGNUP_FAIL, payload: error });
  }
};
