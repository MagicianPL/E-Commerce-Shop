import { EMPTY_CART } from "../constants/cartConstants";
import {
  CREATE_ORDER_FAILED,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  PAY_ORDER_FAILED,
  PAY_ORDER_REQUEST,
  PAY_ORDER_SUCCESS,
} from "../constants/orderConstants";

export const createOrder = (order) => async (dispatch, getState) => {
  await dispatch({ type: CREATE_ORDER_REQUEST });

  try {
    const token = getState().user.userInfo.token;
    const res = await fetch("http://localhost:5000/api/orders", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(order),
    });
    const data = await res.json();
    if (!res.ok) {
      dispatch({ type: CREATE_ORDER_FAILED, payload: data.message });
      return;
    }
    dispatch({ type: CREATE_ORDER_SUCCESS, payload: data.order });
    dispatch({ type: EMPTY_CART });
    localStorage.removeItem("cartItems");
  } catch (err) {
    dispatch({ type: CREATE_ORDER_FAILED, payload: err.message });
  }
};

export const getSingleOrder = (id) => async (dispatch, getState) => {
  const userInfo = getState().user.userInfo;
  dispatch({ type: GET_ORDER_REQUEST });
  try {
    const res = await fetch(`http://localhost:5000/api/orders/${id}`, {
      headers: { authorization: `Bearer ${userInfo.token}` },
    });
    const data = await res.json();
    if (res.status !== 200) {
      dispatch({ type: GET_ORDER_FAILED, payload: data.message });
      return;
    }
    dispatch({ type: GET_ORDER_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_ORDER_FAILED, payload: err.message });
  }
};

export const payOrder = (id) => async (dispatch) => {
  dispatch({ type: PAY_ORDER_REQUEST });
  const res = await fetch(`http://localhost:5000/api/orders/pay/${id}`);
  const data = await res.json();
  if (!res.ok) {
    dispatch({ type: PAY_ORDER_FAILED, payload: data });
    return;
  }
  dispatch({ type: PAY_ORDER_SUCCESS });
};
