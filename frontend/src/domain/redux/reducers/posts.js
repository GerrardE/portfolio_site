import * as actions from "../actions/posts";

const initialState = {
  posts: [],
  categoryposts: {
    posts: []
  },
  post: {},
  errors: "",
  loading: false,
};

function posts (state = initialState, action) {
  switch (action.type) {
    case actions.GET_POSTS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case actions.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
      };

    case actions.GET_CATEGORY_POSTS_SUCCESS:
      return {
        ...state,
        categoryposts: action.payload,
      };

    case actions.GET_POSTS_FAIL:
      return {
        ...state,
        errors: action.payload,
      };

    case actions.GET_POST_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case actions.GET_POST_SUCCESS:
      return {
        ...state,
        post: action.payload,
      };

    case actions.GET_POST_FAIL:
      return {
        ...state,
        errors: action.payload,
      };

    default:
      return state;
  }
}

export default posts;
