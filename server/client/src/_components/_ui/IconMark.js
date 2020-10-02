import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import React from 'react';


const IconMark = ({ name, color, fontSize, paddingTop, paddingLeft, marginTop, marginLeft }) => {
    
    return (
        <Div>
            <Icon name={name} style={{ 
                color: `${color}`, 
                fontSize: `${fontSize}`, 
                paddingTop: `${paddingTop}`, 
                paddingLeft: `${paddingLeft}`, 
                marginTop: `${marginTop}`, 
                marginLeft: `${marginLeft}`, 
            }} />
        </Div>
    );
};
export default IconMark;


const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
