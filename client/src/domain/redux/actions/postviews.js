import { apiService } from "@infrastructure";

// POST CLAP
const POST_VIEW_LOADING = "POST_VIEW_LOADING";
const POST_VIEW_SUCCESS = "POST_VIEW_SUCCESS";
const POST_VIEW_FAIL = "POST_VIEW_FAIL";

function view_loading_object(payload) {
  return {
    type: POST_VIEW_LOADING,
    payload,
  };
}

function view_error_object(payload) {
  return {
    type: POST_VIEW_FAIL,
    payload,
  };
}

function view_object(payload) {
  return {
    type: POST_VIEW_SUCCESS,
    payload,
  };
}

const post_view = (data) => async (dispatch) => {
  dispatch(view_loading_object(true));
  try {
    const res = await apiService.postResource("/postviews", data);
    dispatch(view_object(res.data));
    dispatch(view_loading_object(false));
    dispatch(get_view_count())
  } catch (error) {
    dispatch(view_error_object(error.message));
    dispatch(view_loading_object(false));
  }
};

// GET VIEW COUNT
const GET_VIEW_COUNT_SUCCESS = "GET_VIEW_COUNT_SUCCESS";
const GET_VIEW_COUNT_FAIL = "GET_VIEW_COUNT_FAIL";

function view_count_error_object(payload) {
  return {
    type: GET_VIEW_COUNT_FAIL,
    payload,
  };
}

function view_count_object(payload) {
  return {
    type: GET_VIEW_COUNT_SUCCESS,
    payload,
  };
}

const get_view_count = () => async (dispatch) => {
  dispatch(view_loading_object(true));
  try {
    const res = await apiService.getResource("/postviews/count");
    dispatch(view_count_object(res.data));
    dispatch(view_loading_object(false));
  } catch (error) {
    dispatch(view_count_error_object(error.message));
    dispatch(view_loading_object(false));
  }
};

export {
  post_view,
  get_view_count,
  POST_VIEW_LOADING,
  POST_VIEW_FAIL,
  POST_VIEW_SUCCESS,
  GET_VIEW_COUNT_FAIL,
  GET_VIEW_COUNT_SUCCESS
};
