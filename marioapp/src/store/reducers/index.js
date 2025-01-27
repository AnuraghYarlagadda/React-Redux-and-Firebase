import { combineReducers } from "redux";
import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

export default combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});
