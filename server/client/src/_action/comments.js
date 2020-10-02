import axios from 'axios';
import { LOAD_COMMENTS } from './types';



// Load comment
export const loadComments = (postId) => async dispatch => {
    try {
        const res = await axios.get(`/api/comment/${postId}`);
        // console.log(res.data);
        dispatch({
            type: LOAD_COMMENTS,
            payload: {
                comments: res.data,
                postId: postId
            }
        });
    } catch (err) {
        console.log('load error');
    }
};


// SUBMIT COMMENT
export const submitComment = (postId, comment) => async dispatch => {
    try {
        
        const res = await axios.post(
            `/api/comment/${postId}`,
            JSON.stringify({ postId, comment }),
            { headers: { 'Content-Type': 'application/json' } }
        );

        console.log(res);

        dispatch({
            type: LOAD_COMMENTS,
            payload: res.data
        });
 

    } catch (err) {
        const errors = err.response.data.errors;
        console.log('ERR ... ', errors);
        
        // if (errors) errors.forEach(err => dispatch(setAlert(err.msg, 'danger')));
        // dispatch({ type: LOGIN_FAIL });
    }
};