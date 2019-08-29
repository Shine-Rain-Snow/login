import { CHANGE_USERINFO, GET_ERRORS } from './constants';
import axios from 'axios';

export function registerSuccess() {
    return  {
        type: CHANGE_USERINFO,
        userInfo: user,
    }
}

export const registerUser = (user, history) => dispatch => {
    axios.post('/api/register', user)
        .then(
            res => history.push('/login')
        )
        .catch(err => {
            
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            });
    });
    
}




// return dispatch => {
    //     return fetch("http://localhost:3000/api/register", {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             Accept: 'application/json'
    //         },
    //         body: JSON.stringify(user),
    //     }).then(
    //         response => {
    //             console.log(response);
    //         }
    //     ).catch(

    //         error => {
    //             console.log(error);
    //         }
    //     )
    // }