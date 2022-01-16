import {
  GET_ORDERS_FAILED,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
} from "../constants/orderConstants";

const getOrdersReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ORDERS_REQUEST:
      return { loading: true };
    case GET_ORDERS_SUCCESS:
      return { loading: false, orders: action.payload };
    case GET_ORDERS_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default getOrdersReducer;
