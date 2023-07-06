import React, { useState } from "react";
import styled from "styled-components";
import { grayColor } from "../utils/GlobalSytle";
import ReactDOM from "react-dom";
import Icon from "../assets/icons";
import Button from "./Button";
function Modal(props) {
  const [modalChecked, setModalChecked] = useState(false);

  const onClickModalHandler = () => {
    let checked = !modalChecked;
    setModalChecked(checked);
  };

  return (
    <StyledModal>
      <Button.Primary width="250px" onClick={onClickModalHandler}>
        <Icon.Heart />
        open modal
        <Icon.Heart />
      </Button.Primary>
      {modalChecked
        ? ReactDOM.createPortal(
            <>
              <div
                className="modal-background"
                onClick={onClickModalHandler}
              ></div>
              <div className="modal">
                <Button.Icon onClick={onClickModalHandler}>
                  <Icon.Xmark />
                </Button.Icon>
                <p>혜경님이 너 싫어함</p>
              </div>
            </>,
            document.getElementById("portal")
          )
        : null}
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
    inset: 0px;
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
