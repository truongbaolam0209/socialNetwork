import React from 'react';
import styled from 'styled-components';
import AvatarCircle from '../../_ui/AvatarCircle';
import Text from '../../_ui/Text';

const ReviewBox = ({username}) => {
    return (
        <RwBox>
            <div className='cl-1'>
                <AvatarCircle size='45px' />
            </div>
            <div className='cl-2'>
                <Text value={username} fontWeight='bold' fontSize='14px' />
                <Text 
                    fontSize='14px' lineHeight='120%'
                    value='nha gan cho de tinh siue tien nghi ahihi tot lam ahi'  
                />
            </div>
        </RwBox>
    );
};
export default ReviewBox;


const RwBox = styled.div`
    height: 60px;
    display: flex;

    .cl-1 {
        width: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .cl-2 {
        width: calc(100% - 60px);
        padding: 3px 10px 5px 8px;

        
    }
`;