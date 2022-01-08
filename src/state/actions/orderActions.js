import { EMPTY_CART } from "../constants/cartConstants";
import {
  CREATE_ORDER_FAILED,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
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

    dispatch({ type: CREATE_ORDER_SUCCESS, payload: data.order });
    dispatch({ type: EMPTY_CART });
    localStorage.removeItem("cartItems");
  } catch (err) {
    dispatch({ type: CREATE_ORDER_FAILED, payload: err.message });
  }
};
