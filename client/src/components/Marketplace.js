import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class MarketPlace extends Component {
  componentDidMount() {
    this.props.fetchListings()
  }

  render() {
    console.log("market", this.props);
    return (
      <div>
        <div className="has-text-centered">
          <h1 className="title ">Welcome to the marketplace!</h1>
          <p>Search for pokemon to trade for!</p>
        </div>

        <div className="field">
          <div className="control has-text-centered">
            <input
              className="input is-info"
              placeholder="Search for pokemon"
              style={{ width: "50%" }}
            />{" "}
            <button className="button is-danger">
              <span className="icon is-small">
                <i className="fas fa-search" />
              </span>
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ listings }) {
  return { listings };
}

export default connect(
  mapStateToProps,
  actions
)(MarketPlace);
