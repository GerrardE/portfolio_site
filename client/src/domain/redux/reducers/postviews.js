import * as actions from "../actions/postviews";

const initialState = {
  postviews: {},
  count: 0,
  errors: "",
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.POST_VIEW_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case actions.POST_VIEW_SUCCESS:
      return {
        ...state,
        postviews: action.payload,
      };

    case actions.POST_VIEW_FAIL:
      return {
        ...state,
        errors: action.payload,
      };

    case actions.GET_VIEW_COUNT_SUCCESS:
      return {
        ...state,
        count: action.payload,
      };

    case actions.GET_VIEW_COUNT_FAIL:
      return {
        ...state,
        errors: action.payload,
      };

    default:
      return state;
  }
}
