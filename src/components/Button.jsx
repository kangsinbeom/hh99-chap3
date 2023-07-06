import React from 'react';
import { styled } from 'styled-components';
import { blueColor } from '../utils/GlobalSytle';
import { Heart } from '../assets/icons';
// function Button({ children }) {
//     return <ButtonStyle>{children}</ButtonStyle>;
// }

// const Button = ({ children, ...restProps }) => {
//     return (
//         <ButtonStyle {...restProps}>
//             <Heart /> {children} <Heart />
//         </ButtonStyle>
//     );
// };

const ButtonStyle = styled.button`
    /* width: 130px; */
    height: 40px;
    padding: 10px 20px;
    margin: 8px;
    background-color: ${blueColor[1]};
    border-radius: 25px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;
    font-weight: 700;
    gap: 20px;
`;

// const TextButton = ({ children, ...restProps }) => {
//     return (
//         <Button {...restProps} $bc="#55efc4" $activebc="#00b894">
//             {children}
//         </Button>
//     );
// };
export const Button = ({ children }) => {
    return (
        <ButtonStyle $bc="#55efc4" $activebc="#00b894">
            {children}
        </ButtonStyle>
    );
};
// const FirstIconButton = ({ children, Icon }) => {
//     return (
//         <Button {...restProps} $bc="red" $activebc="#ffb894" $outlined>
//             {children}
//         </Button>
//     );
// };
// //[ ]화면 사이즈에 따라 버튼이 아이콘 버튼으로
// const IconButton = ({ children }) => {
//     return (
//         <Button {...restProps} $bc="#55efc4" $activebc="#00b894" $outlined>
//             {children}
//         </Button>
//     );
// };

// const IconText = IconTextButton;
// const Button = { IconText };

export default Button;
