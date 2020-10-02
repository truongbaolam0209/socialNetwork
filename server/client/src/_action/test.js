import axios from 'axios';
import { TEST } from './types';


// Get current users profile
export const test = () => async dispatch => {
    try {
        const res = await axios.get('/api/test');
        dispatch({
            type: TEST,
            payload: res.data
        });
    } catch (err) {
        console.log('xxx');
        
    }
};