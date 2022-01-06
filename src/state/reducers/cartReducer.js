import {
  ADD_TO_CART,
  DELETE_CART_ITEM,
  SAVE_SHIPPING_ADDRESS,
} from "../constants/cartConstants";

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

    case DELETE_CART_ITEM:
      const filteredArr = state.cart.filter(
        (i) => i.product !== action.payload
      );
      return {
        ...state,
        cart: filteredArr,
      };

    case SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
