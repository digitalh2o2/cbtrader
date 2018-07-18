import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import Marketplace from "./Marketplace";
import NewListing from "./NewListing";
import PrivateRoute from "./PrivateRoute";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    console.log("this props foo", this.props);

    return (
      <div className="container">
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Landing} />
              <PrivateRoute path="/marketplace" component={Marketplace} />
              <PrivateRoute path="/new" component={NewListing} />
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
