import React from "react";
import ReactDOM from "react-dom";
import { styled, css } from "styled-components";
import "../assets/styles/modal.css";
import Icon from "../assets/icons/icons";
import Button from "./Button";

export const ModalOne = ({ onClick, modalChecked }) => {
  return (
    <StyledModal>
      <Button.Primary width="250px" onClick={onClick}>
        <Icon.Heart />
        open modal
        <Icon.Heart />
      </Button.Primary>
      {modalChecked
        ? ReactDOM.createPortal(
            <>
              <div className="modal-background" onClick={onClick}></div>
              <div className="modal">
                <Button.Icon onClick={onClick}>
                  <Icon.Xmark />
                </Button.Icon>
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
      <Button.Secondary onClick={onClick}>
        <Icon.Heart />
        open modalTwo
      </Button.Secondary>
      {modalChecked
        ? ReactDOM.createPortal(
            <>
              <div className="modal-background"></div>
              <div className="modal">
                <p>Modal version2</p>
                <Button.Primary width="100px" $center="center">
                  {" "}
                  check
                </Button.Primary>
                <Button.Secondary
                  width="100px"
                  $center="center"
                  onClick={onClick}
                >
                  {" "}
                  close
                </Button.Secondary>
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
