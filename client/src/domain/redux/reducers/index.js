import { combineReducers } from 'redux';
import get_posts from './get_posts';
import loader from './loader';

export default combineReducers({
  get_posts,
  loader,
})
