import React, { useState } from 'react';
import { styled } from 'styled-components';
import { blueColor, grayColor } from '../utils/GlobalSytle';
import Button from '../components/Button';
import reactDom from 'react-dom';
import Icon from '../assets/icons';

const SelectList = styled.ul`
    width: 250px;
    /* height: 40px; */
    border-radius: 25px;
    overflow: hidden;
    padding: 10px;
    background-color: ${blueColor[3]};
    border: 1px solid ${blueColor[2]};
    /* position: absolute;
    transform: translate(0, 78%); */
`;
const SelectItem = styled.li`
    width: 100%;
    height: 40px;
    padding: 10px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 600;
    display: flex;
    align-items: center;
    color: ${grayColor[1]};
    &:hover {
        background-color: ${blueColor[2]};
    }
`;
const ItemNonHidden = styled.div`
    position: absolute;
    transform: translate(0, 90%);
`;
export const Selecter = () => {
    const selectOption = [
        { value: '리액트', text: '리액트' },
        { value: '자바', text: '자바' },
        { value: '스프링', text: '스프링' },
        { value: '리액트 네이티브', text: '리액트 네이티브' },
    ];
    const [selectBox, setSelectBox] = useState(false);
    const [selectBtnText, setSelectBtnText] = useState(selectOption[0].text);
    const SelectClick = () => {
        setSelectBox(!selectBox);
    };

    const OptionClick = (option) => {
        setSelectBtnText(option);
        setSelectBox(!selectBox);
    };

    return (
        <>
            <Button.Secondary width="250px" onClick={SelectClick}>
                {selectBtnText}
                <Icon.CaretDown />
            </Button.Secondary>
            {selectBox && (
                <SelectItemNonHidden>
                    <SelectList>
                        {selectOption.map((option) => {
                            return (
                                <SelectItem
                                    value={option.value}
                                    onClick={() => OptionClick(option.value)}
                                >
                                    {option.text}
                                </SelectItem>
                            );
                        })}
                    </SelectList>
                </SelectItemNonHidden>
            )}
        </>
    );
};

const SelectItemNonHidden = ({ children }) => {
    return <ItemNonHidden>{children}</ItemNonHidden>;
};
