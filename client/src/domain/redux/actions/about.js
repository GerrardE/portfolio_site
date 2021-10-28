import { apiService } from "@infrastructure";

// GET ABOUT
const GET_ABOUT_LOADING = "GET_ABOUT_LOADING";
const GET_ABOUT_SUCCESS = "GET_ABOUT_SUCCESS";
const GET_ABOUT_FAIL = "GET_ABOUT_FAIL";

function about_loading_object(loading) {
  return {
    type: GET_ABOUT_LOADING,
    payload: loading,
  };
}

function about_object(about) {
  return {
    type: GET_ABOUT_SUCCESS,
    payload: about,
  };
}

function about_error_object(message) {
  return {
    type: GET_ABOUT_FAIL,
    payload: message,
  };
}

const get_about = () => async (dispatch) => {
  dispatch(about_loading_object(true));
  try {
    const res = await apiService.getResource('about');
    dispatch(about_object(res.data));
    dispatch(about_loading_object(false));
  } catch (error) {
    dispatch(about_error_object(error.message));
    dispatch(about_loading_object(false));
  }
};

export { get_about, GET_ABOUT_LOADING, GET_ABOUT_FAIL, GET_ABOUT_SUCCESS };
