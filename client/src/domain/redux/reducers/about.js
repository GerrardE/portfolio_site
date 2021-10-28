import * as actions from '../actions/about';

const initialState = {
  about: {},
  errors: '',
  loading: false
}

function about (state = initialState, action) {
  switch (action.type) {
    case actions.GET_ABOUT_LOADING:
      return {
        ...state,
        loading: action.payload
      };

    case actions.GET_ABOUT_SUCCESS:
      return {
        ...state,
        about: action.payload
      };

    case actions.GET_ABOUT_FAIL:
      return {
        ...state,
        errors: action.payload
      };

    default: return state;
  }
}

export default about;
