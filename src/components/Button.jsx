import React from 'react';
import { styled } from 'styled-components';
import { blueColor } from '../utils/GlobalSytle';
function Button() {
    return <ButtonStyle>asdfas</ButtonStyle>;
}

const ButtonStyle = styled.button`
    width: 130px;
    height: 40px;
    background-color: ${blueColor[1]};
    border-radius: 25px;
`;

export default Button;
