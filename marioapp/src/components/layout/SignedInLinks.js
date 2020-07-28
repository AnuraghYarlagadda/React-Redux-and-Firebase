import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const SignedInLinks = ({ signOut, user }) => {
  console.log(user);
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/createProject">New Project</NavLink>
        </li>
        <li>
          <a onClick={signOut}>Logout</a>
        </li>
        <li>
          <NavLink to="/" className="btn btn-floating pink lighten-1">
            {user && user.initials}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

SignedInLinks.propTypes = {};

const mapStateToProps = (state) => {
  const users = state.firestore.data.users;
  const uid = state.firebase.auth.uid;
  const user = users ? users[uid] : null;
  return {
    user,
  };
};

export default compose(
  connect(mapStateToProps, { signOut }),
  firestoreConnect([{ collection: "users" }])
)(SignedInLinks);
