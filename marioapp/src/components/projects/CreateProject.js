import React, { useState } from "react";
import { createProject } from "../../store/actions/projectActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const CreateProject = ({ createProject, auth, history }) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    createProject(formData, history);
  };
  const { title, content } = formData;
  if (!auth.uid) return <Redirect to="/signin" />;
  return (
    <div className="container">
      <form className="white" onSubmit={(e) => onSubmit(e)}>
        <h5 className="grey-text text-darken-3">Create a New Project</h5>
        <div className="input-field">
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="title">Project Title</label>
        </div>
        <div className="input-field">
          <textarea
            id="content"
            name="content"
            className="materialize-textarea"
            value={content}
            onChange={(e) => onChange(e)}
          ></textarea>
          <label htmlFor="content">Project Content</label>
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1">Create</button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
});

export default connect(mapStateToProps, { createProject })(CreateProject);
