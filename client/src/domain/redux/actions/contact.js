import { apiService } from "@infrastructure";

// POST CONTACT
const POST_CONTACT_LOADING = "POST_CONTACT_LOADING";
const POST_CONTACT_SUCCESS = "POST_CONTACT_SUCCESS";
const POST_CONTACT_FAIL = "POST_CONTACT_FAIL";

function contact_loading_object(payload) {
  return {
    type: POST_CONTACT_LOADING,
    payload,
  };
}

function contact_error_object(payload) {
  return {
    type: POST_CONTACT_FAIL,
    payload,
  };
}

function contact_object(payload) {
  return {
    type: POST_CONTACT_SUCCESS,
    payload,
  };
}

const post_contact = (data) => async (dispatch) => {
  dispatch(contact_loading_object(true));
  try {
    const res = await apiService.postResource("/contacts", data);
    dispatch(contact_object(res.data));
    dispatch(contact_loading_object(false));
  } catch (error) {
    dispatch(contact_error_object(error.message));
    dispatch(contact_loading_object(false));
  }
};

export {
  post_contact,
  POST_CONTACT_LOADING,
  POST_CONTACT_FAIL,
  POST_CONTACT_SUCCESS,
};
