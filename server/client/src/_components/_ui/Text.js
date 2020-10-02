import React from 'react';
import styled from 'styled-components';

const Text = ({
    value, fontWeight, fontSize, backgroundColor, color, textAlign, lineHeight,
    display, webkitLineClamp, webkitBoxOrient, overflow 
}) => {
    return (
        <TextBox
            fontWeight={fontWeight}
            fontSize={fontSize}
            backgroundColor={backgroundColor}
            color={color}
            textAlign={textAlign}
            lineHeight={lineHeight}

            

            display={display}
            webkitLineClamp={webkitLineClamp}
            webkitBoxOrient={webkitBoxOrient}
            overflow={overflow}
        >{value}</TextBox>
    );
};
export default Text;

Text.defaultProps = {
    fontWeight: 'normal',
    fontSize: '16px',
    backgroundColor: 'transparent',
    color: 'black',
    textAlign: 'left',
    lineHeight: 'unset',

    display: '-webkit-box',
    webkitBoxOrient: 'vertical',
    webkitLineClamp: '10',
    overflow: 'unset'
};


const TextBox = styled.div`
    font-weight: ${props => props.fontWeight};
    font-size: ${props => props.fontSize};
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    text-align: ${props => props.textAlign};
    line-height: ${props => props.lineHeight};


    display: ${props => props.display};
    -webkit-line-clamp: ${props => props.webkitLineClamp};
    -webkit-box-orient: ${props => props.webkitBoxOrient};
    overflow: ${props => props.overflow};
`;


// import { css } from 'styled-component'

// const Button = styled.button`
//     ${({ size }) => `
//         ${size === 'large'
//             ? css`
//                 width: 50px;
//                 height: 10px;
//             `}
//             : css`
//                 width: 30px;
//                 height: 7px;
//             `}
//     `}
//     color: red;
// `

// <Button size="small" />
// <Button size="large" />