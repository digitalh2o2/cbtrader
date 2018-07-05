import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  renderUserOptions() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/discord">Log In With Discord</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  }
  render() {
    console.log("thiiiis", this.props);
    return (
      <div>
        Hi There~
        <Link to={this.props.auth ? "/tradingmarket" : "/"}>BT</Link>
        <ul>{this.renderUserOptions()}</ul>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
