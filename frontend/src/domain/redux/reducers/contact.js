import * as actions from '../actions/contact';

const initialState = {
  contact: {},
  errors: '',
  loading: false
}

function contact (state = initialState, action) {
  switch (action.type) {
    case actions.POST_CONTACT_LOADING:
      return {
        ...state,
        loading: action.payload
      };

    case actions.POST_CONTACT_SUCCESS:
      return {
        ...state,
        contact: action.payload
      };

    case actions.POST_CONTACT_FAIL:
      return {
        ...state,
        errors: action.payload
      };

    default: return state;
  }
}

export default contact;
