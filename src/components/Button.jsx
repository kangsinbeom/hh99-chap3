import React from 'react';
import { styled, css } from 'styled-components';
import { blueColor, grayColor } from '../utils/GlobalSytle';
const ButtonStyle = styled.button`
    /* width: 130px; */
    width: ${(props) => props.width || ``};
    height: 40px;
    padding: 10px 20px;
    margin: 8px;
    background-color: ${(props) => blueColor[props.$bc] || blueColor[1]};
    border-radius: 25px;
    color: ${(props) => blueColor[props.fontColor] || `#fff`};
    border: ${(props) => props.border || `none`};
    display: flex;
    justify-content: ${(props) => props.center || `space-between`};
    align-items: center;
    white-space: nowrap;
    font-weight: 700;
    gap: 20px;
    transition: all 0.3s ease-in-out;
    ${({ fontSize }) => {
        if (fontSize) {
            return css`
                font-size: ${fontSize};
                justify-content: center;
                width: 40px;
            `;
        }
    }}
    font-size: ${(props) => props.fontSize || `14px`};
    &:hover {
        background-color: ${(props) => props.hoverColor || blueColor[1]};
        color: ${(props) => props.hoverFontColor || blueColor[1]};
    }
    &:active {
        background-color: ${(props) => blueColor[props.$bc] || blueColor[1]};
        color: ${(props) => blueColor[props.fontColor] || `#fff`};
    }
`;

const PrimaryButton = ({ children, ...restProps }) => {
    return (
        <ButtonStyle
            {...restProps}
            $bc={1}
            hoverColor={blueColor[2]}
            fontColor={4}
            hoverFontColor={blueColor[0]}
        >
            {children}
        </ButtonStyle>
    );
};

const SecondaryButton = ({ children, ...restProps }) => {
    return (
        <ButtonStyle
            {...restProps}
            $bc={3}
            hoverColor={blueColor[2]}
            fontColor={1}
            border={`1px solid ${blueColor[2]}`}
        >
            {children}
        </ButtonStyle>
    );
};

//[ ]화면 사이즈에 따라 버튼이 아이콘 버튼으로
const IconButton = ({ children, ...restProps }) => {
    return (
        <ButtonStyle
            {...restProps}
            $bc={0}
            fontColor={4}
            fontSize="20px"
            hoverFontColor={blueColor[3]}
        >
            {children}
        </ButtonStyle>
    );
};

const Primary = PrimaryButton;
const Secondary = SecondaryButton;
const Icon = IconButton;
const Button = { Primary, Secondary, Icon };

export default Button;
