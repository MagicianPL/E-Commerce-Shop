import {
  USER_SIGN_IN_FAILED,
  USER_SIGN_IN_REQUEST,
  USER_SIGN_IN_SUCCESS,
  USER_SIGN_OUT,
} from "../constants/userConstants";

export const signIn = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGN_IN_REQUEST });
  try {
    const response = await fetch("http://localhost:5000/api/users/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (response.status !== 200) {
      dispatch({ type: USER_SIGN_IN_FAILED });
      return;
    }
    const data = await response.json();
    console.log(data);
    localStorage.setItem("userInfo", JSON.stringify(data));
    dispatch({ type: USER_SIGN_IN_SUCCESS, payload: data });
  } catch (err) {
    console.log(err);
    dispatch({ type: USER_SIGN_IN_FAILED });
  }
};

export const signout = () => (dispatch) => {
  localStorage.removeItem("cartItems");
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_SIGN_OUT });
};
