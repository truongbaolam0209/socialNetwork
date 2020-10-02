import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AvatarCircle from '../../_ui/AvatarCircle';
import Text from '../../_ui/Text';
import store from '../../../_store';
import { submitComment } from '../../../_action/comments';
import { connect } from 'react-redux';

const PostCommentSection = ({ postId, comments }) => {

    const [textUnfold, setTextUnfold] = useState(false);
    const webkitLineClamp = textUnfold ? 'unset' : '2';
    const [text, setText] = useState('');
    const submitOnEnter = (e) => {
        if (e.which === 13) {
            e.preventDefault();
            store.dispatch(submitComment(postId, text));
        }
    };

    const [isCommentsShown, setIsCommentsShown] = useState(true)

    return (
        <Div>
            <div className='row-1'>
                <AvatarCircle />
                <textarea value={text} onChange={e => setText(e.target.value)} onKeyPress={submitOnEnter}></textarea>
            </div>
            <div className='row-2'>

                {/* {comments.length && comments[0].postId === postId && comments.map(cmt => ( */}

                {isCommentsShown
                    ? comments.map(cm => (
                        <div className='comment' key={cm._id}>
                            <AvatarCircle />
                            <div className='comment-content'>
                                <Text value={cm.name} fontSize='13px' fontWeight='bold' />
                                <div className='content-div'>
                                    <Text
                                        fontSize='13px'
                                        overflow='hidden'
                                        webkitLineClamp={webkitLineClamp}
                                        value={cm.comment}
                                    />
                                </div>
                                <div onClick={() => setTextUnfold(!textUnfold)}>
                                    <Text value='view more' color='var(--pink-1)' fontWeight='bold' fontSize='13px' />
                                </div>
                            </div>
                        </div>
                    
                    ))
                    : null
                }

                {/* arr.map(ele => <Post data={ele} callCommentApi={() => commentQuery(ele._id)}/>) */}

            </div>
        </Div>
    );
};

const filterComments = (state, postId) =>
    Object
        .values(state.comments.comments)
        .filter(comment => comment.postId === postId )

const mapStatetoProps = (state, props) => ({
    comments: filterComments(state, props.postId)
});

export default connect(mapStatetoProps)(PostCommentSection);
// export default PostCommentSection;



const Div = styled.div`

    padding: 15px 0 0 0;

    .row-1 {
        display: flex;
    }
    textarea {
        width: calc(100% - 35px);
        border-radius: 15px;
        margin-left: 10px;
        height: 35px;
    }
    .row-2 {
        padding-top: 15px;
    }
    .comment {
        display: flex;
        padding-bottom: 15px;
    }
    .comment-content {
        width: calc(100% - 35px);
        padding: 0 0 0 10px;
    }
    .content-div {
        background-color: var(--grey-2);
        padding: 2px 5px 5px 5px;
        border-radius: 7px;
    }
`;