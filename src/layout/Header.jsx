import React from 'react';
import { styled } from 'styled-components';
import { blueColor, grayColor } from '../utils/GlobalSytle';
import Icon from '../assets/icons';

const HeaderStyle = styled.header`
    max-width: 800px;
    margin: 0 auto;
    width: 100%;
    /* height: 60px; */
    padding: 45px 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
    color: ${grayColor[2]};
`;

export const Header = () => {
    return (
        <HeaderStyle>
            hh99-chap3 ui components
            <a href="https://github.com/kangsinbeom/hh99-chap3">
                <Icon.Git color={grayColor[2]} />
            </a>
        </HeaderStyle>
    );
};
