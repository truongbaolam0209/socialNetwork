import React from 'react';
import styled from 'styled-components';
import AvatarCircle from '../../_ui/AvatarCircle';
import IconMark from '../../_ui/IconMark';
import Text from '../../_ui/Text';


const PostHeader = () => {
    return (
        <Header>
            <AvatarCircle size='45px' />
            <div className='cl-1'>
                <Text value='Lam Lich Lam' fontWeight='bold' />

                <div className='time'>
                    <IconMark name='clock outline' color='grey' fontSize='12px' marginTop='-8px' />
                    <Text value='3 min ago' color='grey' fontSize='12px' />
                </div>
            </div>
            <div className='cl-2'>
                <IconMark name='ellipsis vertical' color='grey' fontSize='23px' />
            </div>
        </Header>
    );
};
export default PostHeader;

const Header = styled.div`
    display: flex;
    
    .cl-1 {
        margin-top: -4px;
        padding: 0 0 0 10px;
        
    }
    .time {
        display: flex;
        width: 150px;
    }
    .cl-2 {
        width: calc(100% - 150px - 45px);
        display: flex;
        float: right;
    }
`;