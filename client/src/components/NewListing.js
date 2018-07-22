import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class NewListing extends Component {
  state = {
    name: "",
    level: "",
    location: ""
  };

  updateMon = e => {
    this.setState({
      [e.target.id]: e.target.value
    });

    console.log("the state is", this.state);
  };

  onSubmit = e => {
    e.preventDefault();
    const { name, level, location } = this.state;

    let listing = {
      name,
      level,
      location
    };

    this.props.submitListing(listing);
  };
  render() {
    console.log("inside the listing", this.props);
    return (
      <div>
        <div className="has-text-centered">
          <h1 className="title">List Your Pokemon</h1>
        </div>
        <br />
        <div style={styles.formStyle}>
          <form className="box" onSubmit={this.onSubmit}>
            <div className="field">
              <div className="control">
                <label className="label">Pokemon Name</label>

                <input
                  className="input"
                  placeholder="Enter Pokemon Name"
                  onChange={this.updateMon}
                  id="name"
                  required
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <label className="label">Pokemon Level</label>

                <input
                  className="input"
                  placeholder="Enter Pokemon Level"
                  onChange={this.updateMon}
                  id="level"
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <label className="label">Pokemon Location</label>

                <input
                  className="input"
                  placeholder="Enter Pokemon Location"
                  onChange={this.updateMon}
                  id="location"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="button is-danger"
              onSubmit={this.onSubmit}
            >
              <span className="icon is-small">
                <i className="fas fa-check" />
              </span>
              <span>Save</span>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const styles = {
  formStyle: {
    display: "flex",
    justifyContent: "center",
    width: "100%"
  }
};

export default connect(
  null,
  actions
)(NewListing);
