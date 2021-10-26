import { apiService } from "@infrastructure";

// POST CLAP
const POST_CLAP_LOADING = "POST_CLAP_LOADING";
const POST_CLAP_SUCCESS = "POST_CLAP_SUCCESS";
const POST_CLAP_FAIL = "POST_CLAP_FAIL";

function clap_loading_object(payload) {
  return {
    type: POST_CLAP_LOADING,
    payload,
  };
}

function clap_error_object(payload) {
  return {
    type: POST_CLAP_FAIL,
    payload,
  };
}

function clap_object(payload) {
  return {
    type: POST_CLAP_SUCCESS,
    payload,
  };
}

const post_clap = (data) => async (dispatch) => {
  dispatch(clap_loading_object(true));
  try {
    const res = await apiService.postResource("/postclaps", data);
    dispatch(clap_object(res.data));
    dispatch(clap_loading_object(false));
    dispatch(get_clap_count())
  } catch (error) {
    dispatch(clap_error_object(error.message));
    dispatch(clap_loading_object(false));
  }
};

// GET CLAP
const GET_CLAP_COUNT_SUCCESS = "GET_CLAP_COUNT_SUCCESS";
const GET_CLAP_COUNT_FAIL = "GET_CLAP_COUNT_FAIL";

function clap_count_error_object(payload) {
  return {
    type: GET_CLAP_COUNT_FAIL,
    payload,
  };
}

function clap_count_object(payload) {
  return {
    type: GET_CLAP_COUNT_SUCCESS,
    payload,
  };
}

const get_clap_count = () => async (dispatch) => {
  dispatch(clap_loading_object(true));
  try {
    const res = await apiService.getResource("/postclaps/count");
    dispatch(clap_count_object(res.data));
    dispatch(clap_loading_object(false));
  } catch (error) {
    dispatch(clap_count_error_object(error.message));
    dispatch(clap_loading_object(false));
  }
};

export {
  post_clap,
  get_clap_count,
  POST_CLAP_LOADING,
  POST_CLAP_FAIL,
  POST_CLAP_SUCCESS,
  GET_CLAP_COUNT_FAIL,
  GET_CLAP_COUNT_SUCCESS,
};
