import React from "react";
import { styled } from "styled-components";
import { blueColor, grayColor } from "../assets/styles/colors";

// Button 컴포넌트는 스타일에 대한 $size와 $btn_style 2개의 인자를 받습니다.
// $size를 받지 않은 경우 button 안에 있는 컨텐츠 만큼의 길이를 갖습니다.
// $btn_style를 받지 않은 경우 기본값은 primary Button style와 동일합니다.
// $btn_style를 받지 않고 아래의 스타일 컴포넌트 props를 참고하여 임의의 스타일을 지정할 수 있습니다.

// ----- Button styled-conponent props guide-----
// $width : 버튼의 가로 사이즈
// $center : justify-content 속성 값

// $bc : background color
// $border : border를 넣습니다.

// $font_color : font color
// $font_size : font size

// $hover_color : hover 이벤트시 background color
// $hover_font_color : hover 이벤트시 font color

const Button = ({ children, $size, $btn_style, ...restProps }) => {
  const sizeHandler = (size) => {
    switch (size) {
      case "large":
        return `250px;`;
      case "medium":
        return `180px;`;
      case "small":
        return `100px;`;
      default:
        return ``;
    }
  };
  switch ($btn_style) {
    case "primary":
      return (
        <PrimaryButton {...restProps} $width={sizeHandler($size)}>
          {children}
        </PrimaryButton>
      );
    case "secondary":
      return (
        <SecondaryButton {...restProps} $width={sizeHandler($size)}>
          {children}
        </SecondaryButton>
      );
    case "icon":
      return <IconButton {...restProps}>{children}</IconButton>;
    default:
      return (
        <ButtonStyle {...restProps} $width={sizeHandler($size)}>
          {children}
        </ButtonStyle>
      );
  }
};

const PrimaryButton = ({ children, ...restProps }) => {
  return (
    <ButtonStyle
      {...restProps}
      $bc={blueColor[1]}
      $hover_color={blueColor[2]}
      $font_color={blueColor[4]}
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
      $bc={blueColor[3]}
      $hover_color={blueColor[2]}
      $font_color={blueColor[1]}
      $border={`1px solid ${blueColor[2]}`}
    >
      {children}
    </ButtonStyle>
  );
};

const IconButton = ({ children, ...restProps }) => {
  return (
    <ButtonStyle
      {...restProps}
      $bc={blueColor[0]}
      $font_color={blueColor[4]}
      $font_size={"20px"}
      $center={"center"}
      $hover_color={blueColor[1]}
      $hover_font_color={blueColor[3]}
      $width={"40px"}
    >
      {children}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button`
  width: ${(props) => props.$width || ""};
  height: 40px;
  padding: 10px 20px;
  margin: 8px;
  background-color: ${(props) => props.$bc || blueColor[1]};
  border-radius: 25px;
  color: ${(props) => props.$font_color || `#fff`};
  border: ${(props) => props.$border || `none`};
  display: flex;
  justify-content: ${(props) => props.$center || `space-between`};
  align-items: center;
  white-space: nowrap;
  gap: 20px;
  font-size: ${(props) => props.$font_size || "14px"};
  font-weight: 700;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.$hover_color || blueColor[2]};
    color: ${(props) => props.$hover_font_color || blueColor[0]};
  }
  &:active {
    background-color: ${(props) => props.$bc || blueColor[1]};
    color: ${(props) => props.$font_color || `#fff`};
  }
`;

export default Button;
