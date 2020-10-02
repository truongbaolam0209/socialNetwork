import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import IconMark from '../../_ui/IconMark';
import Text from '../../_ui/Text';
import AvatarCircle from '../../_ui/AvatarCircle';
import store from '../../../_store';
import { loadComments } from '../../../_action/comments';

const PostReactSection = ({ postId }) => {

    return (
        <Div>

            <div className='cl-2'>
                <AvatarCircle size='30px' />
                <AvatarCircle marginLeft='-15px' size='30px' />
                <AvatarCircle marginLeft='-15px' size='30px' />
                <AvatarCircle marginLeft='-15px' size='30px' />
                <AvatarCircle marginLeft='-15px' size='30px' />
            </div>
            <div className='cl-3'>
                <div className='row-1-pp'>
                    <Text value='Ha Nguyen' fontWeight='bold' fontSize='13px' />
                    <div style={{ width: '5px' }}></div>
                    <Text value='and' fontSize='13px' />
                </div>
                <div className='row-1-pp'>
                    <Text value='6 people like this' fontSize='13px' />
                </div>
            </div>
            <div className='cl-4' onClick={() => store.dispatch(loadComments(postId))}>
                <Text value='14' color='var(--grey-1)' />
                <IconMark name='commenting' color='var(--grey-1)' marginTop='-18px' marginLeft='5px' />
            </div>
            <div className='cl-5'>
                <Text value='22' color='var(--grey-1)' />
                <IconMark name='eye' color='var(--grey-1)' marginTop='-18px' marginLeft='5px' />
            </div>
            <div className='cl-5'>
                <Text value='3' color='var(--grey-1)' />
                <IconMark name='share' color='var(--grey-1)' marginTop='-18px' marginLeft='5px' />
            </div>
        </Div>
    );
};
export default PostReactSection;




const Div = styled.div`
    padding: 5px 0 15px 0;
    display: flex;
    border-bottom: solid 1px var(--grey-0);

    .cl-1 {
        display: flex;
    }
    .cl-2 {
        display: flex;
    }
    .cl-3 {
        margin-left: 10px;
    }
    .row-1-pp {
        display: flex;
        margin-top: -5px;

    }
    .cl-4 {
        display: flex;
        margin-left: auto;
        order: 1;
    }
    .cl-5 {
        display: flex;
        order: 2;
        margin-left: 15px;
    }
`;