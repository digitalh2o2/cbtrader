import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Autocomplete from "react-autocomplete";
import * as actions from "../actions";
import { getPokemon } from "../pokemon";

class NewListing extends Component {
  state = {
    name: "",
    level: "",
    location: ""
  };

  updateMon = (e, value) => {
  
    this.setState({
      [e.target.id]: e.target.value
    });

    console.log("the state is", this.state);
  };

  checkInput = pokemon => {
    if (getPokemon().some(({ name }) => name === pokemon)) {
      return true;
    } else {
      return false;
    }
  };

  onSubmit = e => {
    e.preventDefault();
    const { name, level, location } = this.state;

    if (this.checkInput(name)) {
      let listing = {
        name,
        level,
        location
      };

      this.props.submitListing(listing, this.props.history);
    } else {
      alert("Please select Pokemon from list");
    }
  };
  render() {
    console.log("inside the listing", this.props);
    return (
      <div>
        <div className="has-text-centered">
          <h1 className="title">List Your Pokemon</h1>
          <small>(that you want to trade)</small>
        </div>
        <br />
        <div style={styles.formStyle}>
          <form className="box" onSubmit={this.onSubmit}>
            <div className="field">
              <div className="control">
                <label className="label">Pokemon Name</label>

                <Autocomplete
                  getItemValue={item => item.name}
                  items={getPokemon()}
                  shouldItemRender={(item, value) =>
                    item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
                  }
                  renderItem={(item, isHighlighted) => (
                    <div
                      key={item.name}
                      style={{
                        background: isHighlighted ? "lightgray" : "white",
                        zIndex: 9999
                      }}
                    >
                      {item.name}
                    </div>
                  )}
                  id="name"
                  inputProps={{
                    className: "input",
                    placeholder: "Enter Pokemon",
                    required: true
                  }}
                  value={this.state.name}
                  onChange={(e, value) => this.setState({ name: value })}
                  onSelect={pokemon => this.setState({ name: pokemon })}
                  menuStyle={{
                    zIndex: "999"
                  }}
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
)(withRouter(NewListing));
