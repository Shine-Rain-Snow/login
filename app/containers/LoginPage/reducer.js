import { SET_CURRENT_USER, GET_LOGIN_ERRORS } from './constants';
import isEmpty from './is-empty';

const initialState = {
	isAuthenticated: false,
	user: {}
}

export default function loginReducer(state = initialState, action) {
	console.log('this is login Reducer'+JSON.stringify(action));
	switch(action.type) {
		case SET_CURRENT_USER:
		console.log('this is reducer='+action.payload);
			return {
				...state,
				isAuthenticated: !isEmpty(action.payload),
				user: action.payload
			}
		case GET_LOGIN_ERRORS:  
			console.log('i printed login errors'+action.payload);
     		return action.payload;
		default: 
			return state;
	}
}
