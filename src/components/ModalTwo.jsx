import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { grayColor, blueColor } from '../assets/styles/colors';
import '../assets/styles/modal.css';
import Icon from '../assets/icons/icons';
import Button from './Button';
function Modal(props) {
    const [modalChecked, setModalChecked] = useState(false);

    const onClickModalHandler = () => {
        let checked = !modalChecked;
        setModalChecked(checked);
    };

    return (
        <StyledModal>
            <Button.Secondary onClick={onClickModalHandler}>
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
                                  {' '}
                                  check
                              </Button.Primary>
                              <Button.Secondary
                                  width="100px"
                                  $center="center"
                                  onClick={onClickModalHandler}
                              >
                                  {' '}
                                  close
                              </Button.Secondary>
                          </div>
                      </>,
                      document.getElementById('portal')
                  )
                : null}
        </StyledModal>
    );
}

export default Modal;

const StyledModal = styled.div`
    /* display: flex;
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
  } */
`;
