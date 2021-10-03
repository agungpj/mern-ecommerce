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
  orderListMyReducer,
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
  orderListMy: orderListMyReducer,
});

export default rootReducer;
