import React, { useEffect, Fragment } from 'react';
import Navbar from '../_components/Navbar';
import styled from 'styled-components';
import AvatarPanel from '../_components/pageUser/avatarPanel/AvatarPanel';
import ReviewPanel from '../_components/pageUser/reviewPanel/ReviewPanel';
import UploadPostPanel from '../_components/pageUser/writePanel/UploadPostPanel';
import PostPanel from '../_components/pageUser/postSection/PostPanel';
import { getProfilePageCurrent } from '../_action/page';
import { getPostsPageCurrent } from '../_action/page';
import store from '../_store';
import { connect } from 'react-redux';


const PageUser = ({ match, profile, posts }) => {

    useEffect(() => {
        store.dispatch(getProfilePageCurrent(match.params.id));
        store.dispatch(getPostsPageCurrent(match.params.id));
    }, []);

    
    return (

        <PageContainer>
            <div>
                <Column width='25%'>
                    <AvatarPanel name={profile && profile.name} />
                    <ReviewPanel />
                </Column>
                <Column width='55%'>
                    <UploadPostPanel />
                    <PostPanel posts={posts && posts} />
                </Column>
                <Column width='20%'>

                </Column>
            </div>
        </PageContainer>

    );
};


const mapStateToProps = state => ({
    profile: state.page.profile,
    posts: state.page.posts
});


export default connect(mapStateToProps)(PageUser);




const PageContainer = styled.div`
    width: 100%;
    margin-top: 68px;
    & > div {
        margin: auto;
        width: 1050px;
        display: flex;
        background-color: var(--grey-0);
    };
`;

const Column = styled.div`
    width: ${props => props.width};
    margin: 10px;
`;
