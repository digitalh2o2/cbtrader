import React, { Component } from "react";

class MarketPlace extends Component {
  state = {};
  render() {
    console.log("market", this.props);
    return (
      <div className="has-text-centered">
        <h1>Welcome to the marketplace!</h1>
      </div>
    );
  }
}

export default MarketPlace;
