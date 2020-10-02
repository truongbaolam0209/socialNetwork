import axios from 'axios';
import { GET_POSTS_PAGE_CURRENT, GET_PROFILE_PAGE_CURRENT } from './types';


export const getProfilePageCurrent = (id) => async dispatch => {
    try {
        const res = await axios.get(`/api/page/${id}`);
        
        dispatch ({
            type: GET_PROFILE_PAGE_CURRENT,
            payload: res.data.user
        });
    } catch (err) {
        console.log('ERR', err);

    }
};


export const getPostsPageCurrent = (id) => async dispatch => {
    try {
        const res = await axios.get(`/api/page/${id}`);
        dispatch ({
            type: GET_POSTS_PAGE_CURRENT,
            payload: res.data.posts
        });
    } catch (err) {
        console.log('ERR', err);
    }
};