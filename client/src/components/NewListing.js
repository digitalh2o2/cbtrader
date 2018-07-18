import React, { Component } from "react";

class NewListing extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="has-text-centered">
          <h1 className="title">List Your Pokemon</h1>
        </div>
        <br />
        <div style={styles.formStyle}>
          <form className="box">
            <div className="field">
              <div className="control">
                <label className="label">Pokemon Name</label>

                <input
                  className="input"
                  placeholder="Enter Pokemon Name"
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
                  id="location"
                  required
                />
              </div>
            </div>
            <button type="submit" className="button is-danger">
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

export default NewListing;
