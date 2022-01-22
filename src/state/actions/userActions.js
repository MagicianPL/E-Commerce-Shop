import {
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAILED,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAILED,
  USER_REGISTER_FAILED,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_SIGN_IN_FAILED,
  USER_SIGN_IN_REQUEST,
  USER_SIGN_IN_SUCCESS,
  USER_SIGN_OUT,
} from "../constants/userConstants";

export const register = (name, email, password) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST });
  try {
    const response = await fetch("http://localhost:5000/api/users/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const data = await response.json();
    if (response.status !== 200) {
      console.log(data);
      dispatch({ type: USER_REGISTER_FAILED, payload: data.error });
      return;
    }

    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
  } catch (err) {
    console.log(err);
    dispatch({
      type: USER_REGISTER_FAILED,
      payload: "Sorry, something gone wrong",
    });
  }
};

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
    const data = await response.json();

    if (response.status !== 200) {
      dispatch({ type: USER_SIGN_IN_FAILED, payload: data.error });
      return;
    }

    console.log(data);
    localStorage.setItem("userInfo", JSON.stringify(data));
    dispatch({ type: USER_SIGN_IN_SUCCESS, payload: data });
  } catch (err) {
    console.log(err);
    dispatch({
      type: USER_SIGN_IN_FAILED,
      payload: "Sorry, something gone wrong",
    });
  }
};

export const signout = () => (dispatch) => {
  localStorage.removeItem("cartItems");
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_SIGN_OUT });
};

export const getDetails = (id) => async (dispatch, getState) => {
  const token = getState().user.userInfo.token;
  dispatch({ type: USER_DETAILS_REQUEST });

  try {
    const res = await fetch(`http://localhost:5000/api/users/${id}`, {
      headers: { authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    if (res.ok) {
      dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
    } else {
      dispatch({ type: USER_DETAILS_FAILED, payload: data });
    }
  } catch (err) {
    dispatch({ type: USER_DETAILS_FAILED, payload: err.message });
  }
};

export const updateUser =
  (id, name, email, password) => async (dispatch, getState) => {
    const token = getState().user.userInfo.token;
    dispatch({ type: USER_UPDATE_REQUEST });

    try {
      const res = await fetch(`http://localhost:5000/api/users/update/${id}`, {
        method: "PUT",
        headers: {
          authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
        dispatch({ type: USER_SIGN_IN_SUCCESS, payload: data });
        localStorage.setItem("userInfo", JSON.stringify(data));
      } else {
        dispatch({ type: USER_UPDATE_FAILED, payload: data.message });
      }
    } catch (err) {
      dispatch({ type: USER_UPDATE_FAILED, payload: err.message });
    }
  };
