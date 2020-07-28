import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from "../types";

export const createProject = (project, history) => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const fireStore = getFirestore();
  const profile = getState().firebase.profile;
  const uid = getState().firebase.auth.uid;
  //make async call to database
  try {
    await fireStore.collection("projects").add({
      ...project,
      authorFirstname: profile.firstName,
      authorLastname: profile.lastName,
      authorId: uid,
      createdAt: new Date(),
    });
    dispatch({ type: CREATE_PROJECT, payload: project });
    history.replace("/");
  } catch (error) {
    dispatch({ type: CREATE_PROJECT_ERROR, payload: error });
  }
};
