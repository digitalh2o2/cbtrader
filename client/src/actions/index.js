import { FETCH_USER, SUBMIT_LISTING, FETCH_LISTINGS } from "./types";
import axios from "axios";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");

  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

export const submitListing = (listing, history) => async dispatch => {
  console.log("ok ok ok", listing);

  const res = await axios.post("/api/listing", listing);

  history.push("/marketplace");
  dispatch({
    type: SUBMIT_LISTING
  });
};

export const fetchListings = () => async dispatch => {
  const res = await axios.get("/api/listings");
  console.log("inside fetch", res);
  dispatch({
    type: FETCH_LISTINGS,
    payload: res.data
  });
};
