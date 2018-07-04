import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        Hi There~
        <a href="/auth/discord">Log In with discord</a>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
