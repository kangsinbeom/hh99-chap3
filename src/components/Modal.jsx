import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
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
            <Button.Primary width="250px" onClick={onClickModalHandler}>
                <Icon.Heart />
                open modal
                <Icon.Heart />
            </Button.Primary>
            {modalChecked
                ? ReactDOM.createPortal(
                      <>
                          <div className="modal-background" onClick={onClickModalHandler}></div>
                          <div className="modal">
                              <Button.Icon onClick={onClickModalHandler}>
                                  <Icon.Xmark />
                              </Button.Icon>
                              <p>Modal version1</p>
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
