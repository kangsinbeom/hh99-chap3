import React from "react";
import styled from "styled-components";
import { blueColor, grayColor } from "../utils/GlobalSytle";
function Input(props) {
  return <StyledInput type="text" placeholder="input placetext" />;
}

export default Input;

const StyledInput = styled.input`
  width: 90%;
  height: 40px;
  background-color: ${blueColor[3]};
  border-radius: 5px;
  border: 1px solid ${blueColor[2]};
  margin-bottom: 10%;
  &::placeholder {
    color: ${grayColor[2]};
  }
`;

// & 없이 클래스를 쓰면 자식선택자 중 어쩌고 저쩌고
// &클래스 하면 클래
