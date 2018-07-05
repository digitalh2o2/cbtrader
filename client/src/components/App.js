import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Landing} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
