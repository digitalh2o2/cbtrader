import { FETCH_USER, SUBMIT_LISTING } from "./types";
import axios from "axios";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");

  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

export const submitListing = listing => async dispatch => {
  console.log("ok ok ok", listing);
  const res = await axios.post("/api/listing", listing);
  const data = await res

  dispatch({
    type: SUBMIT_LISTING,
    payload: res.data
  });
};
