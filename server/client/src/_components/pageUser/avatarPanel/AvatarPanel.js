import React from 'react';
import styled from 'styled-components';
import Text from '../../_ui/Text';
import AvatarCircle from '../../_ui/AvatarCircle';

const AvatarPanel = ({ name }) => {
    return (
        <AvatarPanelContainer>
            <div className='row-1'>
                <AvatarCircle size='150px' />
            </div>
            <div className='row-2'>
                <Text value={name} fontWeight='bold' fontSize='20px' textAlign='center' />
            </div>
            <div className='row-3'>
                <Text value='Landlord' textAlign='center' />
            </div>
            <div className='row-4'>
                <div className='cl-1'>
                    <Text value='Customer' fontWeight='bold' textAlign='center' />
                    <Text value='7' textAlign='center' />
                </div>
                <div className='cl-2'>
                    <Text value='Follower' fontWeight='bold' textAlign='center' />
                    <Text value='15' textAlign='center' />
                </div>
            </div>
            <div className='row-5'>
                <Text value='Direct message' fontWeight='bold' color='white' textAlign='center' />
            </div>
        </AvatarPanelContainer>
    );
};
export default AvatarPanel;


const AvatarPanelContainer = styled.div`
    background-color: white;
    margin-bottom: 20px;

    .row-1 {
        padding: 25px 0 20px 0;
        display: flex;
        justify-content: center;
    }
    .row-4 {
        display: flex;
        margin: 10px 0 10px 0;
    }
    .row-4 .cl-1 {
        width: 50%;
        border-right: black solid 1px;
    }
    .row-4 .cl-2 {
        width: 50%;
    }
    .row-5 {
        padding: 5px 0;
        background-color: var(--color-primary);
    }
`;