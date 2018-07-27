import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchListings } from "../actions";

class MarketPlace extends Component {
  componentDidMount() {
    this.props.fetchListings();
  }

  renderListings() {
  
    let copyMon = [...this.props.listings]
   
    copyMon = copyMon.sort((a,b)=> {
      return b.pokemonName < a.pokemonName
    })

    return copyMon.map(listing => {
      return (
        <div
          className="column is-half card "
          key={listing._id}
          style={styles.cardStyle}
        >
          <div className="card-content" style={styles.contentStyle}>
            <p >Owner: {listing.pokemonOwner}</p>

            <p >Pokemon: {listing.pokemonName}</p>

            <p>
              Date Listed: {new Date(listing.datePosted).toLocaleDateString()}
            </p>
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

        <div className="field" style={{ paddingBottom: "20px" }}>
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
  cardStyle: {
    backgroundColor: '#209CEE',
    color: 'white' 
  },
  // contentStyle: {
  //   color: 'white'
  // },
  listingsStyle: {
    display: "flex",
    flexWrap: 'wrap',
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
