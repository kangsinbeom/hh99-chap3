import React from 'react';
import { styled } from 'styled-components';
import { blueColor, grayColor } from '../utils/GlobalSytle';

export const Footer = () => {
    return (
        <FooterStyle>
            <FooterContent>
                This page has been created for the React project assignments of HANGHAE 99
            </FooterContent>
        </FooterStyle>
    );
};

const FooterStyle = styled.footer`
    width: 100%;
    background-color: ${blueColor[2]};
    padding: 20px;
`;

const FooterContent = styled.p`
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    color: ${grayColor[3]};
`;
