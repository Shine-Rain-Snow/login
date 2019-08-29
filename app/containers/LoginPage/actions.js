import axios from 'axios';
import { GET_LOGIN_ERRORS, SET_CURRENT_USER } from './constants';
import setAuthToken from '../services/setAuthToken';
import jwt_decode from 'jwt-decode';

export const loginUser = (user) => dispatch => {
	console.log('login data='+ user.email);
	axios.post('/api/login', user)
		.then(res => {
			const { token } = res.data;
			
			localStorage.setItem('jwtToken', token);
			setAuthToken(token);
			const decode = jwt_decode(token);
			
			dispatch({
				type: SET_CURRENT_USER,
				payload: decode
			});
			

		})
		.catch(err => {
			console.log('why are you ?');
			dispatch({
				type: GET_LOGIN_ERRORS,
				payload: err.response.data,
			})
		})
}

export const setCurrentUser = decode => {
	console.log("this is token"+JSON.stringify(decode));
	return {
		type: SET_CURRENT_USER,
		payload: decode
	}
}

export const logoutUser = (history) => dispatch => {
	localStorage.removeItem('jwtToken');
	setAuthToken(false);
	dispatch(setCurrentUser({}));
	history.push('/login');
}