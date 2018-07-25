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
          <li className="button is-warning navbar-item">
            <a href="/auth/discord">Log In With Discord</a>
          </li>
        );
      default:
        return [
          <li
            key="1"
            className=" button is-warning navbar-item"
            style={{ marginRight: "5px" }}
          >
            <a href="/marketplace">Marketplace</a>
          </li>,
          <li
            key="2"
            className=" button is-warning navbar-item"
            style={{ marginRight: "5px" }}
          >
            <a href="/new">New Listing</a>
          </li>,
          <li key="3" className="button is-warning navbar-item ">
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
      <nav className="navbar is-info" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-item">
            {this.props.auth ? (
              <a href="/marketplace">BT</a>
            ) : (
              <a href="https://discord.gg/VpZqQz8" target="_blank">
                BT
              </a>
            )}
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
            <div className="is-active">
              <ul style={{ display: "flex", padding: "5px" }}>
                {this.renderUserOptions()}
              </ul>
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
