import { combineReducers } from 'redux';
import Tweets from './Tweets';
import User from './User';
import Barbecue from './Barbecue';
import Global from './Global';

export default combineReducers({
  Tweets,
  User,
  Barbecue,
  Global,
});
