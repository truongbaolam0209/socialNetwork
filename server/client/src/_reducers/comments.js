import { LOAD_COMMENTS } from '../_action/types';

const initState = {
    comments: {}
}


export default (state = initState, { type, payload }) => {
    switch (type) {
        case LOAD_COMMENTS:

            const newlyLoadedComments = {}
            payload.comments.forEach(comment => {
                newlyLoadedComments[comment._id] = comment
            });

            return {
                ...state,
                comments: { ...state.comments, ...newlyLoadedComments },
            };
        default:
            return state;
    }
};