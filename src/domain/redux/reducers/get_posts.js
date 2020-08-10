import { GET_POSTS_SUCCESS, GET_POSTS_LOADING, GET_POSTS_FAIL } from '../actions/get_posts';

const initialState = {
  posts: [],
  errors: '',
  loading: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POSTS_LOADING:
      return {
        ...state,
        loading: action.payload
      };

    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload
      };

    case GET_POSTS_FAIL:
      return {
        ...state,
        errors: action.payload
      };

    default: return state;
  }
}
