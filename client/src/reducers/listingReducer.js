import { SUBMIT_LISTING } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case SUBMIT_LISTING:
      return action;
    default:
      return state;
  }
}
