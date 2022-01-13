import {
  GET_ORDER_FAILED,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
} from "../constants/orderConstants";

const getOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ORDER_REQUEST:
      return { loading: true };
    case GET_ORDER_SUCCESS:
      return { loading: false, order: action.payload };
    case GET_ORDER_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default getOrderReducer;
