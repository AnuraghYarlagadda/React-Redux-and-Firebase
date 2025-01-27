import React from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";

const Dashboard = ({ projects, auth }) => {
  if (!auth.uid) return <Redirect to="/signin" />;
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectList projects={projects} />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  projects: state.firestore.ordered.projects,
  auth: state.firebase.auth,
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(Dashboard);
