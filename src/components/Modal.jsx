import React from "react";
import styled from "styled-components";
function Modal(props) {
  return (
    <StyledModal>
      <h2>Modal</h2>
      <button>Opne Modal!!</button>
    </StyledModal>
  );
}

export default Modal;

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
