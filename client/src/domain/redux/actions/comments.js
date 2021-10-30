import { toast } from 'react-hot-toast';
import { apiService } from '@infrastructure';

// POST COMMENT
const POST_COMMENT_LOADING = 'POST_COMMENT_LOADING';
const POST_COMMENT_SUCCESS = 'POST_COMMENT_SUCCESS';
const POST_COMMENT_FAIL = 'POST_COMMENT_FAIL';

function comment_loading_object(payload) {
  return {
    type: POST_COMMENT_LOADING,
    payload,
  };
}

function comment_error_object(payload) {
  return {
    type: POST_COMMENT_FAIL,
    payload,
  };
}

function comment_object(payload) {
  return {
    type: POST_COMMENT_SUCCESS,
    payload,
  };
}

const post_comment = (data) => async (dispatch) => {
  dispatch(comment_loading_object(true));
  try {
    const res = await apiService.postResource('/comments', data);
    dispatch(comment_object(res.data));
    dispatch(comment_loading_object(false));
    toast.success('Comment saved for review.')
  } catch (error) {
    dispatch(comment_error_object(error.message));
    dispatch(comment_loading_object(false));
    toast.error('Comment was not saved.')
  }
};

// GET COMMENT
const GET_COMMENT_COUNT_SUCCESS = 'GET_COMMENT_COUNT_SUCCESS';
const GET_COMMENT_COUNT_FAIL = 'GET_COMMENT_COUNT_FAIL';

function comment_count_error_object(payload) {
  return {
    type: GET_COMMENT_COUNT_FAIL,
    payload,
  };
}

function comment_count_object(payload) {
  return {
    type: GET_COMMENT_COUNT_SUCCESS,
    payload,
  };
}

const get_comment_count = (id) => async (dispatch) => {
  dispatch(comment_loading_object(true));
  try {
    const res = await apiService.getResource(`/comments/count?post=${id}`);
    dispatch(comment_count_object(res.data));
    dispatch(comment_loading_object(false));
  } catch (error) {
    dispatch(comment_count_error_object(error.message));
    dispatch(comment_loading_object(false));
  }
};

export {
  post_comment,
  get_comment_count,
  POST_COMMENT_LOADING,
  POST_COMMENT_FAIL,
  POST_COMMENT_SUCCESS,
  GET_COMMENT_COUNT_FAIL,
  GET_COMMENT_COUNT_SUCCESS,
};
