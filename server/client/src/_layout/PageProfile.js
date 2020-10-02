import React from 'react';
import styled from 'styled-components';
import AvatarPanel from '../_components/pageProfile/avatarPanel/AvatarPanel';
import ReviewPanel from '../_components/pageProfile/reviewPanel/ReviewPanel';
import UploadPostPanel from '../_components/pageProfile/writePanel/UploadPostPanel';
import PostPanel from '../_components/pageProfile/postSection/PostPanel';

const PageProfile = () => {
    return (
        <PageContainer>
            <div>
                <Column width='25%'>
                    <AvatarPanel />
                    <ReviewPanel />
                </Column>
                <Column width='55%'>
                    <UploadPostPanel />
                    <PostPanel />
                </Column>
                <Column width='20%'>

                </Column>
            </div>
        </PageContainer>
    );
};
export default PageProfile;

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
