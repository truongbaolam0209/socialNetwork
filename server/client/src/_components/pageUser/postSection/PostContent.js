import React, { useState } from 'react';
import styled from 'styled-components';
import IconMark from '../../_ui/IconMark';
import Text from '../../_ui/Text';


const PostContent = ({ content }) => {

    const [textUnfold, setTextUnfold] = useState(false);
    const webkitLineClamp = textUnfold ? 'unset' : '3';


    return (
        <ContentBox>
            <div className='row-info'>
                <div className='cl'>
                    <div className='row-icon'>
                        <IconMark name='location arrow' color='var(--grey-1)' fontSize='13px' marginTop='-7px' />
                        <Text value='Quận Tây Hồ' color='var(--grey-1)' fontSize='13px' />
                    </div>
                    <div className='row-icon'>
                        <IconMark name='home' color='var(--grey-1)' fontSize='13px' marginTop='-7px' />
                        <Text value='Landed House' color='var(--grey-1)' fontSize='13px' />
                    </div>
                    <div className='row-icon'>
                        <IconMark name='dollar sign' color='var(--grey-1)' fontSize='13px' marginTop='-7px' />
                        <Text value='2000K' color='var(--grey-1)' fontSize='13px' />
                    </div>
                </div>
                <div className='cl'>
                    <div className='row-icon'>
                        <IconMark name='chart area' color='var(--grey-1)' fontSize='13px' marginTop='-7px' />
                        <Text value='90 m2' color='var(--grey-1)' fontSize='13px' />
                    </div>
                    <div className='row-icon'>
                        <IconMark name='bed' color='var(--grey-1)' fontSize='13px' marginTop='-7px' />
                        <Text value='03 bedroom' color='var(--grey-1)' fontSize='13px' />
                    </div>
                </div>
            </div>

            <div className='row-content'>
                <Text
                    overflow='hidden' webkitLineClamp={webkitLineClamp}

                    value={content}
                />
                <div onClick={() => setTextUnfold(!textUnfold)}>
                    <Text value='view more' color='var(--pink-1)' fontWeight='bold' />
                </div>
            </div>
        </ContentBox>
    );
};
export default PostContent;

const ContentBox = styled.div`
    padding: 5px 0 10px 0;

    .row-info {
        display: flex;
        width: 100%;
    }
    .cl {
        width: 35%;
    }
    .row-icon {
        display: flex;
    }
    .row-content {
        padding: 10px 0 15px 0;
        border-bottom: 1px solid var(--grey-0);
    }
`;


