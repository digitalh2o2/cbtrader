import React, { Component } from "react";

class MarketPlace extends Component {
  state = {};
  render() {
    console.log("market", this.props);
    return (
      <div>
        <h1 className="title has-text-centered">Welcome to the marketplace!</h1>
        <div className="field">
          <div className="control has-text-centered">
            <input className="input is-info" style={{width: '50%'}}/> <button className="button is-danger">Search</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MarketPlace;
