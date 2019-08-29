import { fromJS } from 'immutable';
const initialState = fromJS({});
import { CHANGE_USERINFO, GET_ERRORS } from './constants';

function registerReducer(state = initialState, action) {
 
  switch (action.type) {
    case CHANGE_USERINFO:
      return state.set('userInfo', action.user);
    case GET_ERRORS:     	
     	return action.payload;
    default:
      return state;
  }
}

export default registerReducer;