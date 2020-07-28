import React, { Fragment } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

const ProjectDetails = ({ project, auth }) => {
  if (!auth.uid) return <Redirect to="/signin" />;
  return (
    <Fragment>
      {project ? (
        <div>
          <div className="container section project-details">
            <div className="card z-depth-0">
              <div className="card-content">
                <span className="card-title">{project.title}</span>
                <p>{project.content}</p>
              </div>
              <div className="card-action gret grey-text lighten-4">
                <div>
                  Posted by {project.authorFirstname}
                  {project.authorLastname}
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container center">
          <p>Loading Project...</p>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
