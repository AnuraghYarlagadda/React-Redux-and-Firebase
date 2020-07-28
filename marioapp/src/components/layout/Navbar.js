import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const Navbar = ({ firebase: { auth } }) => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          MarioPlan
        </Link>
        {auth.uid ? <SignedInLinks /> : <SignedOutLinks />}
      </div>
    </nav>
  );
};

Navbar.propTypes = {};

const mapStateToProps = (state) => ({
  firebase: state.firebase,
});

export default connect(mapStateToProps, {})(Navbar);
