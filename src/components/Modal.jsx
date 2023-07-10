import React from "react";
import ReactDOM from "react-dom";
import { styled } from "styled-components";
import "../assets/styles/modal.css";
import Icon from "../assets/icons/icons";
import Button from "./Button";

export const ModalOne = ({ onClick, modalChecked }) => {
  return (
    <StyledModal>
      <Button $size={"large"} onClick={onClick}>
        <Icon.Heart />
        open modal
        <Icon.Heart />
      </Button>
      {modalChecked
        ? ReactDOM.createPortal(
            <>
              <div className="modal-background" onClick={onClick}></div>
              <div className="modal">
                <Button $btn_style={"icon"} onClick={onClick}>
                  <Icon.Xmark />
                </Button>
                <p>Modal version1</p>
              </div>
            </>,
            document.getElementById("portal")
          )
        : null}
    </StyledModal>
  );
};

export const ModalTwo = ({ onClick, modalChecked }) => {
  return (
    <StyledModal>
      <Button $btn_style={"secondary"} onClick={onClick}>
        <Icon.Heart />
        open modalTwo
      </Button>
      {modalChecked
        ? ReactDOM.createPortal(
            <>
              <div className="modal-background"></div>
              <div className="modal">
                <p>Modal version2</p>
                <Button $btn-style={"primary"} $width="100px" $center="center">
                  {" "}
                  check
                </Button>
                <Button
                  $btn-style={"secondary"}
                  $width="100px"
                  $center="center"
                  onClick={onClick}
                >
                  {" "}
                  close
                </Button>
              </div>
            </>,
            document.getElementById("portal")
          )
        : null}
    </StyledModal>
  );
};

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// 공통부분을 빼보자
