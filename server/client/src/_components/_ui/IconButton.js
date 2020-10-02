import styled from 'styled-components';
import { Icon, Popup } from 'semantic-ui-react';
import React, { useState } from 'react';

const IconButton = ({ name }) => {

    const initIconState = {
        color: 'white',
        fontWeight: 'normal'
    };
    const [iconHoverStyle, setIconHoverStyle] = useState(initIconState);
    
    const onMouseOver = () => setIconHoverStyle({
        color: 'var(--color-primary)',
        fontWeight: 'bold'
    });
    const onMouseOut = () => setIconHoverStyle(initIconState);

    const tooltip = name === 'bell outline' ? 'Notifications' : name === 'envelope outline' ? 'Inbox' : 'Account';

    return (
        <Popup content={tooltip} trigger={
            <Div onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
                <Icon name={name} style={{
                    ...{ margin: '0', transition: '0.3s ease-in-out' },
                    ...iconHoverStyle
                }} />
            </Div>
        } />

    );
};
export default IconButton;


const Div = styled.div`
    height: 47px;
    width: 47px;
    border-radius: 50%;
    background-color: var(--color-secondary);
    display: flex;
    justify-content: center;
    align-items: center;
    

    margin: 0 10px;
    transition: 0.4s ease-in-out;

    &:hover {
        cursor: pointer;
        background-color: white;
    };
`;
