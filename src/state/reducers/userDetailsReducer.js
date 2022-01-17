import {
  USER_DETAILS_FAILED,
  USER_DETAILS_REQUEST,
  USER_DETAILS_RESET,
  USER_DETAILS_SUCCESS,
} from "../constants/userConstants";

const userDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { loading: true };
    case USER_DETAILS_SUCCESS:
      return { loading: false, details: action.payload };
    case USER_DETAILS_FAILED:
      return { loading: false, error: action.payload };
    case USER_DETAILS_RESET:
      return {};
    default:
      return state;
  }
};

export default userDetailsReducer;
