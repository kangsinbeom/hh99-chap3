import React from 'react';
import styled from 'styled-components';
import { blueColor, grayColor } from '../../assets/styles/colors';
function UiBox({ children, title, translate }) {
    return (
        <StyledDiv translate={translate}>
            <h2>{title}</h2>
            {children}
        </StyledDiv>
    );
}

export default UiBox;

const StyledDiv = styled.div`
    width: 100%;
    padding: 20px 30px 30px;
    background-color: ${grayColor[4]};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: ${(props) => props.translate || `translateY(10px)`};
    box-shadow: 0px 0px 10px #dde0ed;
    transition: all 0.2s ease-in-out;
    overflow: hidden;
    /* position: relative; */
    &:hover {
        box-shadow: 0px 15px 30px #e8ebf5;
        transform: ${(props) => props.translate || `translateY(0)`};
    }
    h2 {
        width: 100%;
        text-align: center;
        margin-bottom: 15px;
        padding: 15px 0;
        border-bottom: 1px solid #d9dce8;
        color: ${grayColor[2]};
    }
`;
