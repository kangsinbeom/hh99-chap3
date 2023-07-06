import React from "react";
import styled from "styled-components";
function Modal(props) {
  const onClickModalHandler = (e) => {};
  return (
    <StyledModal>
      <h2>Modal</h2>
      <button>Opne Modal!!</button>
      <div className="modal"></div>
    </StyledModal>
  );
}

export default Modal;

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .modal {
    width: 500px;
    height: 500px;
    position: absolute;
    border-radius: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #f2f5ff;
  }
`;
