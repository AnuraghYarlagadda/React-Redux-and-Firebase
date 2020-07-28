import React, { useState } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

const SignIn = ({ auth, authError, signIn }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(formData);
  };
  if (auth.uid) return <Redirect to="/" />;
  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={handleChange}
              name="email"
              value={email}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">LogIn</button>
            <div className="red-text text-center">
              {authError && <p>{authError.message}</p>}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  authError: state.auth.authError,
  auth: state.firebase.auth,
});

export default connect(mapStateToProps, { signIn })(SignIn);
