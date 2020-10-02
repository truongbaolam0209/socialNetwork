import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostReactSection from './PostReactSection';
import PostCommentSection from './PostCommentSection';
// import { connect } from 'react-redux';

const PostPanel = ({ posts }) => {


    // const [commentUnfolded, setCommentUnfolded] = useState(false);
    // const cmtUnfolded = () => setCommentUnfolded(!commentUnfolded);


    // const [cmts, setCmts] = useState([]);
    


    // useEffect(() => {
    //     console.log('hihi');
    //     setCmts(comments);
    // }, [commentUnfolded]);



    return (
        <Fragment>
            {posts && posts.map(post => (
                <Div key={post._id}>
                    <PostHeader title={post.title} />
                    <PostContent content={post.content} />
                    <PostReactSection postId={post._id} />
                    <PostCommentSection postId={post._id} />
                </Div>
            ))}
        </Fragment>
    );
};

// const mapStatetoProps = state => ({
//     comments: state.comments.comments,
//     postIdCommented: state.comments.postId
// });

export default PostPanel;





const Div = styled.div`
    background-color: white;
    padding: 10px 17px;
`;