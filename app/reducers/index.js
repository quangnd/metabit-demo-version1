import { combineReducers } from 'redux';
import messages from './messages';
import auth from './auth';
import quiz from './quiz';

export default combineReducers({
  messages,
  auth,
  quiz
});
