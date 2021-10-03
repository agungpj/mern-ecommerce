import axios from "axios";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: "PRODUCT_LIST_REQUEST",
    });

    const { data } = await axios.get("/api/products");

    dispatch({
      type: "PRODUCT_LIST_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "PRODUCT_LIST_FAIL",
      payload: error.response.data?.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const listProductsDetail = (id) => async (dispatch) => {
  try {
    // dispatch berguna untuk memperbarui initial state.
    dispatch({ type: "PRODUCT_DETAIL_REQUEST" });
    // res.data
    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
      type: "PRODUCT_DETAIL_SUCCESS",
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: "PRODUCT_DETAIL_FAIL",
      payload: e.response.data?.message ? e.response.data.message : e.message,
    });
  }
};
