import { apiService } from "@infrastructure";

export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_LOADING = 'GET_POSTS_LOADING';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAIL = 'GET_POSTS_FAIL';

export function loading_object (loading) {
  return {
    type: GET_POSTS_LOADING,
    payload: loading
  }
}

export function posts_object (posts) {
  return {
    type: GET_POSTS_SUCCESS,
    payload: posts
  }
}

export function error_object (message) {
  return {
    type: GET_POSTS_FAIL,
    payload: message
  }
}

export const get_posts = () => async (dispatch) => {
  dispatch(loading_object(true))
  try {
    const res = await apiService.getResource('posts')
    dispatch(posts_object(res.data));
    dispatch(loading_object(false))
  } catch (error) {
    dispatch(error_object(error.message))
    dispatch(loading_object(false))
  }
}
