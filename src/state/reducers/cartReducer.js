import { ADD_TO_CART } from "../constants/cardConstants";

const cartReducer = (state = { cart: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const existItem = state.cart.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          cart: state.cart.map((x) => (x.product === item.product ? item : x)),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, item],
        };
      }

    default:
      return state;
  }
};

export default cartReducer;
