import * as actions from "../actions/postclaps";

const initialState = {
  postclaps: {},
  count: 0,
  errors: "",
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.POST_CLAP_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case actions.POST_CLAP_SUCCESS:
      return {
        ...state,
        postclaps: action.payload,
      };

    case actions.POST_CLAP_FAIL:
      return {
        ...state,
        errors: action.payload,
      };

    case actions.GET_CLAP_COUNT_SUCCESS:
      return {
        ...state,
        count: action.payload,
      };

    case actions.GET_CLAP_COUNT_FAIL:
      return {
        ...state,
        errors: action.payload,
      };

    default:
      return state;
  }
}
