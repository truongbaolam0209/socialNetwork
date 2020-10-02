import React from 'react';
import styled from 'styled-components';


const AvatarCircle = ({ size, marginLeft }) => {
    return (
        <Div 
            size={size} marginLeft={marginLeft}
        >
            <img src='./img/avatar_01.jpg' alt='...'/>
        </Div>
    );
};
export default AvatarCircle;


AvatarCircle.defaultProps = {
    size: '35px'
};


const Div = styled.div`
    background-color: green;
    height: ${props => props.size};
    width: ${props => props.size};
    
    border-radius: 50%;
    overflow: hidden;
    img {
        height: 100%;
    };
    margin-left: ${props => props.marginLeft};
`;





