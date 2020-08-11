import * as actions from '../actions/loader';

const initialState = {
  loading: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.LOADING_START:
      return {
        ...state,
        loading: action.payload
      };

    case actions.LOADING_STOP:
      return {
        ...state,
        loading: action.payload
      };

    default: return state;
  }
}
