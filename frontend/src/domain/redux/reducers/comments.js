import * as actions from "../actions/comments";

const initialState = {
  comment: {},
  count: 0,
  errors: "",
  loading: false,
};

function comments (state = initialState, action) {
  switch (action.type) {
    case actions.POST_COMMENT_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case actions.POST_COMMENT_SUCCESS:
      return {
        ...state,
        comment: action.payload,
      };

    case actions.POST_COMMENT_FAIL:
      return {
        ...state,
        errors: action.payload,
      };

    case actions.GET_COMMENT_COUNT_SUCCESS:
      return {
        ...state,
        count: action.payload,
      };

    case actions.GET_COMMENT_COUNT_FAIL:
      return {
        ...state,
        errors: action.payload,
      };

    default:
      return state;
  }
}

export default comments;
