import React from 'react';
import styled from 'styled-components';
import AvatarCircle from '../../_ui/AvatarCircle';
import IconMark from '../../_ui/IconMark';
import Text from '../../_ui/Text';


const ProductItem = () => {
    return (
        <Div>
            <div className='row-1'>
                <AvatarCircle />
                <div className='cl-1'>
                    <Text value='Lam Lich Lam' fontWeight='bold' />

                    <div className='time'>
                        <IconMark name='clock outline' color='grey' fontSize='12px' marginTop='-8px' />
                        <Text value='3 min ago' color='grey' fontSize='12px' />
                    </div>
                </div>
            </div>
            <div className='row-2'>
                <img src='./img/house/h001.jpg' alt='...' />
            </div>

            <div></div>
            <div></div>
            <div></div>
        </Div>
    );
};
export default ProductItem;

const Div = styled.div`
    background-color: white;
    width: 25%;
    padding: 7px;
    margin: 7px;
    .row-1 {
        display: flex;
    }
    .cl-1 {
        margin-top: -4px;
        padding: 0 0 0 10px;
        
    }
    .time {
        display: flex;
        margin-top: -5px;
    }

    img {
        
    }

`;