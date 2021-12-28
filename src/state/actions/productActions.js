import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";

export const listProducts = () => {
  return async (dispatch) => {
    dispatch({
      type: PRODUCT_LIST_REQUEST,
    });

    try {
      const res = await fetch("http://localhost:5000/api/products");
      const data = await res.json();
      await dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (err) {
      dispatch({ type: PRODUCT_LIST_FAIL, payload: err });
    }
  };
};
