import React, { Component } from "react";

class Landing extends Component {
  state = {};
  render() {
    return (
      <section className="hero is-fullheight is-dark is-bold">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Welcome To BT</h1>
            <p>Please Log In To View the Marketplace.</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Landing;
