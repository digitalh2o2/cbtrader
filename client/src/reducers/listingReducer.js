import { SUBMIT_LISTING } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case SUBMIT_LISTING:
      return state;
    default:
      return state;
  }
}
