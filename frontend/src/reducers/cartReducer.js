export const cartReducer = (
  state = { cartItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case "CART_ADD_ITEM":
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);
      // ngecek apakah id dari item sama id dari state cartItems, dipilih by action. jika benar maka item sudah ada.
      if (existItem) {
        // jika item udah ada, maka bakal replace dengan yang terbaru dari action.
        return {
          ...state,
          // kirim state yg ada.
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        // jika item tidak ada yg perlu di replace, maka kirim seluruh state, cartitems dan item terbaru.
        return {
          ...state,
          cartItems: [...state.cartItems, item],
          // jika item blm ada, maka kirim state yg skrg, dan item terbaru.
        };
      }

    case "CART_REMOVE_ITEM":
      return {
        ...state,
        // seluruh state yg ada
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
        //
      };
    case "CART_SAVE_SHIPPING_ADDRESS":
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case "CART_SAVE_PAYMENT_METHOD":
      return {
        ...state,
        paymentMethod: action.payload,
      };
    default:
      return state;
  }
};
