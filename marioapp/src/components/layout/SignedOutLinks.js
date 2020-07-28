import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const SignedOutLinks = (props) => {
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/signup">SignUp</NavLink>
        </li>
        <li>
          <NavLink to="/signin">LogIn</NavLink>
        </li>
      </ul>
    </div>
  );
};

SignedOutLinks.propTypes = {};

export default SignedOutLinks;
