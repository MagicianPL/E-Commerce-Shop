import {
  ADD_TO_CART,
  DELETE_CART_ITEM,
  EMPTY_CART,
  SAVE_PAYMENT_METHOD,
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

    case SAVE_PAYMENT_METHOD:
      return {
        ...state,
        payment: action.payload,
      };

    case EMPTY_CART:
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
