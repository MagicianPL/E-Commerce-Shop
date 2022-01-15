import {
  PAY_ORDER_FAILED,
  PAY_ORDER_REQUEST,
  PAY_ORDER_SUCCESS,
} from "../constants/orderConstants";

const payOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case PAY_ORDER_REQUEST:
      return { loading: true };
    case PAY_ORDER_SUCCESS:
      return { loading: false, success: true };
    case PAY_ORDER_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default payOrderReducer;
