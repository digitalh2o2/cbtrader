import { SUBMIT_LISTING, FETCH_LISTINGS } from "../actions/types";

export default function(state = [], action) {
  console.log('inside the listings', action)
  switch (action.type) {
    case SUBMIT_LISTING:
      return state;
    case FETCH_LISTINGS:
      return action.payload;
    default:
      return state;
  }
}
