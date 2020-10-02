import axios from 'axios';
import setAuthToken from '../_utils/setAuthToken';
import { setAlert } from './alert';
import { AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_SUCCESS, USER_LOADED } from './types';


// Login User
export const login = (email, password) => async dispatch => {
    try {
        const res = await axios.post(
            '/api/auth', 
            JSON.stringify({ email, password }), 
            { headers: { 'Content-Type': 'application/json' } 
        });
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data.token
        });
        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) errors.forEach(err => dispatch(setAlert(err.msg, 'danger')));
        dispatch({ type: LOGIN_FAIL });
    }
};
// Load User
export const loadUser = () => async dispatch => {
    if (localStorage.token) setAuthToken(localStorage.token);
    try {
        const res = await axios.get('/api/auth');
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (err) {
        dispatch({ type: AUTH_ERROR });
    }
};
// Logout / Clear Profile
export const logout = () => (dispatch) => {
    dispatch({ type: LOGOUT });
    
};


















// Register User
export const register = (name, email, password) => async (dispatch) => {
    const config = {
        headers: { 'Content-Type': 'application/json' }
    };
    const body = JSON.stringify({ name, email, password });
    console.log(body);

    try {
        const res = await axios.post('/api/users', body, config);
        console.log('RES', res);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });

        dispatch(loadUser());
    } catch (err) {

        const errors = err.response.data.errors;

        if (errors) errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));

        dispatch({ type: REGISTER_FAIL });
    }
};









