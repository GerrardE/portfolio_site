import { combineReducers } from 'redux';
import posts from './posts';
import comments from './comments';
import postclaps from './postclaps';
import postviews from './postviews';
import loader from './loader';

export default combineReducers({
  posts,
  comments,
  postclaps,
  postviews,
  loader,
})
