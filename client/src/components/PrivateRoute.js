import React, { Component } from "react";
import { Redirect, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, auth: auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth === false || auth === null ? (
        <div className="has-text-centered">
          <p className="title">Please Log In!</p>
        </div>
      ) : (
        <Component {...props} />
      )
    }
  />
);

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(PrivateRoute);
