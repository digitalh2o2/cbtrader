import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchListings } from "../actions";

class MarketPlace extends Component {
  componentDidMount() {
    this.props.fetchListings();
  }

  renderListings() {
    console.log(this.props.listings);

    return this.props.listings.map(listing => {
      return (
        <div
          className="column is-quarter card"
          key={listing._id}
          style={{ marginRight: "15px" }}
        >
          <div className="card-content">
            <p className="subtitle is-6">Owner: {listing.pokemonOwner}</p>

            <p className="subtitle">Pokemon:</p>
            <p>{listing.pokemonName}</p>

            <p>Date Listed: {new Date(listing.datePosted).toLocaleDateString()}</p>
          </div>
        </div>
      );
    });
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

        <div className="columns is-multiline">{this.renderListings()}</div>
      </div>
    );
  }
}

const styles = {
  listingsStyle: {
    display: "flex",

    flexDirection: "row"
  }
};

function mapStateToProps({ listings }) {
  return { listings };
}

export default connect(
  mapStateToProps,
  { fetchListings }
)(MarketPlace);
