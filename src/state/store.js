import { compose, applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./reducers/cartReducer";
import productDetailsReducer from "./reducers/productDetailsReducer";
import productListReducer from "./reducers/productListReducer";
import { userSignInReducer } from "./reducers/userSignInReducer";
import { userRegisterReducer } from "./reducers/userRegisterReducer";
import createOrderReducer from "./reducers/createOrderReducer";
import getOrderReducer from "./reducers/getOrderReducer";

const initialState = {
  cart: {
    cart: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    address: {},
  },
  user: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  user: userSignInReducer,
  userRegisterReducer,
  createOrder: createOrderReducer,
  getOrderReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
