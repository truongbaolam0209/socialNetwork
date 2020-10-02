import React from 'react';
import styled from 'styled-components';

const ButtonIcon = ({ value, width  }) => {
    return (
        <Btn width={width}>{value}</Btn>
    );
};
export default ButtonIcon;



ButtonIcon.defaultProps = {
    width: 'unset'
};
const Btn = styled.button`
    border: none;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    outline: none;
    height: fit-content;


    font-size: 15px;
    font-weight: bold;
    padding: 5px 15px;
    border-radius: 15px;

    width: ${props => props.width};
`;