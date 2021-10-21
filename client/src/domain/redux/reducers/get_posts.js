import * as actions from '../actions/get_posts';

const initialState = {
  posts: [],
  post: {},
  errors: '',
  loading: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.GET_POSTS_LOADING:
      return {
        ...state,
        loading: action.payload
      };

    case actions.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload
      };

    case actions.GET_POSTS_FAIL:
      return {
        ...state,
        errors: action.payload
      };

    case actions.GET_POST_LOADING:
      return {
        ...state,
        loading: action.payload
      };

    case actions.GET_POST_SUCCESS:
      return {
        ...state,
        post: action.payload
      };

    case actions.GET_POST_FAIL:
      return {
        ...state,
        errors: action.payload
      };

    default: return state;
  }
}
