import {
  USER_SIGN_IN_FAILED,
  USER_SIGN_IN_REQUEST,
  USER_SIGN_IN_SUCCESS,
  USER_SIGN_OUT,
} from "../constants/userConstants";

export const userSignInReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGN_IN_REQUEST:
      return { loading: true };
    case USER_SIGN_IN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_SIGN_IN_FAILED:
      return { loading: false, error: "Sorry, something gone wrong" };
    case USER_SIGN_OUT:
      return {};
    default:
      return state;
  }
};
