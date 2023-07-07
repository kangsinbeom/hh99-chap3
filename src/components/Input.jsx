import React from 'react';
import styled from 'styled-components';
import { blueColor, grayColor } from '../assets/styles/Color';

function Input({ value, onChange, name }) {
    return <StyledInput value={value} onChange={onChange} name={name} placeholder={name} />;
}

export default Input;

const StyledInput = styled.input`
    padding-left: 10px;
    width: 90%;
    height: 40px;
    background-color: ${blueColor[3]};
    border-radius: 5px;
    border: 1px solid ${blueColor[2]};
    margin-bottom: 10%;
    outline-color: ${blueColor[2]};
    color: ${grayColor[1]};
    &::placeholder {
        color: ${grayColor[2]};
    }
    &:hover {
        cursor: pointer;
    }
`;

// &는 쓰는 녀석이 이 행동도 같이했음 좋겠다고 느꼈을 때 쓰면됨
// 이거 없으면 하위요소중에 이거 할 애를 찾아서 넣어줘야함
