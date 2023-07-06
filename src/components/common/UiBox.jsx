import React from 'react';
import styled from 'styled-components';
import { blueColor, grayColor } from '../../utils/GlobalSytle';
function UiBox({ children, title }) {
    return (
        <StyledDiv>
            <h2>{title}</h2>
            {children}
        </StyledDiv>
    );
}

export default UiBox;

const StyledDiv = styled.div`
    padding: 20px 30px 30px;
    width: 100%;
    background-color: ${grayColor[4]};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateY(10px);

    box-shadow: 0px 0px 10px #dde0ed;

    transition: all 0.2s ease-in-out;

    &:hover {
        box-shadow: 0px 15px 30px #e8ebf5;

        transform: translateY(0);
    }
    h2 {
        width: 100%;
        text-align: center;
        margin-bottom: 15px;
        padding: 15px 0;
        /* box-shadow: 0px 4px 0px ${grayColor[2]}; */
        border-bottom: 1px solid ${grayColor[2]};
        color: ${grayColor[2]};
    }
`;
