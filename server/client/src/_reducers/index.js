import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import page from './page';
import comments from './comments';
// import post from './post';

export default combineReducers({
  alert,
  auth,
  page,

  comments
  // test
  // post
});