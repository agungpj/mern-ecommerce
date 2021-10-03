import { combineReducers } from "redux";
import { productsReducer, productDetailReducer } from "./productsReducer";
import { cartReducer } from "./cartReducer";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
} from "./userReducer";
import {
  orderCreateReducer,
  orderDetailReducer,
  orderPayReducer,
} from "./orderReducer";

const rootReducer = combineReducers({
  productList: productsReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailReducer,
  orderPay: orderPayReducer,
});

export default rootReducer;
