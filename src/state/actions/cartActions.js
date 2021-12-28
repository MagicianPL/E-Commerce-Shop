import { ADD_TO_CART } from "../constants/cardConstants";

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
  };
};
