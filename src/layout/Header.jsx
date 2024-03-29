import React from 'react';
import { styled } from 'styled-components';
import { blueColor, grayColor } from '../assets/styles/colors';
import Icon from '../assets/icons/icons';

const HeaderStyle = styled.header`
    max-width: 800px;
    margin: 0 auto;
    width: 100%;
    padding: 45px 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
    color: ${grayColor[2]};
    h1 {
        font-size: 16px;
    }
`;

export const Header = () => {
    return (
        <HeaderStyle>
            <h1>hh99-chap3 ui components</h1>
            <a href="https://github.com/kangsinbeom/hh99-chap3">
                <Icon.Git color={grayColor[2]} />
            </a>
        </HeaderStyle>
    );
};
