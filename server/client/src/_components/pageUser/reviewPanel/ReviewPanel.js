import React from 'react';
import styled from 'styled-components';
import Text from '../../_ui/Text';
import IconMark from '../../_ui/IconMark';
import ReviewBox from './ReviewBox';



const ReviewPanel = () => {
    return (
        <Panel>
            <div className='row-1'>
                <Text value='7.5' weight='bold' color='white' fontSize='35px' />
                <IconMark name='star outline' color='white' fontSize='28px' paddingTop='4px' paddingLeft='8px' />
            </div>
            <div className='row-2'>
                <ReviewBox username='Lâm Lịch Lãm' />
                <ReviewBox username='Hà Nguyễn' />
                <ReviewBox username='John Doe' />
                <ReviewBox username='John Doe' />
                <ReviewBox username='John Doe' />
            </div>
        </Panel>
    );
};
export default ReviewPanel;


const Panel = styled.div`
    background-color: white;

    .row-1 {
        display: flex;
        height: 45px;
        justify-content: center;
        align-items: center;
        background-color: var(--color-primary);
    }
`;