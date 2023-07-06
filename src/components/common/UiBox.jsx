import React from 'react';
import styled from 'styled-components';
import { blueColor, grayColor } from '../../utils/GlobalSytle';
function UiBox({ children }) {
    return <StyledDiv>{children}</StyledDiv>;
}

export default UiBox;

const StyledDiv = styled.div`
    padding: 30px;
    width: 100%;
    background-color: ${grayColor[4]};
    border-radius: 10px;
    box-shadow: 0px 0px 10px #e8ebf5;
`;
