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
    color: ${(props) => blueColor[props.$font_color] || `#fff`};
    border: ${(props) => props.$border || `none`};
    display: flex;
    justify-content: ${(props) => props.$center || `space-between`};
    align-items: center;
    white-space: nowrap;
    font-weight: 700;
    gap: 20px;
    transition: all 0.3s ease-in-out;
    ${({ font_size }) => {
        if (font_size) {
            return css`
                font-size: ${font_size};
                justify-content: center;
                width: 40px;
            `;
        }
    }}
    font-size: ${(props) => props.$font_size || `14px`};
    &:hover {
        background-color: ${(props) => props.$hover_color || blueColor[1]};
        color: ${(props) => props.$hover_font_color || blueColor[1]};
    }
    &:active {
        background-color: ${(props) => blueColor[props.$bc] || blueColor[1]};
        color: ${(props) => blueColor[props.$font_color] || `#fff`};
    }
`;

const PrimaryButton = ({ children, ...restProps }) => {
    return (
        <ButtonStyle
            {...restProps}
            $bc={1}
            $hover_color={blueColor[2]}
            $font_color={4}
            $hover_font_color={blueColor[0]}
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
            $hover_color={blueColor[2]}
            $font_color={1}
            $border={`1px solid ${blueColor[2]}`}
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
            $font_color={4}
            $font_size="20px"
            width="40px"
            $center="center"
            $hover_font_color={blueColor[3]}
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
