import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import AvatarCircle from '../../_ui/AvatarCircle';
import ButtonIcon from '../../_ui/ButtonIcon';

const UploadPostPanel = () => {

    const [textAreaExpanded, setTextAreaExpanded] = useState(false);

    const row1 = useRef(null);
    const row2 = useRef(null);
    const row3 = useRef(null);

    const textAreaOnClickHandle = () => {
        setTextAreaExpanded(!textAreaExpanded);
        row1.current.style.height = '110px';
        row2.current.style.display = 'block';
        row3.current.style.display = 'block';
    };
    return (
        <Form>
            <div className='row-1' ref={row1}>
                <div className='cl-1'>
                    <AvatarCircle size='45px' />
                </div>
                <div className='cl-2'>
                    <textarea onClick={textAreaOnClickHandle}></textarea>
                </div>
            </div>
            <div className='row-2' ref={row2}>
                <ButtonIcon value='Location' />
                <ButtonIcon value='Photo' />
                <ButtonIcon value='Privacy' />
            </div>
            <div className='row-3' ref={row3}>
                <ButtonIcon value='Post' width='100%' />
            </div>
        </Form>
    );
};
export default UploadPostPanel;


const Form = styled.form`
    
    margin-bottom: 20px;
    background-color: white;

    .row-1 {
        display: flex;
        height: 65px;
        transition: 0.6s ease-in-out;
        
    }
    .cl-1 {
        width: 60px;
        display: flex;
        justify-content: center;
        padding: 10px 0 0 0;
    }
    .cl-2 {
        width: calc(100% - 60px);
        display: flex;
        justify-content: center;
        padding: 10px;
    }
    textarea {
        width: 100%;
        border-radius: 15px;
    
    }

    .row-2 {
        display: flex;
        padding: 5px 10px;
        display: none;
        transition: 0.3s ease-in-out;
    }
    .row-3 {
        padding: 5px 10px;
        display: none;
        transition: 0.3s ease-in-out;
    }
`;