import { GET_PROFILE_PAGE_CURRENT, GET_POSTS_PAGE_CURRENT } from '../_action/types';

const initState = {
    profile: null,
    posts: null,
    loading: false
};


export default (state = initState, { type, payload }) => {
    switch (type) {
        case GET_PROFILE_PAGE_CURRENT:
            return {
                ...state,
                profile: payload
            };
        case GET_POSTS_PAGE_CURRENT:
            return {
                ...state,
                posts: payload
            };
        default:
            return state;
    }
};