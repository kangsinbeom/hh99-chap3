import React, { useState } from "react";
import styled from "styled-components";
import { grayColor } from "../utils/GlobalSytle";
function Modal(props) {
  const [modalChecked, setModalChecked] = useState(false);

  const onClickModalHandler = () => {
    let checked = !modalChecked;
    setModalChecked(checked);
  };
  return (
    <StyledModal>
      <h2>Modal</h2>
      <button onClick={onClickModalHandler}>Opne Modal!!</button>
      {modalChecked ? (
        <>
          <div className="modal-background" onClick={onClickModalHandler}></div>
          <div className="modal">
            <button onClick={onClickModalHandler}>x</button>
          </div>
        </>
      ) : null}
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
    position: fixed;
    border-radius: 10px;
    border: 2px solid black;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #f2f5ff;
  }
  .modal-background {
    opacity: 0.3;
    background-color: ${grayColor[1]};
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
  }
`;
