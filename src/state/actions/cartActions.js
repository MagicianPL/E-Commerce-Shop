import {
  ADD_TO_CART,
  DELETE_CART_ITEM,
  SAVE_PAYMENT_METHOD,
  SAVE_SHIPPING_ADDRESS,
} from "../constants/cartConstants";

export const addToCart = (productId, qty) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/api/products/${productId}`);
    const data = await res.json();
    dispatch({
      type: ADD_TO_CART,
      payload: {
        ...data,
        product: data._id,
        qty,
      },
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cart));
  };
};

export const deleteCartItem = (id) => (dispatch, getState) => {
  dispatch({
    type: DELETE_CART_ITEM,
    payload: id,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cart));
};

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: SAVE_SHIPPING_ADDRESS, payload: data });
};

export const savePayment = (payment) => (dispatch) => {
  dispatch({ type: SAVE_PAYMENT_METHOD, payload: payment });
};
