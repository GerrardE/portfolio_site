import { apiService } from "@infrastructure";

// GET POSTS
const GET_POSTS_LOADING = 'GET_POSTS_LOADING';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_FAIL = 'GET_POSTS_FAIL';

function posts_loading_object (loading) {
  return {
    type: GET_POSTS_LOADING,
    payload: loading
  }
}

function posts_object (posts) {
  return {
    type: GET_POSTS_SUCCESS,
    payload: posts
  }
}

function posts_error_object (message) {
  return {
    type: GET_POSTS_FAIL,
    payload: message
  }
}

// GET POST
const GET_POST_LOADING = 'GET_POST_LOADING';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_FAIL = 'GET_POST_FAIL';

function post_object (posts) {
  return {
    type: GET_POST_SUCCESS,
    payload: posts
  }
}

function post_loading_object (loading) {
  return {
    type: GET_POST_LOADING,
    payload: loading
  }
}

function post_error_object (message) {
  return {
    type: GET_POST_FAIL,
    payload: message
  }
}

const get_posts = () => async (dispatch) => {
  dispatch(posts_loading_object(true))
  try {
    const res = await apiService.getResource('/posts')
    dispatch(posts_object(res.data));
    dispatch(posts_loading_object(false))
  } catch (error) {
    dispatch(posts_error_object(error.message))
    dispatch(posts_loading_object(false))
  }
}

const get_post = (id) => async (dispatch) => {
  dispatch(post_loading_object(true))
  try {
    const res = await apiService.getResource(`posts/${id}`)
    dispatch(post_object(res.data));
    dispatch(post_loading_object(false))
  } catch (error) {
    dispatch(post_error_object(error.message))
    dispatch(post_loading_object(false))
  }
}

export {
  get_post,
  get_posts,
  GET_POST_LOADING,
  GET_POST_FAIL,
  GET_POST_SUCCESS,
  GET_POSTS_LOADING,
  GET_POSTS_FAIL,
  GET_POSTS_SUCCESS
}
