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
        return [
          <li key="1">
            <a href="/marketplace">Marketplace</a>
          </li>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  mobileMenu = () => {
    let toggle = document.querySelector(".nav-toggle");
    toggle.classList.toggle("is-active");
  };

  render() {
    console.log("thiiiis", this.props);
    return (
      <nav className="navbar is-dark" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link to={this.props.auth ? "/marketplace" : "/"}>BT</Link>
          </div>

          <span
            className="navbar-burger burger"
            data-target="navMenu"
            onClick={this.mobileMenu}
          >
            <span />
            <span />
            <span />
          </span>
        </div>
        <div className="navbar-menu nav-toggle">
          <div className="navbar-end">
            <div className="navbar-item is-active">
              <ul>{this.renderUserOptions()}</ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
